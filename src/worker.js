const INDEX_HTML = "<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"theme-color\" content=\"#090914\"><meta name=\"description\" content=\"Mythix Hub — Geometry Dash community rewards.\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\"><meta name=\"apple-mobile-web-app-title\" content=\"Mythix Hub\"><link rel=\"apple-touch-icon\" href=\"/icons/mythix-icon.svg\"><link rel=\"manifest\" href=\"/manifest.webmanifest\"><title>Mythix Hub</title>\n<style>\n@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');\n:root{color-scheme:dark;--bg:#090914;--panel:#111121;--line:#292943;--muted:#9696b6;--text:#f6f4ff;--purple:#a78bfa;--green:#6ee7b7}*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 80% -10%,#31205a66,transparent 38%),var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh}button{font:inherit;cursor:pointer}.shell{display:flex;min-height:100vh}.sidebar{width:240px;padding:26px 17px;border-right:1px solid var(--line);background:#0c0c19eF;display:flex;flex-direction:column;position:fixed;inset:0 auto 0 0;z-index:5}.brand{display:flex;align-items:center;gap:11px;padding:0 10px 30px}.logo{width:39px;height:39px;border-radius:13px;background:linear-gradient(135deg,#8b5cf6,#d946ef);display:grid;place-items:center;box-shadow:0 5px 24px #a855f755;font-size:21px}.brand strong{font:700 17px 'Space Grotesk'}.brand small{display:block;color:var(--muted);font-size:10px;letter-spacing:2px;margin-top:2px}.nav-label{font-size:10px;letter-spacing:1.8px;color:#72728f;padding:10px 12px}.nav{display:grid;gap:5px}.nav button{border:0;background:transparent;color:#a7a7c2;padding:12px;border-radius:11px;text-align:left;display:flex;align-items:center;gap:12px;font-size:13px}.nav button[hidden]{display:none!important}.nav button.active,.nav button:hover{background:#8b5cf622;color:#e6dcff}.ico{width:20px;text-align:center;font-size:16px}.sidebar-bottom{margin-top:auto}.creator{border:1px solid var(--line);background:var(--panel);border-radius:13px;padding:13px;font-size:12px}.creator span{display:block;color:var(--muted);font-size:11px;margin-top:4px}.main{margin-left:240px;width:calc(100% - 240px);padding:29px clamp(20px,4vw,55px) 55px;max-width:1500px}.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:34px}.eyebrow{color:var(--purple);font-size:10px;font-weight:700;letter-spacing:2px}.topbar h1{font:700 25px 'Space Grotesk';margin:5px 0 0} .top-actions{display:flex;align-items:center;gap:12px}.login-link{border:1px solid #7755b6;border-radius:10px;padding:9px 13px;color:#eee5ff;text-decoration:none;font-size:11px;background:#211b36}.login-link:hover{background:#332451}.pill{border:1px solid var(--line);border-radius:99px;padding:9px 13px;color:#c5c3dc;font-size:11px;background:#121222}.avatar{width:37px;height:37px;border-radius:50%;background:linear-gradient(135deg,#6d28d9,#db2777);display:grid;place-items:center;font-weight:700}.welcome{display:flex;justify-content:space-between;align-items:end;margin-bottom:23px}.welcome h2{font:700 clamp(24px,3vw,34px) 'Space Grotesk';margin:8px 0}.welcome p{color:var(--muted);margin:0;font-size:13px}.demo-tag{font-size:10px;color:#fcd34d;border:1px solid #a162074d;background:#854d0e24;border-radius:99px;padding:8px 12px}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-bottom:19px}.stat,.card{background:linear-gradient(145deg,#151529,#10101d);border:1px solid var(--line);border-radius:17px}.stat{padding:18px}.stat-top{display:flex;justify-content:space-between;color:var(--muted);font-size:11px}.stat strong{display:block;font:700 27px 'Space Grotesk';margin:13px 0 3px}.stat small{font-size:10px;color:var(--muted)}.positive{color:var(--green)!important}.layout{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(260px,.85fr);gap:16px}.card{padding:20px;margin-bottom:16px}.card-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.card h3{font:600 15px 'Space Grotesk';margin:0}.sub{color:var(--muted);font-size:11px}.checkin{display:flex;align-items:center;gap:15px;padding:15px;background:linear-gradient(100deg,#35205a66,#1b1936);border:1px solid #8b5cf644;border-radius:13px}.check-icon{width:43px;height:43px;border-radius:12px;background:#8b5cf633;display:grid;place-items:center;font-size:21px}.check-copy{flex:1}.check-copy strong{font-size:13px}.check-copy p{font-size:11px;color:var(--muted);margin:4px 0 0}.primary{border:0;border-radius:10px;padding:10px 14px;background:linear-gradient(100deg,#8b5cf6,#c026d3);color:white;font-size:11px;font-weight:700}.primary:disabled{opacity:.55;cursor:not-allowed}.video{display:flex;gap:14px;align-items:center}.thumb{width:112px;aspect-ratio:16/9;border-radius:10px;background:linear-gradient(135deg,#31205a,#172b50);display:grid;place-items:center;font-size:25px;flex-shrink:0}.video-info{flex:1}.video-info strong{font-size:12px}.video-info p{font-size:10px;color:var(--muted);margin:5px 0 11px}.actions{display:flex;gap:7px;flex-wrap:wrap}.secondary{border:1px solid #484064;background:#211b36;color:#e3d7ff;border-radius:9px;padding:8px 11px;font-size:10px}.mission-note{font-size:10px;color:var(--muted);margin-top:13px;line-height:1.6}.reward-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.reward{border:1px solid var(--line);background:#141426;border-radius:12px;padding:13px;display:flex;gap:10px;align-items:center;min-width:0}.r-icon{font-size:20px}.reward strong{font-size:11px;display:block}.reward small{font-size:10px;color:var(--muted)}.cost{margin-left:auto;color:#d8c5ff;font-size:10px;white-space:nowrap}.upload-status{display:flex;align-items:center;gap:10px}.dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 12px var(--green)}.history-row{display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid #292943;font-size:11px}.history-row:last-child{border:0}.section{display:none}.section.active{display:block}.shop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.shop-item{background:linear-gradient(145deg,#17172d,#10101c);border:1px solid var(--line);border-radius:15px;padding:17px}.shop-item .big{font-size:25px}.shop-item h4{font:600 13px 'Space Grotesk';margin:12px 0 5px}.shop-item p{color:var(--muted);font-size:10px;line-height:1.5;min-height:31px}.shop-foot{display:flex;align-items:center;justify-content:space-between;margin-top:13px}.shop-foot b{font-size:11px;color:#d8c5ff}.shop-foot button{padding:8px 11px}.empty{padding:32px;text-align:center;color:var(--muted);font-size:12px}.toast{position:fixed;bottom:22px;right:22px;background:#201b35;border:1px solid #7653b6;border-radius:12px;padding:13px 17px;font-size:12px;display:none;z-index:10}\n@media(max-width:950px){.stats{grid-template-columns:repeat(2,1fr)}.layout{grid-template-columns:1fr}.shop-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:650px){.sidebar{width:100%;height:62px;inset:auto 0 0;padding:5px 8px;border:0;border-top:1px solid var(--line);flex-direction:row;justify-content:space-around;background:#0c0c19f5}.brand,.nav-label,.sidebar-bottom{display:none}.nav{display:flex;width:100%;justify-content:space-around}.nav button{padding:7px 9px;display:grid;justify-items:center;gap:2px;font-size:9px}.main{margin:0;width:100%;padding:20px 15px 90px}.topbar{margin-bottom:26px}.topbar h1{font-size:21px}.pill{display:none}.welcome{align-items:start;gap:10px}.demo-tag{white-space:nowrap}.stats{gap:9px}.stat{padding:14px}.stat strong{font-size:23px}.card{padding:15px}.video{align-items:start}.thumb{width:90px}.reward-list{grid-template-columns:1fr}.shop-grid{grid-template-columns:1fr 1fr}.shop-item{padding:13px}.shop-item p{min-height:48px}.checkin{flex-wrap:wrap}.check-copy{min-width:calc(100% - 65px)}.checkin button{width:100%}}\n\n/* Mythix Hub interaction polish */\nbutton,.login-link,.primary,.secondary,.nav button{-webkit-tap-highlight-color:transparent;transition:transform .2s cubic-bezier(.2,.8,.2,1),background .22s ease,border-color .22s ease,color .22s ease,box-shadow .22s ease,filter .22s ease,opacity .2s ease}\nbutton:not(:disabled):hover,.login-link:hover{transform:translateY(-2px);filter:brightness(1.09)}\nbutton:not(:disabled):active,.login-link:active{transform:translateY(0) scale(.97);filter:brightness(.96)}\nbutton:focus-visible,.login-link:focus-visible{outline:2px solid #c4b5fd;outline-offset:3px}\nbutton:disabled{cursor:not-allowed;filter:saturate(.55);opacity:.58;transform:none;box-shadow:none}\n.primary{border:1px solid #b69aff;border-radius:12px;background:linear-gradient(135deg,#8b5cf6,#a855f7 52%,#d946ef);box-shadow:0 5px 16px #8b5cf633,inset 0 1px #ffffff30}\n.primary:not(:disabled):hover{box-shadow:0 8px 22px #a855f755,inset 0 1px #ffffff45}\n.secondary{border:1px solid #3b82f6;border-radius:11px;color:#dbeafe;background:linear-gradient(135deg,#172b4b,#183b55);box-shadow:0 3px 12px #0ea5e922,inset 0 1px #ffffff12}\n.secondary:not(:disabled):hover{border-color:#67e8f9;background:linear-gradient(135deg,#164e63,#155e75);color:#ecfeff;box-shadow:0 7px 18px #06b6d433}\n.login-link{border:1px solid #8b5cf6;border-radius:12px;background:linear-gradient(135deg,#29204a,#3b2460);box-shadow:0 4px 14px #8b5cf622}\n#logoutBtn{border-color:#fb7185;background:linear-gradient(135deg,#4c1d35,#7f1d3b);color:#ffe4e6}\n#checkinBtn{border-color:#34d399;background:linear-gradient(135deg,#047857,#059669 55%,#10b981);box-shadow:0 5px 16px #10b98133}\n#checkinBtn:not(:disabled):hover{box-shadow:0 8px 22px #10b98155}\n#verifyLike{border-color:#f472b6;background:linear-gradient(135deg,#831843,#be185d);color:#fff1f2;box-shadow:0 4px 14px #ec489933}\n#verifyLike:not(:disabled):hover{border-color:#f9a8d4;box-shadow:0 8px 20px #ec489955}\n#youtubeConnectButton,#youtubeConnect{border:1px solid #fb7185;background:linear-gradient(135deg,#991b1b,#dc2626 60%,#ef4444);color:#fff1f2;box-shadow:0 4px 15px #ef444433}\n#youtubeConnectButton:hover,#youtubeConnect:hover{box-shadow:0 8px 22px #ef444455}\n#refreshAdmin{border-color:#818cf8;background:linear-gradient(135deg,#312e81,#4338ca);color:#eef2ff}\n#tokenForm .primary{border-color:#fbbf24;background:linear-gradient(135deg,#92400e,#d97706);color:#fffbeb;box-shadow:0 5px 16px #f59e0b33}\n#tokenForm .primary:hover{box-shadow:0 8px 22px #f59e0b55}\n[data-goto]{border-color:#38bdf8;background:linear-gradient(135deg,#164e63,#075985);color:#e0f2fe}\n[data-reward]{border-color:#a78bfa;background:linear-gradient(135deg,#312e81,#6d28d9);color:#f5f3ff}\n[data-reward]:hover{border-color:#c4b5fd;box-shadow:0 7px 18px #8b5cf644}\n.shop-item:nth-child(3n+1) [data-reward]{background:linear-gradient(135deg,#064e3b,#059669);border-color:#34d399;color:#ecfdf5}\n.shop-item:nth-child(3n+2) [data-reward]{background:linear-gradient(135deg,#164e63,#0891b2);border-color:#22d3ee;color:#ecfeff}\n.shop-item:nth-child(3n) [data-reward]{background:linear-gradient(135deg,#581c87,#a21caf);border-color:#e879f9;color:#fdf4ff}\n#adminRedemptions [data-status=\"fulfilled\"]{border-color:#34d399;background:linear-gradient(135deg,#064e3b,#047857);color:#ecfdf5}\n#adminRedemptions [data-status=\"rejected\"]{border-color:#fb7185;background:linear-gradient(135deg,#7f1d1d,#be123c);color:#fff1f2}\n.nav button{border:1px solid transparent}\n.nav button:hover{transform:translateX(3px);background:linear-gradient(90deg,#7c3aed33,#a855f711);border-color:#8b5cf644;color:#f3e8ff}\n.nav button.active{background:linear-gradient(90deg,#7c3aed44,#a855f71c);border-color:#a78bfa55;color:#f3e8ff;box-shadow:inset 3px 0 #a78bfa}\n@media(prefers-reduced-motion:reduce){button,.login-link,.nav button{transition:none!important}button:hover,.login-link:hover,.nav button:hover{transform:none!important}}\n\n</style></head><body><div class=\"shell\">\n<aside class=\"sidebar\"><div class=\"brand\"><div class=\"logo\">✦</div><div><strong>MYTHIX HUB</strong><small>COMMUNITY REWARDS</small></div></div><div class=\"nav-label\">WORKSPACE</div><nav class=\"nav\"><button class=\"active\" data-page=\"dashboard\"><span class=\"ico\">⌂</span>Dashboard</button><button data-page=\"rewards\"><span class=\"ico\">✧</span>Reward Shop</button><button data-page=\"history\"><span class=\"ico\">◷</span>My Activity</button><button data-page=\"profile\"><span class=\"ico\">◉</span>Profile</button><button data-page=\"admin\" id=\"adminNav\" hidden><span class=\"ico\">⚙</span>Admin Panel</button></nav><div class=\"sidebar-bottom\"><div class=\"creator\">✦ &nbsp; Mythix Community<span>Earn tokens. Unlock more.</span></div></div></aside>\n<main class=\"main\"><header class=\"topbar\"><div><div class=\"eyebrow\">MYTHIX HUB / COMMUNITY</div><h1 id=\"pageTitle\">Dashboard</h1></div><div class=\"top-actions\"><a class=\"login-link\" id=\"loginLink\" href=\"/api/auth/google\">Continue with Google ↗</a><button class=\"login-link\" id=\"logoutBtn\" hidden>Sign out</button><div class=\"pill\">✦ &nbsp; Season 01</div><div class=\"avatar\">M</div></div></header>\n<section class=\"section active\" id=\"dashboard\"><div class=\"welcome\"><div><div class=\"eyebrow\">WELCOME BACK, PLAYER</div><h2>Your hub. Your rewards.</h2><p>Support the videos, earn tokens, and unlock community perks.</p></div><div class=\"demo-tag\" id=\"accountStatus\">● SIGN IN TO LOAD YOUR ACCOUNT</div></div>\n<div class=\"stats\"><div class=\"stat\"><div class=\"stat-top\">TOKEN BALANCE <span>✧</span></div><strong id=\"balance\">—</strong><small class=\"positive\">Ready to spend</small></div><div class=\"stat\"><div class=\"stat-top\">DAILY STREAK <span>♨</span></div><strong>7 days</strong><small>Keep your streak going</small></div><div class=\"stat\"><div class=\"stat-top\">REWARDS UNLOCKED <span>♢</span></div><strong>3</strong><small>Exclusive perks</small></div><div class=\"stat\"><div class=\"stat-top\">UPLOAD STATUS <span>◉</span></div><strong style=\"font-size:19px;margin-top:17px\">All caught up</strong><small class=\"positive\">● Notifications on</small></div></div>\n<div class=\"layout\"><div><div class=\"card\"><div class=\"card-head\"><h3>Daily loyalty check-in</h3><span class=\"sub\">RESETS EVERY 24H</span></div><div class=\"checkin\"><div class=\"check-icon\">🎁</div><div class=\"check-copy\"><strong>Claim your daily +5 tokens</strong><p>A little support goes a long way. Come back tomorrow!</p></div><button class=\"primary\" id=\"checkinBtn\">Claim +5 ✦</button></div></div>\n<div class=\"card\"><div class=\"card-head\"><h3>Latest video missions</h3><span class=\"sub\">YOUTUBE REWARDS</span></div><div id=\"youtubeVideo\" class=\"video\"><div class=\"thumb\">▶</div><div class=\"video-info\"><strong>Loading Mythix upload…</strong><p>Checking the latest video from @mythixgmd.</p></div></div><div class=\"actions\" style=\"margin-top:12px\"><button class=\"secondary\" id=\"verifyLike\">♡ &nbsp; Verify like · +10</button><a class=\"primary\" id=\"youtubeConnectButton\" href=\"/api/auth/youtube\" style=\"display:inline-block;text-decoration:none\">Connect to YouTube ↗</a></div><div class=\"mission-note\" style=\"color:#fbbf24\">If you unlike the video, your reward tokens will be taken back.</div><div class=\"mission-note\" id=\"youtubeStatus\">Sign in with Google to connect your YouTube channel and verify your activity.</div><div id=\"youtubeConnectWrap\" hidden style=\"margin-top:12px\"><a class=\"primary\" id=\"youtubeConnect\" href=\"/api/auth/youtube\" style=\"display:inline-block;text-decoration:none\">Connect YouTube permissions</a><p class=\"mission-note\">You'll return here after approving YouTube read-only access. Your existing Mythix Hub account stays the same.</p></div></div>\n<div class=\"card\"><div class=\"card-head\"><h3>Popular rewards</h3><button class=\"secondary\" data-goto=\"rewards\">View all rewards →</button></div><div class=\"reward-list\"><div class=\"reward\"><span class=\"r-icon\">📡</span><div><strong>Content Tracker</strong><small>Stay up to date</small></div><span class=\"cost\">15 ✦</span></div><div class=\"reward\"><span class=\"r-icon\">🎡</span><div><strong>Wheel of Fortune</strong><small>Try your luck</small></div><span class=\"cost\">45 ✦</span></div><div class=\"reward\"><span class=\"r-icon\">🏅</span><div><strong>Supporter Badge</strong><small>Show your support</small></div><span class=\"cost\">55 ✦</span></div><div class=\"reward\"><span class=\"r-icon\">✨</span><div><strong>VIP Insider</strong><small>Creator updates</small></div><span class=\"cost\">100 ✦</span></div></div></div></div>\n<div><div class=\"card\"><div class=\"card-head\"><h3>Creator status</h3><span class=\"sub\">LIVE STATUS</span></div><div class=\"upload-status\"><span class=\"dot\"></span><div><strong style=\"font-size:12px\">Hub operational</strong><div class=\"sub\">Waiting for next upload</div></div></div></div><div class=\"card\"><div class=\"card-head\"><h3>Recent activity</h3><span class=\"sub\">PREVIEW DATA</span></div><div class=\"history-row\"><span>Daily check-in</span><span class=\"positive\">+5 ✦</span></div><div class=\"history-row\"><span>Video like</span><span class=\"positive\">+10 ✦</span></div><div class=\"history-row\"><span>Level showcase</span><span>−30 ✦</span></div></div><div class=\"card\"><div class=\"card-head\"><h3>How to earn</h3></div><div class=\"history-row\"><span>Daily check-in</span><span class=\"positive\">+5 ✦</span></div><div class=\"history-row\"><span>Verified video like</span><span class=\"positive\">+10 ✦</span></div><p class=\"mission-note\">More community missions coming soon.</p></div></div></div></section>\n<section class=\"section\" id=\"rewards\"><div class=\"welcome\"><div><div class=\"eyebrow\">SPEND YOUR TOKENS</div><h2>Reward shop</h2><p>Unlock perks and make your mark in the Mythix community.</p></div></div><div class=\"shop-grid\" id=\"shopGrid\"></div></section>\n<section class=\"section\" id=\"history\"><div class=\"welcome\"><div><div class=\"eyebrow\">YOUR JOURNEY</div><h2>My activity</h2><p>Your token and reward history will live here.</p></div></div><div class=\"card\" id=\"activityList\"></div></section>\n<section class=\"section\" id=\"profile\"><div class=\"welcome\"><div><div class=\"eyebrow\">PLAYER IDENTITY</div><h2>Your profile</h2><p>Your Google and YouTube identity will appear here after sign-in is configured.</p></div></div><div class=\"card\"><div class=\"checkin\"><div class=\"avatar\">?</div><div class=\"check-copy\"><strong>Guest preview account</strong><p>Google sign-in is not connected yet.</p></div><a class=\"secondary\" href=\"/api/auth/google\" style=\"display:inline-block;text-decoration:none\">Continue with Google</a></div><p class=\"mission-note\">This is a design preview. No account is being created and no data is being saved to a server yet.</p></div></section>\n<section class=\"section\" id=\"admin\"><div class=\"welcome\"><div><div class=\"eyebrow\">CREATOR CONTROL CENTER</div><h2>Admin panel</h2><p>Manage Mythix Hub members, tokens, and reward requests.</p></div><div class=\"demo-tag\">🔒 OWNER ACCESS</div></div>\n<div class=\"stats\"><div class=\"stat\"><div class=\"stat-top\">TOTAL MEMBERS</div><strong id=\"adminUsers\">—</strong><small>Registered accounts</small></div><div class=\"stat\"><div class=\"stat-top\">TOKENS IN CIRCULATION</div><strong id=\"adminTokens\">—</strong><small>Across all accounts</small></div><div class=\"stat\"><div class=\"stat-top\">PENDING REWARDS</div><strong id=\"adminPending\">—</strong><small>Awaiting fulfillment</small></div><div class=\"stat\"><div class=\"stat-top\">REWARD CLAIMS</div><strong id=\"adminClaims\">—</strong><small>Total redemption requests</small></div></div>\n<div class=\"layout\"><div class=\"card\"><div class=\"card-head\"><h3>Member accounts</h3><button class=\"secondary\" id=\"refreshAdmin\">Refresh</button></div><div style=\"overflow:auto\"><table style=\"width:100%;border-collapse:collapse;font-size:11px;text-align:left\"><thead><tr style=\"color:var(--muted)\"><th style=\"padding:10px\">Member</th><th style=\"padding:10px\">Email</th><th style=\"padding:10px\">Tokens</th><th style=\"padding:10px\">Joined</th></tr></thead><tbody id=\"adminMemberRows\"><tr><td colspan=\"4\" class=\"empty\">Loading members…</td></tr></tbody></table></div></div>\n<div class=\"card\"><div class=\"card-head\"><h3>Adjust member tokens</h3></div><form id=\"tokenForm\" style=\"display:grid;gap:10px\"><label class=\"sub\">Member email</label><input id=\"tokenEmail\" type=\"email\" required placeholder=\"member@gmail.com\" style=\"background:#0d0d1b;border:1px solid var(--line);border-radius:9px;padding:11px;color:var(--text)\"><label class=\"sub\">Amount (use a negative number to remove)</label><input id=\"tokenAmount\" type=\"number\" step=\"1\" required placeholder=\"25\" style=\"background:#0d0d1b;border:1px solid var(--line);border-radius:9px;padding:11px;color:var(--text)\"><label class=\"sub\">Reason</label><input id=\"tokenReason\" required maxlength=\"120\" placeholder=\"Community reward / correction\" style=\"background:#0d0d1b;border:1px solid var(--line);border-radius:9px;padding:11px;color:var(--text)\"><button class=\"primary\" type=\"submit\">Apply token adjustment</button></form></div></div>\n<div class=\"card\"><div class=\"card-head\"><h3>Reward requests</h3><span class=\"sub\">FULFILL OR REJECT</span></div><div id=\"adminRedemptions\"><div class=\"empty\">Loading reward requests…</div></div></div></section>\n</main></div><div class=\"toast\" id=\"toast\"></div>\n<script>\nconst rewards=[[\"📡\",\"Content Tracker\",15,\"Unlock upload alerts and a recent upload log.\"],[\"🎯\",\"In-Game Challenge Pick\",25,\"Suggest a difficulty or custom GD challenge.\"],[\"🌟\",\"Level Showcase\",30,\"Submit a Geometry Dash level for a showcase.\"],[\"⚡\",\"Priority Level Review\",35,\"Skip the standard queue for a dedicated review.\"],[\"🎡\",\"Wheel of Fortune\",45,\"Spin for random mini-perks or bonus tokens.\"],[\"📣\",\"3-Week Video Shoutout\",50,\"Join the shoutout queue for three uploads.\"],[\"🏅\",\"Exclusive VIP Badge\",55,\"Display your special Supporter badge.\"],[\"🎬\",\"Video Topic / Theme\",65,\"Suggest a topic for an upcoming video.\"],[\"🎲\",\"Mod Upgrade Roll\",70,\"Try your luck in a 50/50 moderator roll.\"],[\"🤝\",\"Direct GD Collab Session\",75,\"Request a one-on-one GD session or collab.\"],[\"🏆\",\"Wall of Fame Listing\",85,\"Permanently join the Mythix Hub Wall of Fame.\"],[\"🎤\",\"Video Intro Shoutout\",95,\"Request a personal shoutout in a main video.\"],[\"🔮\",\"VIP Insider Perk\",100,\"Unlock private creator announcements.\"],[\"🎨\",\"Custom Profile Picture / Graphic\",500,\"Request custom Geometry Dash artwork.\"]];\nlet balance=0,claimed=false,activities=[[\"Daily check-in\",\"+5 ✦\"],[\"Video like\",\"+10 ✦\"],[\"Level showcase\",\"−30 ✦\"]];\nconst rewardKeys=['content-tracker','in-game-challenge-pick','level-showcase','priority-level-review','wheel-of-fortune','three-week-video-shoutout','exclusive-vip-badge','video-topic-theme','mod-upgrade-roll','direct-gd-collab-session','wall-of-fame-listing','video-intro-shoutout','vip-insider-perk','custom-profile-picture-graphic'];\ndocument.getElementById('shopGrid').innerHTML=rewards.map((r,i)=>'<article class=\"shop-item\"><div class=\"big\">'+r[0]+'</div><h4>'+r[1]+'</h4><p>'+r[3]+'</p><div class=\"shop-foot\"><b>'+r[2]+' ✦</b><button class=\"secondary\" data-reward=\"'+i+'\" data-reward-key=\"'+rewardKeys[i]+'\">Request reward</button></div></article>').join('');\nfunction toast(t){const el=document.getElementById('toast');el.textContent=t;el.style.display='block';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.style.display='none',2600)}\nfunction navigate(page){if(page==='admin'&&document.getElementById('adminNav').hidden){toast('Owner access only.');return}document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===page));document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.page===page));document.getElementById('pageTitle').textContent=({dashboard:'Dashboard',rewards:'Reward Shop',history:'My Activity',profile:'Profile',admin:'Admin Panel'})[page]||'Dashboard'}\ndocument.querySelectorAll('.nav button').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.page)));document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.goto)));\ndocument.getElementById('checkinBtn').addEventListener('click',async()=>{const b=document.getElementById('checkinBtn');b.disabled=true;try{const response=await fetch('/api/checkin',{method:'POST'});const data=await response.json();if(!response.ok)throw new Error(data.error||'Check-in failed.');balance=data.token_balance;document.getElementById('balance').textContent=balance;b.textContent='Claimed ✓';activities.unshift(['Daily check-in','+5 ✦']);toast('Daily check-in claimed: +5 tokens!');await loadActivity()}catch(err){toast(err.message);b.disabled=false}});\nasync function loadYoutubeStatus(){const box=document.getElementById('youtubeVideo'),note=document.getElementById('youtubeStatus'),connect=document.getElementById('youtubeConnectWrap');connect.hidden=true;try{const r=await fetch('/api/youtube/status',{credentials:'same-origin'});const d=await r.json();if(!r.ok){note.textContent=d.error||'Could not load YouTube missions.';box.innerHTML='<div class=\"video-info\"><strong>'+(d.reconnect?'YouTube permission needed':'YouTube connection unavailable')+'</strong><p>'+(d.reconnect?'Your Google sign-in works, but YouTube read-only access has not been granted yet.':esc(d.error||'The server did not provide an error description.'))+'</p></div>';if(d.reconnect)connect.hidden=false;return;}if(!d.video){box.innerHTML='<div class=\"video-info\"><strong>No public uploads yet</strong><p>When @mythixgmd publishes a video, missions will appear here.</p></div>';note.textContent='Connected YouTube channel: '+d.channel.name;return;}box.innerHTML='<a href=\"'+esc(d.video.url)+'\" target=\"_blank\" rel=\"noopener\" style=\"display:block;min-width:120px\"><img src=\"'+esc(d.video.thumbnail)+'\" alt=\"\" style=\"width:150px;max-width:34vw;border-radius:9px;display:block\"></a><div class=\"video-info\"><strong>'+esc(d.video.title)+'</strong><p>Latest upload from @mythixgmd · <a href=\"'+esc(d.video.url)+'\" target=\"_blank\" rel=\"noopener\">Watch video ↗</a></p></div>';note.textContent='Connected as '+d.channel.name+'. Your like reward is ready to claim.';document.getElementById('verifyLike').textContent=d.claimed.includes('like')?(d.monitoring?'♡ Like reward claimed':'♡ Like reward confirmed ✓'):'♡ Verify like · +10';document.getElementById('verifyLike').disabled=d.claimed.includes('like');}catch(e){note.textContent=e.message;box.innerHTML='<div class=\"video-info\"><strong>YouTube connection needed</strong><p>Try reconnecting your YouTube permissions.</p></div>';connect.hidden=false;}}\nasync function verifyYoutube(){const b=document.getElementById('verifyLike');b.disabled=true;const old=b.textContent;b.textContent='Checking YouTube…';try{const r=await fetch('/api/youtube/verify/like',{method:'POST',credentials:'same-origin'});const d=await r.json();if(!r.ok)throw new Error(d.error||'Verification failed.');balance=d.token_balance;document.getElementById('balance').textContent=balance;b.textContent='♡ Like reward claimed';toast('Like verified! +10 tokens added.');await loadActivity();}catch(e){toast(e.message);b.textContent=old;b.disabled=false;}}\ndocument.getElementById('verifyLike').addEventListener('click',()=>verifyYoutube());\ndocument.addEventListener('click',async e=>{const b=e.target.closest('[data-reward]');if(!b)return;const item=rewards[Number(b.dataset.reward)];if(!item)return;if(document.getElementById('logoutBtn').hidden)return toast('Sign in to request rewards.');if(balance<item[2])return toast('Not enough tokens.');const details=window.prompt('Add any details for '+item[1]+' (required for custom requests):','');if(details===null)return;b.disabled=true;try{const response=await fetch('/api/rewards/redeem',{method:'POST',headers:{'content-type':'application/json'},credentials:'same-origin',body:JSON.stringify({reward_key:b.dataset.rewardKey,details})});const data=await response.json();if(!response.ok)throw new Error(data.error||'Could not request reward.');balance=data.token_balance;document.getElementById('balance').textContent=balance;toast(item[1]+' requested! '+item[2]+' tokens spent.');await loadActivity();}catch(err){toast(err.message);}finally{b.disabled=false;}});\nasync function loadActivity(){const box=document.getElementById('activityList');try{const r=await fetch('/api/activity',{credentials:'same-origin'});const d=await r.json();if(!r.ok)throw new Error(d.error||'Could not load activity');const rows=[];(d.transactions||[]).forEach(x=>rows.push({date:x.created_at,label:String(x.reason).replaceAll('_',' '),amount:x.amount}));(d.redemptions||[]).forEach(x=>{let info={};try{info=JSON.parse(x.form_data||'{}')}catch(_){}rows.push({date:x.created_at,label:'Reward: '+(info.label||x.reward_key)+' · '+x.status,amount:null,status:x.status,details:info.details||''})});rows.sort((a,b)=>String(b.date).localeCompare(String(a.date)));box.innerHTML=rows.length?rows.slice(0,60).map(x=>'<div class=\"history-row\" style=\"gap:12px\"><span>'+esc(x.label)+(x.details?'<div class=\"sub\">'+esc(x.details)+'</div>':'')+'<div class=\"sub\">'+esc(x.date||'')+'</div></span><b class=\"'+(x.amount>0?'positive':'')+'\">'+(x.amount>0?'+':'')+(x.amount===null?esc(x.status||''):(x.amount>0?'+':'')+x.amount+' ✦')+'</b></div>').join(''):'<div class=\"empty\">No activity yet. Claim a check-in or request your first reward!</div>';}catch(e){box.innerHTML='<div class=\"empty\">'+esc(e.message)+'</div>';}}\nasync function loadAdmin(){try{const r=await fetch('/api/admin/dashboard',{credentials:'same-origin'});const d=await r.json();if(!r.ok)throw new Error(d.error||'Admin access required.');document.getElementById('adminUsers').textContent=d.stats.users;document.getElementById('adminTokens').textContent=d.stats.tokens.toLocaleString();document.getElementById('adminPending').textContent=d.stats.pending;document.getElementById('adminClaims').textContent=d.stats.redemptions;document.getElementById('adminMemberRows').innerHTML=d.users.length?d.users.map(u=>'<tr style=\"border-top:1px solid var(--line)\"><td style=\"padding:10px\">'+esc(u.display_name)+'</td><td style=\"padding:10px\">'+esc(u.email)+'</td><td style=\"padding:10px\">'+u.token_balance+' ✦</td><td style=\"padding:10px\">'+esc((u.created_at||'').slice(0,10))+'</td></tr>').join(''):'<tr><td colspan=\"4\" class=\"empty\">No members yet.</td></tr>';document.getElementById('adminRedemptions').innerHTML=d.redemptions.length?d.redemptions.map(x=>'<div class=\"history-row\" style=\"gap:12px;align-items:center;flex-wrap:wrap\"><span><b>'+esc(x.reward_key)+'</b><br><span class=\"sub\">'+esc(x.email)+' · '+x.cost+' ✦ · '+esc(x.created_at)+'<br><span class=\"sub\">'+esc(x.form_data||'')+'</span>'+'</span></span><span style=\"margin-left:auto\">'+esc(x.status)+'</span>'+(x.status==='pending'?'<button class=\"secondary\" data-redemption=\"'+x.id+'\" data-status=\"fulfilled\">Fulfill</button><button class=\"secondary\" data-redemption=\"'+x.id+'\" data-status=\"rejected\">Reject</button>':'')+'</div>').join(''):'<div class=\"empty\">No reward requests yet.</div>';}catch(e){toast(e.message)}}function esc(s){return String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]))}document.getElementById('refreshAdmin').addEventListener('click',loadAdmin);document.getElementById('tokenForm').addEventListener('submit',async e=>{e.preventDefault();const b=e.target.querySelector('button');b.disabled=true;try{const r=await fetch('/api/admin/tokens',{method:'POST',headers:{'content-type':'application/json'},credentials:'same-origin',body:JSON.stringify({email:document.getElementById('tokenEmail').value,amount:Number(document.getElementById('tokenAmount').value),reason:document.getElementById('tokenReason').value})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Could not adjust tokens');toast('Token balance updated.');e.target.reset();await loadAdmin()}catch(err){toast(err.message)}finally{b.disabled=false}});document.getElementById('adminRedemptions').addEventListener('click',async e=>{const b=e.target.closest('[data-redemption]');if(!b)return;b.disabled=true;try{const r=await fetch('/api/admin/redemptions',{method:'POST',headers:{'content-type':'application/json'},credentials:'same-origin',body:JSON.stringify({id:b.dataset.redemption,status:b.dataset.status})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Could not update request');toast('Reward request '+b.dataset.status+'.');await loadAdmin()}catch(err){toast(err.message)}finally{b.disabled=false}});async function loadAccount(){try{const response=await fetch('/api/me',{credentials:'same-origin'});if(!response.ok)throw new Error('Signed out');const data=await response.json();if(!data.authenticated)throw new Error('Signed out');const u=data.user;balance=Number(u.token_balance||0);document.getElementById('balance').textContent=balance;document.getElementById('loginLink').hidden=true;document.getElementById('logoutBtn').hidden=false;document.getElementById('accountStatus').textContent=data.user.is_admin?'● OWNER ACCOUNT':'● ACCOUNT CONNECTED';const isOwner=data.user.is_admin===true||String(u.email||'').trim().toLowerCase()==='vandrexxgaming65@gmail.com';if(isOwner){document.getElementById('adminNav').hidden=false;loadAdmin();}const profile=document.querySelector('#profile .check-copy strong');const detail=document.querySelector('#profile .check-copy p');if(profile)profile.textContent=u.display_name;if(detail)detail.textContent=u.email;const avatar=document.querySelector('#profile .avatar');if(avatar)avatar.textContent=(u.display_name||'M').slice(0,1).toUpperCase();const guest=document.querySelector('#profile .mission-note');if(guest)guest.textContent='Your Google account is connected. Your account balance is loaded from Mythix Hub.';document.querySelector('.welcome p').textContent='Welcome, '+u.display_name+'. Your account is connected.';}catch(_){document.getElementById('balance').textContent='0';document.getElementById('accountStatus').textContent='● GUEST PREVIEW';}}document.getElementById('logoutBtn').addEventListener('click',async()=>{try{await fetch('/api/auth/logout',{method:'POST',credentials:'same-origin'});}finally{location.href='/';}});loadAccount().then(()=>{loadActivity();if(!document.getElementById('logoutBtn').hidden)loadYoutubeStatus();});const authError=new URLSearchParams(location.search).get('auth_error');if(authError)toast(authError==='access_denied'?'Google sign-in was cancelled.':'Google sign-in could not be completed. Please try again.');\n</script></body></html>";
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
const CREATOR_CHANNEL_ID = "UCe1nKAng16nL6FJnyxkmExA";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";
async function decryptSecret(value, keyText) {
  if (!value || !keyText) return null;
  const raw = Uint8Array.from(atob(keyText), c => c.charCodeAt(0));
  if (raw.length !== 32) throw new Error("TOKEN_ENCRYPTION_KEY must be base64-encoded 32 bytes");
  const parts = value.split(".");
  if (parts.length !== 2) throw new Error("Stored Google token has an invalid format.");
  const key = await crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64url(parts[0]) }, key, fromB64url(parts[1]));
  return new TextDecoder().decode(plain);
}
async function youtubeRequest(accessToken, endpoint, params) {
  const query = new URLSearchParams(params || {});
  const response = await fetch(YOUTUBE_API + "/" + endpoint + "?" + query.toString(), {
    headers: { authorization: "Bearer " + accessToken }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = data && data.error && data.error.errors && data.error.errors[0] && data.error.errors[0].reason;
    const message = data && data.error && data.error.message;
    const error = new Error(message || "YouTube API request failed.");
    error.status = response.status;
    error.reason = reason || "";
    throw error;
  }
  return data;
}
async function youtubeAccess(user, env) {
  let access = await decryptSecret(user.google_access_token_enc, env.TOKEN_ENCRYPTION_KEY);
  const expires = user.google_token_expires_at ? Date.parse(user.google_token_expires_at.replace(" ", "T") + (user.google_token_expires_at.endsWith("Z") ? "" : "Z")) : 0;
  if (!access || !expires || expires < Date.now() + 90000) {
    const refresh = await decryptSecret(user.google_refresh_token_enc, env.TOKEN_ENCRYPTION_KEY);
    if (!refresh) throw new Error("Your Google connection has no refresh token. Sign out, then reconnect Google and approve YouTube access.");
    const response = await fetch(GOOGLE_TOKEN, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, refresh_token: refresh, grant_type: "refresh_token" })
    });
    const tokens = await response.json().catch(() => ({}));
    if (!response.ok || !tokens.access_token) {
      if (tokens.error === "invalid_grant") throw new Error("Your Google connection expired. Sign out, then reconnect Google to restore YouTube verification.");
      throw new Error("Could not refresh your Google connection. Please reconnect Google.");
    }
    access = tokens.access_token;
    const encrypted = await encryptSecret(access, env.TOKEN_ENCRYPTION_KEY);
    await env.DB.prepare("UPDATE users SET google_access_token_enc=?, google_token_expires_at=datetime('now','+' || ? || ' seconds'), updated_at=CURRENT_TIMESTAMP WHERE id=?")
      .bind(encrypted, Math.max(60, Number(tokens.expires_in || 3600) - 60), user.id).run();
  }
  return access;
}
async function memberYoutubeIdentity(user, env, access) {
  // An empty mine=true response must not break the entire YouTube integration.
  const data = await youtubeRequest(access, "channels", { part: "id,snippet", mine: "true", maxResults: "50" });
  const channel = (data.items || [])[0];
  if (channel) {
    const name = channel.snippet && channel.snippet.title || "YouTube channel";
    await env.DB.prepare("UPDATE users SET youtube_channel_id=?, youtube_channel_name=?, updated_at=CURRENT_TIMESTAMP WHERE id=?")
      .bind(channel.id, name, user.id).run();
    return { id: channel.id, name, linked: true };
  }
  if (user.youtube_channel_id) return { id: user.youtube_channel_id, name: user.youtube_channel_name || "YouTube channel", linked: true };
  return { id: null, name: "YouTube account connected", linked: false };
}
async function latestCreatorVideo(access) {
  const creator = await youtubeRequest(access, "channels", { part: "contentDetails,snippet", id: CREATOR_CHANNEL_ID, maxResults: "1" });
  const channel = (creator.items || [])[0];
  if (!channel) throw new Error("The Mythix creator channel could not be found by YouTube. Check that YouTube Data API v3 is enabled in the Google Cloud project.");
  const uploads = channel.contentDetails && channel.contentDetails.relatedPlaylists && channel.contentDetails.relatedPlaylists.uploads;
  if (!uploads) return null;
  const playlist = await youtubeRequest(access, "playlistItems", { part: "snippet,contentDetails", playlistId: uploads, maxResults: "1" });
  const item = (playlist.items || [])[0];
  if (!item) return null;
  const videoId = item.contentDetails && item.contentDetails.videoId || item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId;
  if (!videoId) return null;
  const detail = await youtubeRequest(access, "videos", { part: "snippet,contentDetails", id: videoId });
  const video = (detail.items || [])[0];
  if (!video) return null;
  return {
    id: video.id,
    title: video.snippet && video.snippet.title || item.snippet.title || "Latest Mythix upload",
    description: video.snippet && video.snippet.description || "",
    publishedAt: video.snippet && video.snippet.publishedAt || item.snippet.publishedAt || null,
    thumbnail: video.snippet && video.snippet.thumbnails && ((video.snippet.thumbnails.maxres || video.snippet.thumbnails.high || video.snippet.thumbnails.medium || {}).url) || "",
    url: "https://www.youtube.com/watch?v=" + encodeURIComponent(video.id)
  };
}
function youtubeErrorResponse(error) {
  const message = String(error && error.message || "YouTube verification failed.");
  const status = error && error.status;
  const reason = String(error && error.reason || "");
  if (status === 401 || /reconnect Google|no refresh token/i.test(message)) return json({ error: message, reconnect: true }, 401);
  if (status === 403) {
    const combined = reason + " " + message;
    const hint = /accessNotConfigured|SERVICE_DISABLED/i.test(combined)
      ? "Enable YouTube Data API v3 in the Google Cloud project used by this OAuth client, wait a few minutes, then retry."
      : /insufficientPermissions|insufficient_scope/i.test(combined)
        ? "Sign out of Mythix Hub and sign in again, approving the YouTube read-only permission."
        : /youtubeSignupRequired|youtubeSignup/i.test(combined)
          ? "This Google account needs a YouTube channel before it can use YouTube missions."
          : "Check this Google account's YouTube access and the YouTube Data API v3 settings.";
    const missingScope = /insufficientPermissions|insufficient_scope/i.test(combined);
    return json({ error: "YouTube API returned 403 (" + (reason || "forbidden") + "): " + message + " " + hint, reason: reason || "forbidden", details: message, reconnect: missingScope, code: missingScope ? "youtube_scope_missing" : "youtube_api_forbidden" }, missingScope ? 403 : 502);
  }
  return json({ error: message, reason: reason || undefined }, 502);
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
  if (request.method === "GET" && (path === "/api/auth/google" || path === "/api/auth/youtube")) {
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
      prompt: path === "/api/auth/youtube" ? "consent select_account" : "select_account",
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
    return user ? json({ authenticated: true, user: { ...user, is_admin: (user.email || "").toLowerCase() === ADMIN_EMAIL } }) : json({ authenticated: false, user: null }, 401);
  }
  if (path.startsWith("/api/admin")) {
    const actor = await currentUser(request, env);
    if (!actor) return json({ error: "Sign in first." }, 401);
    if ((actor.email || "").toLowerCase() !== ADMIN_EMAIL) return json({ error: "Admin access required." }, 403);
    if (request.method === "GET" && path === "/api/admin/dashboard") {
      const [stats, users, redemptions] = await Promise.all([
        env.DB.prepare("SELECT (SELECT COUNT(*) FROM users) AS users, (SELECT COALESCE(SUM(token_balance),0) FROM users) AS tokens, (SELECT COUNT(*) FROM redemptions WHERE status='pending') AS pending, (SELECT COUNT(*) FROM redemptions) AS redemptions").first(),
        env.DB.prepare("SELECT display_name, email, token_balance, created_at FROM users ORDER BY created_at DESC LIMIT 100").all(),
        env.DB.prepare("SELECT r.id, r.reward_key, r.cost, r.status, r.form_data, r.created_at, u.email FROM redemptions r JOIN users u ON u.id=r.user_id ORDER BY r.created_at DESC LIMIT 100").all()
      ]);
      return json({ ok: true, stats, users: users.results || [], redemptions: redemptions.results || [] });
    }
    if (request.method === "POST" && path === "/api/admin/tokens") {
      const body = await request.json();
      const email = String(body.email || "").trim().toLowerCase();
      const amount = Number(body.amount);
      const reason = String(body.reason || "").trim().slice(0, 120);
      if (!email || !Number.isSafeInteger(amount) || amount === 0 || Math.abs(amount) > 100000 || !reason) return json({ error: "Enter a valid email, non-zero whole token amount (max 100,000), and reason." }, 400);
      const target = await env.DB.prepare("SELECT id, token_balance FROM users WHERE email = ?").bind(email).first();
      if (!target) return json({ error: "No Mythix Hub account found for that email." }, 404);
      if (target.token_balance + amount < 0) return json({ error: "This adjustment would make the balance negative." }, 400);
      const txId = "txn_" + randomToken(12);
      await env.DB.batch([
        env.DB.prepare("UPDATE users SET token_balance = token_balance + ?, updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(amount, target.id),
        env.DB.prepare("INSERT INTO token_transactions (id,user_id,amount,reason,reference_id) VALUES (?,?,?,?,?)").bind(txId, target.id, amount, "admin_adjustment: " + reason, txId),
        env.DB.prepare("INSERT INTO audit_log (id,actor_email,action,target_user_id,details) VALUES (?,?,?,?,?)").bind("audit_" + randomToken(12), actor.email, "token_adjustment", target.id, JSON.stringify({ amount, reason }))
      ]);
      const updated = await env.DB.prepare("SELECT token_balance FROM users WHERE id=?").bind(target.id).first();
      return json({ ok: true, token_balance: updated.token_balance });
    }
    if (request.method === "POST" && path === "/api/admin/redemptions") {
      const body = await request.json();
      const id = String(body.id || "");
      const status = String(body.status || "");
      if (!id || !["fulfilled", "rejected"].includes(status)) return json({ error: "Invalid redemption update." }, 400);
      const redemption = await env.DB.prepare("SELECT id,user_id,cost,status FROM redemptions WHERE id=?").bind(id).first();
      if (!redemption) return json({ error: "Reward request not found." }, 404);
      if (redemption.status !== "pending") return json({ error: "This reward request has already been processed." }, 409);
      if (status === "rejected") {
        await env.DB.batch([
          env.DB.prepare("UPDATE redemptions SET status='rejected',updated_at=CURRENT_TIMESTAMP WHERE id=? AND status='pending'").bind(id),
          env.DB.prepare("UPDATE users SET token_balance=token_balance+?,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(redemption.cost, redemption.user_id),
          env.DB.prepare("INSERT INTO token_transactions (id,user_id,amount,reason,reference_id) VALUES (?,?,?,?,?)").bind("txn_" + randomToken(12), redemption.user_id, redemption.cost, "redemption_refund", id)
        ]);
      } else {
        await env.DB.batch([
          env.DB.prepare("UPDATE redemptions SET status='fulfilled',updated_at=CURRENT_TIMESTAMP WHERE id=? AND status='pending'").bind(id),
          env.DB.prepare("UPDATE users SET supporter_badge=1,updated_at=CURRENT_TIMESTAMP WHERE id=? AND ?='exclusive-vip-badge'").bind(redemption.user_id, redemption.reward_key),
          env.DB.prepare("UPDATE users SET content_tracker_unlocked=1,updated_at=CURRENT_TIMESTAMP WHERE id=? AND ?='content-tracker'").bind(redemption.user_id, redemption.reward_key),
          env.DB.prepare("UPDATE users SET insider_unlocked=1,updated_at=CURRENT_TIMESTAMP WHERE id=? AND ?='vip-insider-perk'").bind(redemption.user_id, redemption.reward_key)
        ]);
      }
      await env.DB.prepare("INSERT INTO audit_log (id,actor_email,action,target_user_id,details) VALUES (?,?,?,?,?)").bind("audit_" + randomToken(12), actor.email, "redemption_" + status, redemption.user_id, JSON.stringify({ redemption_id: id })).run();
      return json({ ok: true, status });
    }
    return json({ error: "Admin endpoint not found." }, 404);
  }

  if (request.method === "GET" && path === "/api/youtube/status") {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    try {
      const stored = await env.DB.prepare("SELECT google_access_token_enc,google_refresh_token_enc,google_token_expires_at FROM users WHERE id=?").bind(user.id).first();
      const access = await youtubeAccess({ ...user, ...stored }, env);
      const [identity, video] = await Promise.all([memberYoutubeIdentity(user, env, access), latestCreatorVideo(access)]);
      const claims = video ? await env.DB.prepare("SELECT reward_type FROM video_reward_claims WHERE user_id=? AND video_id=? AND reward_type='like'").bind(user.id, video.id).all() : { results: [] };
      const claimed = (claims.results || []).map(x => x.reward_type);
      const monitor = video ? await env.DB.prepare("SELECT status, deadline_at FROM youtube_like_monitors WHERE user_id=? AND video_id=? AND status='pending' ORDER BY started_at DESC LIMIT 1").bind(user.id, video.id).first() : null;
      return json({ ok: true, channel: identity, video, claimed, monitoring: !!monitor, monitor_deadline: monitor ? monitor.deadline_at : null, rewards: { like: claimed.includes("like") } });
    } catch (error) { return youtubeErrorResponse(error); }
  }
  if (request.method === "POST" && path === "/api/youtube/verify/like") {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    try {
      const stored = await env.DB.prepare("SELECT google_access_token_enc,google_refresh_token_enc,google_token_expires_at FROM users WHERE id=?").bind(user.id).first();
      const access = await youtubeAccess({ ...user, ...stored }, env);
      const video = await latestCreatorVideo(access);
      if (!video) return json({ error: "There is no public upload to verify yet." }, 404);
      const existing = await env.DB.prepare("SELECT id FROM video_reward_claims WHERE user_id=? AND video_id=? AND reward_type='like'").bind(user.id, video.id).first();
      if (existing) return json({ error: "You've already earned the like reward for this video.", already_claimed: true }, 409);
      const rating = await youtubeRequest(access, "videos/getRating", { id: video.id });
      const item = (rating.items || []).find(x => x.videoId === video.id);
      if (!item || item.rating !== "like") return json({ error: "YouTube doesn't show a like from your connected channel yet. Like the video while signed into this Google account, then try again." }, 409);
      const claimId = "vrc_" + randomToken(12);
      const startedAt = Date.now();
      const deadlineAt = startedAt + 300000;
      const inserted = await env.DB.prepare("INSERT OR IGNORE INTO video_reward_claims (id,user_id,video_id,reward_type) VALUES (?,?,?,'like')").bind(claimId,user.id,video.id).run();
      if (!inserted.meta || inserted.meta.changes !== 1) return json({ error: "You've already earned the like reward for this video.", already_claimed: true }, 409);
      await env.DB.batch([
        env.DB.prepare("UPDATE users SET token_balance=token_balance+10,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(user.id),
        env.DB.prepare("INSERT INTO token_transactions (id,user_id,amount,reason,reference_id) VALUES (?,?,10,'youtube_like',?)").bind("txn_"+randomToken(12),user.id,claimId),
        env.DB.prepare("INSERT INTO youtube_like_monitors (id,user_id,video_id,claim_id,started_at,deadline_at,status) VALUES (?,?,?,?,?,?,'pending')").bind("ylm_"+randomToken(12),user.id,video.id,claimId,startedAt,deadlineAt)
      ]);
      const monitor = env.LIKE_MONITOR.get(env.LIKE_MONITOR.idFromName("global"));
      await monitor.fetch("https://like-monitor/schedule", { method: "POST" });
      const updated = await env.DB.prepare("SELECT token_balance FROM users WHERE id=?").bind(user.id).first();
      return json({ ok: true, awarded: 10, action: "like", monitoring: true, monitor_seconds: 300, token_balance: updated.token_balance });
    } catch (error) { return youtubeErrorResponse(error); }
  }
  if (request.method === "GET" && path === "/api/activity") {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    const [transactions, redemptions] = await Promise.all([
      env.DB.prepare("SELECT amount, reason, created_at FROM token_transactions WHERE user_id=? ORDER BY created_at DESC LIMIT 50").bind(user.id).all(),
      env.DB.prepare("SELECT id, reward_key, cost, status, form_data, created_at, updated_at FROM redemptions WHERE user_id=? ORDER BY created_at DESC LIMIT 50").bind(user.id).all()
    ]);
    return json({ ok: true, transactions: transactions.results || [], redemptions: redemptions.results || [] });
  }
  if (request.method === "POST" && path === "/api/rewards/redeem") {
    const user = await currentUser(request, env);
    if (!user) return json({ error: "Sign in first." }, 401);
    let body;
    try { body = await request.json(); } catch (_) { return json({ error: "Invalid request body." }, 400); }
    const catalog = {
      "content-tracker": ["Content Tracker",15],
      "in-game-challenge-pick": ["In-Game Challenge Pick",25],
      "level-showcase": ["Level Showcase",30],
      "priority-level-review": ["Priority Level Review",35],
      "wheel-of-fortune": ["Wheel of Fortune",45],
      "three-week-video-shoutout": ["3-Week Video Shoutout",50],
      "exclusive-vip-badge": ["Exclusive VIP Badge",55],
      "video-topic-theme": ["Video Topic / Theme",65],
      "mod-upgrade-roll": ["Mod Upgrade Roll",70],
      "direct-gd-collab-session": ["Direct GD Collab Session",75],
      "wall-of-fame-listing": ["Wall of Fame Listing",85],
      "video-intro-shoutout": ["Video Intro Shoutout",95],
      "vip-insider-perk": ["VIP Insider Perk",100],
      "custom-profile-picture-graphic": ["Custom Profile Picture / Graphic",500]
    };
    const key = String(body.reward_key || "");
    const item = catalog[key];
    if (!item) return json({ error: "That reward is not in the catalog." }, 400);
    const pendingLike = await env.DB.prepare("SELECT COUNT(*) AS count FROM youtube_like_monitors WHERE user_id=? AND status='pending'").bind(user.id).first();
    if (pendingLike && pendingLike.count > 0) return json({ error: "Your like reward is still being monitored. You can request rewards once the 5-minute check finishes." }, 409);
    const details = String(body.details || "").trim().slice(0, 1000);
    if (["in-game-challenge-pick","level-showcase","priority-level-review","video-topic-theme","direct-gd-collab-session","custom-profile-picture-graphic"].includes(key) && details.length < 3)
      return json({ error: "Please add a few details so the creator knows what you want." }, 400);
    const redemptionId = "red_" + randomToken(16);
    const txId = "txn_" + randomToken(12);
    const results = await env.DB.batch([
      env.DB.prepare("INSERT INTO redemptions (id,user_id,reward_key,cost,status,form_data) SELECT ?,?,?,?,'pending',? WHERE EXISTS (SELECT 1 FROM users WHERE id=? AND token_balance>=?)").bind(redemptionId,user.id,key,item[1],JSON.stringify({ label:item[0], details }),user.id,item[1]),
      env.DB.prepare("UPDATE users SET token_balance=token_balance-?,updated_at=CURRENT_TIMESTAMP WHERE id=? AND token_balance>=? AND EXISTS (SELECT 1 FROM redemptions WHERE id=? AND status='pending')").bind(item[1],user.id,item[1],redemptionId),
      env.DB.prepare("INSERT INTO token_transactions (id,user_id,amount,reason,reference_id) SELECT ?,?,-?,?,? WHERE EXISTS (SELECT 1 FROM redemptions WHERE id=? AND status='pending')").bind(txId,user.id,item[1],"reward_redemption:"+key,redemptionId,redemptionId)
    ]);
    if (!results[0] || !results[0].meta || results[0].meta.changes !== 1 || !results[1] || !results[1].meta || results[1].meta.changes !== 1)
      return json({ error: "Not enough tokens for this reward, or the request could not be created." }, 409);
    const updated = await env.DB.prepare("SELECT token_balance FROM users WHERE id=?").bind(user.id).first();
    return json({ ok: true, redemption_id:redemptionId, reward:item[0], cost:item[1], status:"pending", token_balance:updated.token_balance });
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
  if (request.method === "GET" && (path === "/" || path === "/index.html")) return new Response(INDEX_HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });
  return env.ASSETS.fetch(request);
}
export class LikeMonitor {
  constructor(ctx, env) { this.ctx = ctx; this.env = env; }
  async fetch(request) {
    if (new URL(request.url).pathname !== "/schedule") return new Response("Not found", { status: 404 });
    await this.ctx.storage.setAlarm(Date.now() + 10000);
    return new Response("scheduled");
  }
  async alarm() {
    const env = this.env;
    const pending = await env.DB.prepare("SELECT id,user_id,video_id,claim_id,deadline_at FROM youtube_like_monitors WHERE status='pending' ORDER BY started_at LIMIT 100").all();
    await Promise.all((pending.results || []).map(async monitor => {
      try {
        const user = await env.DB.prepare("SELECT id,google_access_token_enc,google_refresh_token_enc,google_token_expires_at FROM users WHERE id=?").bind(monitor.user_id).first();
        if (!user) return;
        const access = await youtubeAccess(user, env);
        const rating = await youtubeRequest(access, "videos/getRating", { id: monitor.video_id });
        const item = (rating.items || []).find(x => x.videoId === monitor.video_id);
        const now = Date.now();
        if (!item || item.rating !== "like") {
          const balance = await env.DB.prepare("SELECT token_balance FROM users WHERE id=?").bind(monitor.user_id).first();
          if (!balance || balance.token_balance < 10) { console.error("Like reversal waiting for sufficient balance", monitor.id); return; }
          await env.DB.batch([
            env.DB.prepare("UPDATE users SET token_balance=token_balance-10,updated_at=CURRENT_TIMESTAMP WHERE id=? AND token_balance>=10").bind(monitor.user_id),
            env.DB.prepare("INSERT OR IGNORE INTO token_transactions (id,user_id,amount,reason,reference_id) VALUES (?,?, -10,'youtube_like_reversal',?)").bind("txn_"+randomToken(12),monitor.user_id,monitor.claim_id),
            env.DB.prepare("DELETE FROM video_reward_claims WHERE id=? AND user_id=? AND reward_type='like'").bind(monitor.claim_id,monitor.user_id),
            env.DB.prepare("UPDATE youtube_like_monitors SET status='reversed',last_checked_at=? WHERE id=? AND status='pending'").bind(now,monitor.id)
          ]);
        } else if (now >= Number(monitor.deadline_at)) {
          await env.DB.prepare("UPDATE youtube_like_monitors SET status='confirmed',last_checked_at=? WHERE id=? AND status='pending'").bind(now,monitor.id).run();
        } else {
          await env.DB.prepare("UPDATE youtube_like_monitors SET last_checked_at=? WHERE id=? AND status='pending'").bind(now,monitor.id).run();
        }
      } catch (error) { console.error("Like monitor check failed; retrying without penalizing member", monitor.id, error); }
    }));
    const remaining = await env.DB.prepare("SELECT COUNT(*) AS count FROM youtube_like_monitors WHERE status='pending'").first();
    if (remaining && remaining.count > 0) await this.ctx.storage.setAlarm(Date.now() + 10000);
  }
}

export default {
  async fetch(request, env) {
    try { return await handle(request, env); }
    catch (error) {
      console.error("Mythix Hub request failed:", error && error.stack || error);
      return json({ error: "Server error.", message: env.ENVIRONMENT === "development" ? String(error && error.message || error) : "Please try again later." }, 500);
    }
  }
};