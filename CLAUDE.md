# AI Trivia Arena — Claude Agent Notes
> **Last updated:** 2026-03-20 | Session 124
> **Repo:** `Trace9095/ai-trivia-arena` | **Branch:** `MAINBRANCH` (not main)
> **Vercel slug:** `ai-trivia-arena`
> **Domain:** TBD (Wave 6, not yet live)
> **Version:** 1.0.0

---

## What Was Built (Session History)

### S118 — Initial Build
- Full-stack AI trivia game with TV mode
- Turborepo monorepo structure (`apps/web` + `apps/mobile`)
- 1,078 trivia questions seeded across multiple categories
- TV mode `/tv` with auto-start (fixed — uses `useEffect` at line 392)
- Admin dashboard with question management, analytics
- Stripe live keys configured
- Neon DB + Drizzle ORM
- Super admin: `ceo@epicai.ai` / `Trace87223!`
- Additional admin: `Trace.hildebrand@gmail.com` / `Trace87223!`

### S119
- Admin dashboard audit — confirmed Stripe webhooks NOT wired (zero revenue to DB)

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
- Bug fixed: `react-native-worklets` reference cleaned up

---

## Architecture

```
ai-trivia-arena/          ← Turborepo monorepo root
├── apps/
│   ├── web/              ← Next.js 16 web app
│   └── mobile/           ← Expo SDK 55 (companion in ai-trivia-arena-mobile repo)
├── packages/             ← Shared types/utils
├── turbo.json
└── vercel.json           ← Vercel output directory: apps/web/.next
```

**Vercel deploys `apps/web` only.** The mobile app is a separate repo: `_new-projects/ai-trivia-arena-mobile`.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16, App Router |
| Database | Neon Postgres + Drizzle ORM |
| Auth | Magic link email (Resend) |
| Payments | Stripe (live keys) |
| AI | Claude API (question generation) |
| UI | shadcn/ui, Tailwind CSS, Geist fonts |
| Brand | `#D4A853` gold accent, dark `#0D1117` bg |
| Mobile | Expo SDK 55 (separate repo) |
| Build | Turborepo |

---

## Known Issues / TODOs

- ❌ **CRITICAL: Stripe webhooks NOT wired** — Stripe checkout exists but no webhook handler. Revenue does NOT flow to database. Users can pay but subscription is never activated in DB.
- ❌ Mobile app needs EAS dev build before testing (RevenueCat blocks Expo Go)
- ⚠️ Branch is `MAINBRANCH` (not `main`) — all git operations use this branch
- ⚠️ Domain not yet configured — still on Vercel preview URL

---

## Environment Variables Needed

```env
DATABASE_URL=          # Neon connection string
NEXT_PUBLIC_SITE_URL=  # https://ai-trivia-arena.vercel.app (or custom domain)
RESEND_API_KEY=        # For magic link emails
STRIPE_SECRET_KEY=     # Live key (already configured)
STRIPE_WEBHOOK_SECRET= # ⚠️ NOT YET CONFIGURED — do this!
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
ANTHROPIC_API_KEY=     # For AI features
CRON_SECRET=           # For cron job security
```

---

## Running Locally

```bash
cd apps/web
npm install
npm run dev         # http://localhost:3000
```

Or from monorepo root:
```bash
npm install
npx turbo dev
```

---

## What A Fresh Agent Should Know

1. **Don't create a new admin** — seed script already seeded `ceo@epicai.ai` as super admin
2. **Branch is MAINBRANCH** — not main. Use `git checkout MAINBRANCH` to be sure
3. **Stripe webhook is the #1 TODO** — the entire payment flow is dead without it
4. **TV mode** at `/tv` — requires `useEffect` for auto-start (pure Date.now() in render was the bug)
5. **Turborepo**: all commands run from monorepo root; Vercel deploys `apps/web` via output directory config
6. **Question pool**: 1,078 questions already seeded — don't re-seed or you'll duplicate
7. **Category voting** feature is live — users can vote on category preference
8. **RevenueCat** in mobile — mobile needs `expo-dev-client`, can't use Expo Go
