PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS users (
 id TEXT PRIMARY KEY, google_sub TEXT UNIQUE NOT NULL, email TEXT UNIQUE NOT NULL,
 display_name TEXT NOT NULL, youtube_channel_id TEXT, youtube_channel_name TEXT,
 google_access_token_enc TEXT, google_refresh_token_enc TEXT, google_token_expires_at TEXT,
 token_balance INTEGER NOT NULL DEFAULT 0 CHECK(token_balance >= 0),
 supporter_badge INTEGER NOT NULL DEFAULT 0, content_tracker_unlocked INTEGER NOT NULL DEFAULT 0,
 insider_unlocked INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS oauth_states (state TEXT PRIMARY KEY, code_verifier TEXT NOT NULL, expires_at TEXT NOT NULL);
CREATE INDEX IF NOT EXISTS idx_oauth_expiry ON oauth_states(expires_at);
CREATE TABLE IF NOT EXISTS token_transactions (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), amount INTEGER NOT NULL,
 reason TEXT NOT NULL, reference_id TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(user_id, reason, reference_id)
);
CREATE TABLE IF NOT EXISTS daily_checkins (user_id TEXT PRIMARY KEY REFERENCES users(id), claimed_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS redemptions (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), reward_key TEXT NOT NULL,
 cost INTEGER NOT NULL CHECK(cost > 0), status TEXT NOT NULL DEFAULT 'pending',
 form_data TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS video_reward_claims (
 id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), video_id TEXT NOT NULL,
 reward_type TEXT NOT NULL CHECK(reward_type IN ('like','comment')), created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 UNIQUE(user_id, video_id, reward_type)
);
CREATE TABLE IF NOT EXISTS uploads (
 id TEXT PRIMARY KEY, video_id TEXT, title TEXT, uploaded_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 is_new INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS insider_posts (
 id TEXT PRIMARY KEY, title TEXT NOT NULL, body TEXT NOT NULL, image_key TEXT,
 published INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS audit_log (
 id TEXT PRIMARY KEY, actor_email TEXT NOT NULL, action TEXT NOT NULL,
 target_user_id TEXT, details TEXT, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_transactions_user ON token_transactions(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_redemptions_status ON redemptions(status, created_at);
CREATE INDEX IF NOT EXISTS idx_video_claims_video ON video_reward_claims(video_id);
