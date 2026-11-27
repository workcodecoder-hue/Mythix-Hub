PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS messenger_users (
 id TEXT PRIMARY KEY,
 username TEXT NOT NULL COLLATE NOCASE UNIQUE,
 password_hash TEXT NOT NULL,
 password_salt TEXT NOT NULL,
 display_name TEXT NOT NULL,
 bio TEXT NOT NULL DEFAULT '',
 avatar_color TEXT NOT NULL DEFAULT '#8067f2',
 is_admin INTEGER NOT NULL DEFAULT 0,
 last_seen_at TEXT,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS messenger_sessions (
 id TEXT PRIMARY KEY,
 user_id TEXT NOT NULL REFERENCES messenger_users(id) ON DELETE CASCADE,
 expires_at INTEGER NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS idx_messenger_sessions_user ON messenger_sessions(user_id);
CREATE TABLE IF NOT EXISTS messenger_conversations (
 id TEXT PRIMARY KEY,
 kind TEXT NOT NULL CHECK(kind IN ('dm','group')),
 title TEXT,
 dm_key TEXT UNIQUE,
 created_by TEXT NOT NULL REFERENCES messenger_users(id),
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS messenger_members (
 conversation_id TEXT NOT NULL REFERENCES messenger_conversations(id) ON DELETE CASCADE,
 user_id TEXT NOT NULL REFERENCES messenger_users(id) ON DELETE CASCADE,
 role TEXT NOT NULL DEFAULT 'member',
 joined_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 last_read_at TEXT,
 PRIMARY KEY(conversation_id,user_id)
);
CREATE INDEX IF NOT EXISTS idx_messenger_members_user ON messenger_members(user_id);
CREATE TABLE IF NOT EXISTS messenger_messages (
 id TEXT PRIMARY KEY,
 conversation_id TEXT NOT NULL REFERENCES messenger_conversations(id) ON DELETE CASCADE,
 sender_id TEXT NOT NULL REFERENCES messenger_users(id),
 body TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
 edited_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_messenger_messages_conversation ON messenger_messages(conversation_id,created_at);
CREATE TABLE IF NOT EXISTS messenger_typing (
 conversation_id TEXT NOT NULL REFERENCES messenger_conversations(id) ON DELETE CASCADE,
 user_id TEXT NOT NULL REFERENCES messenger_users(id) ON DELETE CASCADE,
 updated_at INTEGER NOT NULL,
 PRIMARY KEY(conversation_id,user_id)
);
CREATE TABLE IF NOT EXISTS messenger_meta (
 key TEXT PRIMARY KEY,
 value TEXT NOT NULL
);