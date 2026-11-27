CREATE TABLE IF NOT EXISTS messenger_push_subscriptions (
 user_id TEXT NOT NULL REFERENCES messenger_users(id) ON DELETE CASCADE,
 endpoint TEXT NOT NULL UNIQUE,
 p256dh TEXT NOT NULL,
 auth TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_messenger_push_user ON messenger_push_subscriptions(user_id);