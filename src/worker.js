const ADMIN_EMAIL = "vandrexxgaming65@gmail.com";
const SESSION_COOKIE = "mythix_session";
const GOOGLE_AUTH = "https://accounts.google.com/o/oauth2/v2/auth";
const GOOGLE_TOKEN = "https://oauth2.googleapis.com/token";
const GOOGLE_USERINFO = "https://openidconnect.googleapis.com/v1/userinfo";
const YOUTUBE_SCOPE = "https://www.googleapis.com/auth/youtube.readonly";

function json(data, status, extraHeaders) {
  const headers = new Headers({ "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  if (extraHeaders) for (const [key, value] of Object.entries(extraHeaders)) headers.set(key, value);
  return new Response(JSON.stringify(data), { status: status || 200, headers });
}
function redirect(url, headers) { return new Response(null, { status: 302, headers: Object.assign({ location: url, "cache-control": "no-store" }, headers || {}) }); }
function b64url(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function fromB64url(value) {
  const base = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base + "=".repeat((4 - base.length % 4) % 4));
  return Uint8Array.from(binary, c => c.charCodeAt(0));
}
function randomToken(bytes) { const data = new Uint8Array(bytes); crypto.getRandomValues(data); return b64url(data); }
async function hmac(value, secret) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
}
async function signSession(userId, secret) {
  const payload = b64url(new TextEncoder().encode(JSON.stringify({ sub: userId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 })));
  return payload + "." + b64url(await hmac(payload, secret));
}
async function readSession(request, secret) {
  if (!secret) return null;
  const cookie = request.headers.get("Cookie") || "";
  const item = cookie.split(";").map(x => x.trim()).find(x => x.startsWith(SESSION_COOKIE + "="));
  if (!item) return null;
  const value = decodeURIComponent(item.slice(SESSION_COOKIE.length + 1));
  const parts = value.split(".");
  if (parts.length !== 2) return null;
  const expected = await hmac(parts[0], secret);
  let supplied;
  try { supplied = fromB64url(parts[1]); } catch (_) { return null; }
  if (expected.length !== supplied.length || !crypto.subtle) return null;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected[i] ^ supplied[i];
  if (diff !== 0) return null;
  try {
    const payload = JSON.parse(new TextDecoder().decode(fromB64url(parts[0])));
    if (!payload.sub || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload.sub;
  } catch (_) { return null; }
}
function cookieHeader(value, maxAge) {
  return SESSION_COOKIE + "=" + encodeURIComponent(value) + "; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=" + maxAge;
}
async function encryptSecret(value, keyText) {
  if (!value || !keyText) return null;
  const raw = Uint8Array.from(atob(keyText), c => c.charCodeAt(0));
  if (raw.length !== 32) throw new Error("TOKEN_ENCRYPTION_KEY must be base64-encoded 32 bytes");
  const key = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(value));
  return b64url(iv) + "." + b64url(new Uint8Array(encrypted));
}
async function currentUser(request, env) {
  const id = await readSession(request, env.SESSION_SECRET);
  if (!id) return null;
  return await env.DB.prepare("SELECT id, email, display_name, youtube_channel_id, youtube_channel_name, token_balance, supporter_badge, content_tracker_unlocked, insider_unlocked, created_at FROM users WHERE id = ?").bind(id).first();
}
function requiredEnv(env) {
  return ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REDIRECT_URI", "SESSION_SECRET", "TOKEN_ENCRYPTION_KEY"].filter(k => !env[k]);
}
async function handle(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (request.method === "GET" && path === "/api/health") {
    return json({ ok: true, service: "mythix-hub-api", databaseConfigured: !!env.DB, oauthConfigured: !requiredEnv(env).length });
  }
  if (request.method === "GET" && path === "/api/auth/google") {
    const missing = requiredEnv(env);
    if (missing.length) return json({ error: "Google sign-in is not configured yet.", missing }, 503);
    const state = randomToken(32);
    const verifier = randomToken(48);
    const challenge = b64url(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))));
    await env.DB.prepare("INSERT INTO oauth_states (state, code_verifier, expires_at) VALUES (?, ?, datetime('now', '+10 minutes'))").bind(state, verifier).run();
    const params = new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      redirect_uri: env.GOOGLE_REDIRECT_URI,
      response_type: "code",
      scope: "openid email profile " + YOUTUBE_SCOPE,
      state,
      code_challenge: challenge,
      code_challenge_method: "S256",
      access_type: "offline",
      prompt: "select_account",
      include_granted_scopes: "true"
    });
    return redirect(GOOGLE_AUTH + "?" + params.toString());
  }
  if (request.method === "GET" && path === "/api/auth/callback") {
    const googleError = url.searchParams.get("error");
    if (googleError) return redirect("/?auth_error=" + encodeURIComponent(googleError));
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    if (!code || !state) return json({ error: "Missing OAuth code or state." }, 400);
    const saved = await env.DB.prepare("SELECT state, code_verifier FROM oauth_states WHERE state = ? AND expires_at > datetime('now')").bind(state).first();
    await env.DB.prepare("DELETE FROM oauth_states WHERE state = ?").bind(state).run();
    if (!saved) return json({ error: "Sign-in expired or state was invalid. Please try again." }, 400);
    const missing = requiredEnv(env);
    if (missing.length) return json({ error: "OAuth configuration is incomplete.", missing }, 503);
    const tokenResponse = await fetch(GOOGLE_TOKEN, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: env.GOOGLE_CLIENT_ID,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        redirect_uri: env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
        code_verifier: saved.code_verifier
      })
    });
    const tokens = await tokenResponse.json();
    if (!tokenResponse.ok || !tokens.access_token) return json({ error: "Google token exchange failed.", details: tokens.error_description || tokens.error || "Unknown OAuth error." }, 502);
    const infoResponse = await fetch(GOOGLE_USERINFO, { headers: { authorization: "Bearer " + tokens.access_token } });
    const info = await infoResponse.json();
    if (!infoResponse.ok || !info.sub || !info.email) return json({ error: "Google did not return a verified account profile." }, 502);
    if (info.email_verified !== true) return json({ error: "Your Google email must be verified." }, 403);
    const userId = "usr_" + randomToken(18);
    const accessEncrypted = await encryptSecret(tokens.access_token, env.TOKEN_ENCRYPTION_KEY);
    const refreshEncrypted = await encryptSecret(tokens.refresh_token || "", env.TOKEN_ENCRYPTION_KEY);
    await env.DB.prepare(
      "INSERT INTO users (id, google_sub, email, display_name, google_access_token_enc, google_refresh_token_enc, google_token_expires_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now', '+' || ? || ' seconds')) ON CONFLICT(google_sub) DO UPDATE SET email=excluded.email, display_name=excluded.display_name, google_access_token_enc=excluded.google_access_token_enc, google_refresh_token_enc=COALESCE(excluded.google_refresh_token_enc, users.google_refresh_token_enc), google_token_expires_at=excluded.google_token_expires_at, updated_at=CURRENT_TIMESTAMP"
    ).bind(userId, info.sub, info.email.toLowerCase(), info.name || info.email, accessEncrypted, refreshEncrypted, Math.max(60, Number(tokens.expires_in || 3600) - 60)).run();
    const user = await env.DB.prepare("SELECT id FROM users WHERE google_sub = ?").bind(info.sub).first();
    const session = await signSession(user.id, env.SESSION_SECRET);
    return redirect("/", { "set-cookie": cookieHeader(session, 60 * 60 * 24 * 7) });
  }
  if (request.method === "POST" && path === "/api/auth/logout") {
    return json({ ok: true }, 200, { "set-cookie": cookieHeader("", 0) });
  }
  if (request.method === "GET" && path === "/api/me") {
    const user = await currentUser(request, env);
    return user ? json({ authenticated: true, user }) : json({ authenticated: false, user: null }, 401);
  }
  if (request.method === "POST" && path === "/api/checkin") {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    const now = new Date().toISOString().replace("T", " ").replace("Z", "");
    const result = await env.DB.prepare("INSERT INTO daily_checkins (user_id, claimed_at) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET claimed_at=excluded.claimed_at WHERE daily_checkins.claimed_at <= datetime(excluded.claimed_at, '-24 hours')").bind(user.id, now).run();
    if (!result.meta || result.meta.changes !== 1) return json({ error: "Your daily check-in is not ready yet." }, 429);
    await env.DB.batch([
      env.DB.prepare("UPDATE users SET token_balance = token_balance + 5, updated_at = CURRENT_TIMESTAMP WHERE id = ?").bind(user.id),
      env.DB.prepare("INSERT INTO token_transactions (id, user_id, amount, reason, reference_id) VALUES (?, ?, 5, 'daily_checkin', ?)").bind("txn_" + randomToken(12), user.id, now)
    ]);
    const updated = await env.DB.prepare("SELECT token_balance FROM users WHERE id = ?").bind(user.id).first();
    return json({ ok: true, awarded: 5, token_balance: updated.token_balance });
  }
  if (request.method === "GET" && path.startsWith("/api/admin")) {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    if ((user.email || "").toLowerCase() !== ADMIN_EMAIL) return json({ error: "Admin access required." }, 403);
    return json({ ok: true, admin: true, message: "Creator-only API access verified." });
  }
  return env.ASSETS.fetch(request);
}
export default {
  async fetch(request, env) {
    try { return await handle(request, env); }
    catch (error) {
      return json({ error: "Server error.", message: env.ENVIRONMENT === "development" ? String(error && error.message || error) : "Please try again later." }, 500);
    }
  }
};