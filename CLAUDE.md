# AI Trivia Arena

> **Owner:** Trace Hildebrand / Epic AI
> **GitHub:** Trace9095/ai-trivia-arena
> **Vercel Slug:** (TBD after deploy)
> **Status:** Phase 1 MVP

## Overview

AI-powered trivia game where every question is generated fresh by Claude Haiku. Players choose categories, compete in daily challenges, and climb global leaderboards. White-label potential for restaurant trivia nights.

## Dev Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run typecheck    # TypeScript check
npx drizzle-kit push # Push schema to Neon DB
```

## Environment Variables

```
DATABASE_URL=         # Neon PostgreSQL connection string
ANTHROPIC_API_KEY=    # Claude API key (Haiku model)
RESEND_API_KEY=       # For magic link emails
RESEND_FROM_EMAIL=    # From address for emails
JWT_SECRET=           # Min 32 chars, random
NEXT_PUBLIC_APP_URL=  # Full URL (https://...)
```

## Tech Stack

- Next.js 16 App Router + TypeScript strict
- Tailwind CSS v4 + shadcn/ui (zinc base)
- Neon PostgreSQL + Drizzle ORM
- Claude Haiku for question generation (~$0.001/10 questions)
- Resend for magic link auth emails
- Dark mode primary (forced `dark` class on html)

## Architecture

- `src/db/schema.ts` — Drizzle schema (10 tables)
- `src/db/index.ts` — Lazy DB singleton (`getDb()`)
- `src/lib/auth.ts` — Magic link + session auth (httpOnly cookies)
- `src/lib/claude.ts` — Question generation via Claude Haiku
- `src/lib/utils.ts` — Helpers + CATEGORIES constant

## Project Path

Root dir, no `backend/` subdirectory.
App Router at `src/app/`. Components at `src/components/`.

## Phase Status

- **Phase 1 MVP** — Solo play, daily challenges, leaderboard, auth
- **Phase 2** — Multiplayer, tournaments, RevenueCat IAP, ads
- **Phase 3** — Bar trivia host mode, white-label, custom categories

## Admin

Admin panel at `/admin`. Access limited to emails in `ADMIN_EMAILS` array in `src/app/admin/page.tsx` and `src/app/api/admin/stats/route.ts`.
