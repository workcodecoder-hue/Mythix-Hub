# Mythix Hub

Geometry Dash YouTube community rewards platform.

## Preview
The first commit is a responsive frontend preview with dashboard navigation, the full 14-item reward catalogue, and local-only demo interactions.

**Not active yet:** Google OAuth, YouTube verification, durable token accounting, D1 persistence, and server-side admin authorization. Sample balance/activity are demonstration data only.

## Planned stack
- Cloudflare Workers + Static Assets
- Cloudflare D1 for durable accounts, token ledger, redemptions, and audit records
- Cloudflare R2 for artwork uploads
- Google OAuth 2.0
- YouTube Data API v3

## Next
1. Add Worker routes and D1 schema.
2. Configure OAuth redirect URLs and secrets in Cloudflare.
3. Enforce creator authorization server-side for vandrexxgaming65@gmail.com.
4. Implement YouTube channel identity and supported engagement checks.
5. Replace preview-only interactions with database-backed operations.
