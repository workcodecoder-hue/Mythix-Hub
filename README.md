# Mythix Hub

Geometry Dash YouTube community rewards platform.

## Current build
- Responsive frontend preview served from `public/index.html`.
- Cloudflare Worker API scaffold.
- D1 migration for accounts, OAuth state, token ledger, daily check-ins, redemptions, video claims, uploads, insider posts, and audit logs.
- Google OAuth authorization-code flow with PKCE and signed HttpOnly session cookie.
- Creator-only admin API guard for vandrexxgaming65@gmail.com.

## Important setup status
Google OAuth code is implemented, but sign-in remains inactive until you create a Google OAuth web client, add the five required Worker settings/secrets, and apply the D1 migration. The dashboard now checks the real session and displays the signed-in Google profile and server balance. Other reward interactions still include preview/demo placeholders; YouTube reward verification and redemption processing are not implemented yet.

Follow [docs/GOOGLE_LOGIN_SETUP.md](docs/GOOGLE_LOGIN_SETUP.md) to activate real Google sign-in.

## Cloudflare setup
1. Install Node.js and Wrangler: `npm install -g wrangler`.
2. Log in: `wrangler login`.
3. Create D1: `wrangler d1 create mythix-hub`.
4. Copy the returned database ID into `wrangler.toml`.
5. Apply schema: `wrangler d1 migrations apply mythix-hub --remote`.
6. Add the four secrets and the `GOOGLE_REDIRECT_URI` variable in Cloudflare Worker Settings. See [Google login setup](docs/GOOGLE_LOGIN_SETUP.md) for exact values and Google Cloud steps.
7. Deploy: `wrangler deploy`.

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
