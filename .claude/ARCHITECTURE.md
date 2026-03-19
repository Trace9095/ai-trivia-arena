# AI Trivia Arena — Architecture

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (NavBar, Footer, dark mode)
│   ├── page.tsx                # Landing page
│   ├── opengraph-image.tsx     # OG image (edge runtime)
│   ├── icon.tsx                # Favicon
│   ├── auth/login/page.tsx     # Magic link login
│   ├── play/
│   │   ├── page.tsx            # Game lobby
│   │   ├── daily/page.tsx      # Daily challenge (client)
│   │   ├── game/page.tsx       # Live game (client)
│   │   └── results/page.tsx    # Game results
│   ├── leaderboard/page.tsx    # Global leaderboard (SSR)
│   ├── profile/page.tsx        # User profile (SSR)
│   ├── categories/page.tsx     # Category browser
│   ├── admin/page.tsx          # Admin dashboard
│   └── api/
│       ├── auth/
│       │   ├── magic-link/     # POST send magic link via Resend
│       │   ├── verify/         # GET verify token, set session cookie
│       │   └── logout/         # POST clear session
│       ├── games/
│       │   ├── route.ts        # GET list games, POST create game
│       │   ├── [id]/route.ts   # GET game state + questions
│       │   ├── [id]/answer/    # POST submit answer
│       │   └── daily/          # GET today's daily challenge
│       ├── questions/generate/ # POST generate via Claude
│       ├── leaderboard/        # GET leaderboard
│       ├── profile/            # GET/PUT user profile
│       └── admin/stats/        # GET admin stats
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── game/
│   │   ├── QuestionCard.tsx    # Main game component
│   │   └── ResultsContent.tsx  # Results display
│   └── layout/
│       ├── NavBar.tsx          # Fixed top nav
│       └── Footer.tsx          # Site footer
├── db/
│   ├── schema.ts               # Drizzle schema (10 tables)
│   └── index.ts                # getDb() lazy singleton
├── lib/
│   ├── auth.ts                 # Magic links, sessions, cookies
│   ├── claude.ts               # Question generation (Claude Haiku)
│   └── utils.ts                # cn(), calculatePoints(), CATEGORIES
└── types/
    └── index.ts                # Shared TypeScript types
```

## Auth Flow

1. User enters email -> POST /api/auth/magic-link -> Resend sends email
2. User clicks link -> GET /api/auth/verify?token=xxx
3. Token verified in magic_links table -> session created in sessions table
4. httpOnly cookie set (trivia_session) -> redirect to /play
5. getSession() reads cookie -> joins sessions + users tables -> returns {userId, email}

## Question Generation Flow

1. POST /api/games (or daily endpoint) -> calls generateQuestions() in claude.ts
2. Claude Haiku generates N questions as JSON array
3. Questions stored in questions table (linked to game_id)
4. Game page fetches questions via GET /api/games/[id]
5. Answers submitted via POST /api/games/[id]/answer (isCorrect computed server-side)

## Key Patterns

- **Lazy init:** getDb(), getResend(), getClient() — never module-scope
- **Server components default** — only 'use client' for QuestionCard, login form, game pages
- **Dark mode forced** — `dark` class on `<html>`, no toggle needed
- **Dynamic route params** — all `params` are Promise<> in Next.js 16, must `await params`
