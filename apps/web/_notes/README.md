# AI Trivia Arena — Quick Start

> See [MASTER_CONTEXT.md](../../../EPIC-AI-INTERNAL/_notes/MASTER_CONTEXT.md) for portfolio-wide context.
> Cross-ref: [AGENT_ONBOARDING.md](../../../EPIC-AI-INTERNAL/_notes/AGENT_ONBOARDING.md) | [RECURRING_BUGS.md](../../../EPIC-AI-INTERNAL/_notes/RECURRING_BUGS.md)

## What This App Does
AI-powered trivia game where every question is generated fresh by Claude Haiku. Players choose categories, compete in daily challenges, climb leaderboards. TV/Kahoot mode for bars (scan QR → join game on TV). White-label potential for bar trivia nights.

## Key Links
- **Folder:** `~/Documents/APPS/_new-projects/ai-trivia-arena/`
- **GitHub:** Trace9095/ai-trivia-arena (branch: MAINBRANCH — was normalized to main in S118)
- **Vercel Project ID:** `prj_LDw6a1lMghM26FQmKhZssUrRqrm1`
- **Production URL:** aitriviaarena.com (DNS status: unknown)
- **Admin Login:** CEO@epicai.ai / Trace87223! → /admin/login

## Run Locally
```bash
cd ~/Documents/APPS/_new-projects/ai-trivia-arena
npm install
# Ensure .env.local has DATABASE_URL, ANTHROPIC_API_KEY, RESEND_API_KEY, JWT_SECRET, etc.
npx next dev --turbopack
```

## Build
```bash
npx next build     # Root dir (no backend/ subdirectory)
```

## Key Files
```
src/app/              ← App root
src/app/admin/        ← 7 admin dashboard pages
src/app/api/          ← All API routes
src/app/(game)/       ← Game UI routes
src/app/tv/           ← TV/Kahoot mode
src/db/schema.ts      ← Drizzle schema (16 tables)
src/db/index.ts       ← DB singleton (getDb())
src/lib/auth.ts       ← Magic link + JWT session
src/lib/claude.ts     ← Question generation
src/lib/stripe.ts     ← Stripe billing
```

## Database
```bash
npx drizzle-kit push    # Push schema to Neon
# 16 tables: users, games, questions, questionPool, liveGames, livePlayers,
#            aiUsageLogs, errorLogs, revenueEvents, etc.
```

## CRITICAL: Do This Before Anything Else
```bash
# Seed the question pool (app is BROKEN without this)
# Visit /admin → Settings → or call directly:
curl -X POST https://aitriviaarena.com/api/admin/seed-questions \
  -H "Cookie: session=<your-jwt>"
# Costs ~$2 in Claude Haiku API calls
# Do NOT demo the app before this is done
```

## Known Bugs (S118)
1. **TV auto-start broken** — /tv requires manual tap. Fix: add `useEffect` to auto-start on mount. Blocks Chromecast/Display Cast deployments.
2. **Question pool empty** — Must call /api/admin/seed-questions before any gameplay.
3. **Emoji cleanup** — Audit remaining UI text for emojis (should be Lucide icons only).

## Stripe Pricing
| Tier | Web | iOS |
|------|-----|-----|
| Free | $0 | $0 |
| Pro Monthly | $4.99 | $6.49 |
| Pro Yearly | $29.99 | $38.99 |
| Lifetime | $49.99 | $64.99 |

Env vars: `STRIPE_PRICE_ID_PRO_MONTHLY`, `STRIPE_PRICE_ID_PRO_YEARLY`, `STRIPE_PRICE_ID_LIFETIME`

## Mobile App
- Location: `_new-projects/ai-trivia-arena-mobile/`
- Expo SDK 55, App ID: ai.epicai.triviarena
- RevenueCat keys: see `~/.claude/projects/.../memory/revenuecat-keys.md`

## Env Vars Required
```
DATABASE_URL, ANTHROPIC_API_KEY, RESEND_API_KEY, RESEND_FROM_EMAIL,
JWT_SECRET, NEXT_PUBLIC_APP_URL,
STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
STRIPE_PRICE_ID_PRO_MONTHLY, STRIPE_PRICE_ID_PRO_YEARLY, STRIPE_PRICE_ID_LIFETIME,
STRIPE_WEBHOOK_SECRET
```

## Recent Changes
- **S118:** Full MVP built (53 files, 3,501 lines), Stripe wired, Expo app scaffolded, dvh fix applied
