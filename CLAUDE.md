# AI Trivia Arena — Claude Agent Notes
> **Last updated:** 2026-03-20 | Session 124 (TV Polish)
> **Repo:** `Trace9095/ai-trivia-arena` | **Branch:** `main`
> **Vercel slug:** `ai-trivia-arena`
> **Domain:** aitriviaarena.com
> **Version:** 1.0.0

---

## What Was Built (Session History)

### S118 — Initial Build
- Full-stack AI trivia game with TV mode
- Turborepo monorepo structure (`apps/web` + `apps/mobile`)
- 3,207 trivia questions seeded across 11 categories (including Colorado/local)
- TV mode `/tv` — generic multi-theme auto-start display
- `/rttv` route — Rooftop Social branded kiosk display (the one to use for the bar TV)
- Admin dashboard with question management, analytics, user management
- Stripe live keys configured (webhooks NOT wired — zero revenue to DB)
- Neon DB + Drizzle ORM
- Super admin: `ceo@epicai.ai` / `Trace87223!`
- Additional admin: `Trace.hildebrand@gmail.com` / `Trace87223!`

### S119
- Admin dashboard audit — confirmed Stripe webhooks NOT wired

### S120
- All TypeScript passed
- `/tv` auto-start confirmed working

### S121/S122 — Security Sweep
- Security headers confirmed in `next.config.ts`
- `unsafe-eval` removed from CSP
- CRON_SECRET added to cron routes

### S123 — Expo Setup
- Mobile app (`apps/mobile`) needs EAS dev build (has RevenueCat — not Expo Go compatible)
- `eas.json` added, `expo-dev-client` added

### S124 — /rttv Full Polish (commit 3532ac2)
- **USE `/rttv` FOR THE BAR TV, NOT `/tv`** — it's the RT-branded kiosk display
- Category badge prominently displayed in question header (pill badge + icon)
- Category now exposed in API response (`/api/games/live/current`)
- Question font minimum 48px (readable at 15+ feet), answers minimum 36px
- Countdown timer 88px — huge and readable across the room
- Answer reveal phase extended to 5 seconds before showing leaderboard
- Question entrance animation (fade+slide) on each new question
- Gold glow pulse on correct answer reveal
- PromoCarousel on milestone leaderboard (Tonight's Special, Weekly Specials, Instagram, Gift Cards)
- RT Specials: Margarita Monday, Taste Tuesday, Locals' Day Wed, Thirsty Thursday, Friday Kickoff, Live Music Saturday, Sunday Funday
- `rttv/layout.tsx` added
- `next.config.ts`: turbopack monorepo root configured

---

## Architecture

```
ai-trivia-arena/          ← Turborepo monorepo root
├── apps/
│   ├── web/              ← Next.js 16 web app (Vercel deploys this)
│   └── mobile/           ← Expo SDK 55 companion app (separate deploy)
├── packages/             ← Shared types/utils
├── turbo.json
└── vercel.json           ← Vercel output directory: apps/web/.next
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 App Router |
| Database | Neon PostgreSQL (Drizzle ORM) |
| Auth | Custom session-based (admin: `seed-admin.ts`) |
| Payments | Stripe (live keys, webhooks NOT wired) |
| AI | Claude Haiku via Anthropic API (question generation) |
| Styling | Tailwind CSS v4 + Geist font |
| Mobile | Expo SDK 55 (EAS dev build required) |

---

## Key Routes

| Route | Purpose |
|-------|---------|
| `/rttv` | **Rooftop Social branded kiosk TV mode** — use this for the bar display |
| `/tv` | Generic multi-theme TV mode (not RT branded) |
| `/join` | Players scan QR → enter game code → play on phone |
| `/play` | Play solo (practice mode) |
| `/admin` | Admin dashboard (question mgmt, analytics, seeding) |
| `/admin/games` | Manage live games |
| `/api/games/live/current` | Polling endpoint used by TV modes |

---

## TV Mode Details (`/rttv`)

**How it works:**
1. Page loads → `useEffect` immediately starts polling `/api/games/live/current` every 1.5s
2. Backend auto-creates a daily always-on game if one doesn't exist for today
3. Backend auto-advances: 15s question → `showing_leaderboard` (8s) → next question
4. Front-end: on `showing_leaderboard` transition → 5s reveal → full leaderboard
5. Every 5th question = milestone leaderboard (8 players + promo carousel)
6. Every 5th question group = category vote (players vote from phones)

**For the UniFi Display Cast Pro:**
- URL: `https://aitriviaarena.com/rttv`
- No touch, no mouse, no keyboard needed — fully autonomous
- No fullscreen prompts — uses `width:100vw; height:100dvh; overflow:hidden` CSS only
- QR code always visible in bottom bar → players scan → join game

**Question pool:** 3,207 questions across 11 categories:
- general, science, history, geography, pop_culture, sports, food_drink, technology, movies_tv, music, colorado

---

## Known Open Issues

1. ⚠️ **Stripe webhooks NOT wired** — zero revenue flowing to DB
2. ⚠️ **RevenueCat on TEST keys only** — subscription revenue not live
3. ⚠️ **Mobile app requires EAS dev build** — not Expo Go compatible (RevenueCat)

---

## Key Files

| File | Purpose |
|------|---------|
| `apps/web/src/app/rttv/page.tsx` | **RT Kiosk TV display** (the main deliverable) |
| `apps/web/src/app/tv/page.tsx` | Generic TV mode |
| `apps/web/src/app/api/games/live/current/route.ts` | Auto-advance game state + polling API |
| `apps/web/src/lib/question-pool.ts` | Question pool fetch + Claude fallback |
| `apps/web/src/lib/live-game.ts` | Game logic helpers |
| `apps/web/src/db/schema.ts` | Full DB schema |

---

## Admin Credentials

- `ceo@epicai.ai` / `Trace87223!` (super admin)
- `Trace.hildebrand@gmail.com` / `Trace87223!`
