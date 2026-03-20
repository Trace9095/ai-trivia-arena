# AI Trivia Arena — Feature Requests & Pending Work

## BUGS (Fix First)
- [ ] **TV mode auto-start** — TV mode requires manual tap to start. Needs `useEffect` auto-start on mount so Display Cast (Chromecast/AirPlay) works without touching screen. This blocks the BWW bar deployment.
- [ ] **Emojis in UI** — audit remaining emoji usage in components, purge if unwanted

## CRITICAL SETUP (Do Before Testing Anything)
- [ ] **Seed question pool** — POST /api/admin/seed-questions (costs ~$2 in Claude Haiku). Without this, games have no questions.
- [ ] **Set RevenueCat production keys** — see memory/revenuecat-keys.md for keys. Needed for iOS purchases. App ID: ai.epicai.triviarena

## TESTING
- [ ] End-to-end Stripe checkout with test card 4242 4242 4242 4242
- [ ] Admin dashboard login at /admin/login (CEO@epicai.ai)
- [ ] Create a game, join via game code, play a round end-to-end
- [ ] TV mode: host a game on /tv, join from phone via game code, verify scoring

## Phase 2 Features
- [ ] Multiplayer tournaments (bracket-style)
- [ ] RevenueCat IAP integration (iOS subscriptions via react-native-purchases)
- [ ] AdMob ads (already scaffolded in revenue events schema)
- [ ] Push notifications for daily challenges
- [ ] Social features: challenge a friend

## Phase 3 Features
- [ ] Bar trivia host mode (white-label, custom categories for bars)
- [ ] Custom category creation (user-submitted)
- [ ] Analytics deeper — per-category performance stats

## Content
- [ ] Expand question pool across more categories
- [ ] Review AI-generated questions for quality (spot-check category samples)
