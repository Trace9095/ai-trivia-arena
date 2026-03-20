# AI Trivia Arena — Architecture

## Overview
Mobile-first AI trivia game with TV/Kahoot mode for bars. Web + Expo native app. Subscriptions via Stripe (web) and RevenueCat (iOS).

## Stack
| Layer | Tech |
|-------|------|
| Framework | Next.js 16.2.0, React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui + Radix UI |
| Database | Neon PostgreSQL via Drizzle ORM |
| Auth | Magic link (Resend) + JWT sessions (jose) |
| Email | Resend |
| AI | Claude Haiku 4.5 (question generation) |
| Payments | Stripe (web) + RevenueCat (iOS) |
| Charts | Recharts |
| Mobile | Expo SDK 55 (in _new-projects/ai-trivia-arena-mobile/) |
| QR Codes | qrcode library |

## File Paths
- **App root**: `src/app/`
- **Admin**: `src/app/admin/(dashboard)/`
- **API**: `src/app/api/`
- **Database**: `src/db/schema.ts` + `src/db/index.ts`
- **Lib**: `src/lib/` (stripe.ts, pricing.ts, auth.ts, utils.ts, etc.)
- **Types**: `src/types/`

## Database (Neon + Drizzle)
- 16 tables (see below)
- Migrate: `npx drizzle-kit push`
- Schema: `src/db/schema.ts`

### Key Tables
| Table | Purpose |
|-------|---------|
| users | Accounts (email, totalScore, isPro, stripeCustomerId) |
| games | Solo/multiplayer sessions |
| questions | AI-generated per game |
| questionPool | Pre-generated bank (seed first!) |
| liveGames | TV/Kahoot mode games |
| livePlayers | Players in live games |
| aiUsageLogs | Claude API cost tracking |
| errorLogs | App error logging |
| revenueEvents | Stripe + RevenueCat + AdMob |

## Auth Pattern
- Magic link → Resend email → JWT cookie
- Admin locked to: CEO@epicai.ai, ceo@epicai.ai
- No password auth — magic link only

## Stripe Tiers
| Tier | Web | iOS |
|------|-----|-----|
| Free | $0 | $0 |
| Pro Monthly | $4.99 | $6.49 |
| Pro Yearly | $29.99 | $38.99 |
| Lifetime | $49.99 | $64.99 |
- Price IDs in env vars: STRIPE_PRICE_ID_PRO_MONTHLY, STRIPE_PRICE_ID_PRO_YEARLY, STRIPE_PRICE_ID_LIFETIME
- Checkout: `/api/billing/checkout`
- Portal: `/api/billing/portal`
- Webhook: `/api/billing/webhook`

## TV Mode (/tv)
- 4 themes: classic, neon, royalgorge, sportsbar
- Always-on mode for bars (games loop forever)
- 4-char game codes (e.g., "A7KR")
- Players join via mobile → scan QR code or enter code at /join
- Auto-start via `useEffect` on mount — no tap required (fixed commit b5c485c)

## AI Question Generation
- Model: claude-haiku-4-5-20251001 (cheapest)
- Every call logged to aiUsageLogs with tokens + USD cost
- Checks questionPool first before generating new
- Seed pool: POST /api/admin/seed-questions (~$2 total for all categories)

## Vercel Config
- **Slug**: (not yet assigned — first deploy will set it)
- **Project ID**: `prj_LDw6a1lMghM26FQmKhZssUrRqrm1`
- **Team**: `team_pGqkBUxWUXiBoZoKYPgweHDl`
- **Root dir**: none (src/app/)
- **Build**: `next build` (Turbopack enabled)
- **Branch**: main

## Mobile App
- Location: `_new-projects/ai-trivia-arena-mobile/`
- Expo SDK 55
- App ID: ai.epicai.triviarena
- RevenueCat keys: see ~/.claude/projects/.../memory/revenuecat-keys.md

## Env Vars Required
```
DATABASE_URL              # Neon PostgreSQL
ANTHROPIC_API_KEY         # Claude API
RESEND_API_KEY            # Email
RESEND_FROM_EMAIL         # From address
JWT_SECRET                # Min 32 chars
NEXT_PUBLIC_APP_URL       # Full URL
STRIPE_SECRET_KEY         # LIVE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  # LIVE
STRIPE_PRICE_ID_PRO_MONTHLY
STRIPE_PRICE_ID_PRO_YEARLY
STRIPE_PRICE_ID_LIFETIME
STRIPE_WEBHOOK_SECRET
```

## GitHub
- Repo: Trace9095/ai-trivia-arena
- Branch: MAINBRANCH
