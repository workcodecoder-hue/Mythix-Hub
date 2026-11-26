# Mythix Hub

Geometry Dash YouTube community rewards platform.

## Current build
- Responsive frontend preview served from `public/index.html`.
- Cloudflare Worker API scaffold.
- D1 migration for accounts, OAuth state, token ledger, daily check-ins, redemptions, video claims, uploads, insider posts, and audit logs.
- Google OAuth authorization-code flow with PKCE and signed HttpOnly session cookie.
- Creator-only admin API guard for vandrexxgaming65@gmail.com.

## Important setup status
Google OAuth and the live database are **not configured until you create the Cloudflare D1 database, apply migrations, and add the required secrets**. The preview dashboard still contains sample/demo interactions; it is not yet wired to the API. YouTube reward verification and redemption processing are not implemented yet.

## Cloudflare setup
1. Install Node.js and Wrangler: `npm install -g wrangler`.
2. Log in: `wrangler login`.
3. Create D1: `wrangler d1 create mythix-hub`.
4. Copy the returned database ID into `wrangler.toml`.
5. Apply schema: `wrangler d1 migrations apply mythix-hub --remote`.
6. Add secrets with `wrangler secret put GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `SESSION_SECRET`, and `TOKEN_ENCRYPTION_KEY`.
7. Set `GOOGLE_REDIRECT_URI` as a Worker variable to your deployed `/api/auth/callback` URL.
8. In Google Cloud, configure the OAuth consent screen, add the authorized redirect URI exactly, and enable YouTube Data API v3.
9. Deploy: `wrangler deploy`.

Use `.dev.vars.example` as a checklist only. Never commit real credentials.

## API routes currently scaffolded
- `GET /api/health`
- `GET /api/auth/google`
- `GET /api/auth/callback`
- `POST /api/auth/logout`
- `GET /api/me`
- `POST /api/checkin`
- `GET /api/admin/*` (server-side email allowlist check)

Google sign-in requests OpenID profile/email and YouTube read-only scope. Google OAuth app verification/testing requirements may apply depending on deployment and audience.
