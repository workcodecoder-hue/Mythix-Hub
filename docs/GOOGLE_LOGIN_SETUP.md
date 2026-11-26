# Turn on real Google sign-in

The Worker implements Google's server-side OAuth authorization-code flow with PKCE, signed HttpOnly sessions, and encrypted-at-rest Google tokens. Your credentials must be added as Cloudflare Worker secrets, never committed to GitHub.

## 1. Get the public site URL

In Cloudflare, open **Workers & Pages → mythix-hub** and copy the deployed hostname (or custom domain). For example, if the site is `https://mythix-hub.example.workers.dev`, then:

- Authorized JavaScript origin: `https://mythix-hub.example.workers.dev`
- Redirect URI: `https://mythix-hub.example.workers.dev/api/auth/callback`

Use your actual hostname. The redirect URI must match exactly in Google Cloud and Cloudflare.

## 2. Create a Google OAuth web client

1. Open [Google Cloud Console → Google Auth Platform → Clients](https://console.cloud.google.com/auth/clients).
2. Configure the OAuth consent screen / branding and audience.
3. Create a client with application type **Web application**.
4. Add your site origin under **Authorized JavaScript origins**.
5. Add the full callback URL above under **Authorized redirect URIs**.
6. Copy the **Client ID** and **Client Secret**.
7. If the app is in **Testing** mode, add the Google accounts that will test it as test users. Google may show an unverified-app warning while testing; requested YouTube access may require additional Google verification before broad public use.

The sign-in flow requests `openid email profile` and YouTube read-only access. Google handles the account consent screen; Mythix Hub never asks users for their Google password.

## 3. Generate two independent keys

On your own computer, run this twice (each run creates a fresh random 32-byte key):

```sh
openssl rand -base64 32
```

Keep the outputs separate:
- First output → `SESSION_SECRET`
- Second output → `TOKEN_ENCRYPTION_KEY`

Do not post these values in chat, commit them to GitHub, or reuse the same value for both.

## 4. Add Worker settings in Cloudflare

Open **Workers & Pages → mythix-hub → Settings → Variables and Secrets**.

Add these as **Secrets**:
- `GOOGLE_CLIENT_ID` — Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET` — Google OAuth Client Secret
- `SESSION_SECRET` — first generated key
- `TOKEN_ENCRYPTION_KEY` — second generated key

Add this as a normal **Text** variable:
- `GOOGLE_REDIRECT_URI` — exact callback URL from step 1

Save, then deploy a new version / trigger a redeploy so the Worker runs with the new settings.

## 5. Apply the D1 schema once

The Worker requires the tables in `migrations/0001_init.sql`. Open **Cloudflare → Storage & databases → D1 → mythix-hub → Console**, paste the contents of that SQL file, and execute it once. Alternatively, from a machine logged in with Wrangler and using this repository, run:

```sh
npx wrangler d1 migrations apply mythix-hub --remote
```

Do not run the raw SQL repeatedly if it has already been applied; use the migrations command to track migration history.

## 6. Test

Open the site in a private/incognito window and click **Continue with Google**. Approve the requested access. You should return to Mythix Hub with your Google name/email shown in Profile and a server-loaded balance. Refresh the page: the session should remain signed in. Use **Sign out** to end the session.

If Google shows `redirect_uri_mismatch`, compare the callback URL character-for-character in Cloudflare and Google Cloud. If the app says OAuth is not configured, one or more Worker secrets/variables were not saved to the deployed Worker.
