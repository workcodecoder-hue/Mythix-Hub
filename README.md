# Mythix Messenger

A private, username-and-password messaging app built on Cloudflare Workers and D1.

## Features
- Username + password registration and sign-in (no Google, email, or phone verification).
- Passwords hashed with PBKDF2-SHA-256 and per-user random salts.
- Signed, seven-day HttpOnly, Secure, SameSite=Lax sessions.
- Direct messages and group conversations.
- User search, editable display name and bio, presence, typing indicators, and read-state tracking.
- Responsive desktop and mobile interface.

## Deployment
- Cloudflare Worker: `mythix-hub`
- D1 database: `mythix-hub`
- Frontend: `src/worker.js` (Worker-served homepage) and mirrored `public/index.html`.
- D1 schema: `migrations/0002_messenger.sql`.

The first account registered becomes the initial administrator. Usernames are public identifiers; passwords are never stored in plaintext. Since this app deliberately does not collect email or phone numbers, users who forget their passwords cannot self-serve a reset.

## Development
```sh
npm install
npm run dev
```

Deploy with `npm run deploy`. The Worker uses the existing `DB` D1 binding and `ASSETS` static-assets binding.
