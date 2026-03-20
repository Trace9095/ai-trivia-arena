<p align="center">
  <h1 align="center">AI Trivia Arena</h1>
</p>

<p align="center">
  <strong>AI-powered trivia game where every question is generated fresh by Claude Haiku. Compete solo, climb leaderboards, and challenge yourself with 1,078+ questions across 8 categories.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/AI-Claude_Haiku-CC785C?logo=anthropic&logoColor=white" alt="Claude Haiku" />
  <img src="https://img.shields.io/badge/Database-Neon_PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="Neon PostgreSQL" />
  <img src="https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/version-1.0.0-D4A853" alt="Version 1.0.0" />
  <img src="https://img.shields.io/badge/License-Proprietary-red" alt="License" />
</p>

---

## Overview

**AI Trivia Arena** is a web-based trivia game powered by Anthropic Claude Haiku. Every question is generated on-demand by AI, ensuring fresh content across 8 categories. Players compete in daily challenges, track streaks, and climb global leaderboards. Built with white-label potential for restaurant trivia nights (TV mode included).

**Live:** [ai-trivia-arena.epicai.ai](https://ai-trivia-arena.epicai.ai) | **GitHub:** [Trace9095/ai-trivia-arena](https://github.com/Trace9095/ai-trivia-arena)

Part of the [Epic AI](https://epicai.ai) Wave 6 portfolio.

---

## Features

- **AI Question Generation** — Claude Haiku generates trivia questions on-demand (~$0.001 per 10 questions)
- **1,078+ Seeded Questions** — Pre-seeded question pool across 8 categories for instant play
- **8 Categories** — Science & Technology, History, Geography, Pop Culture, Sports, Food & Drink, Arts & Literature, General Knowledge
- **Daily Challenges** — New question set every 24 hours with streak tracking
- **Global Leaderboard** — Ranked by score, accuracy, and streak
- **TV Mode** — `/rttv` route designed for restaurant/bar display screens, auto-start enabled
- **Player Profiles** — Stats, history, accuracy by category
- **Magic Link Auth** — Passwordless login via Resend email
- **Stripe Subscriptions** — Freemium model with premium tiers
- **Admin Dashboard** — Question management, user analytics, revenue stats at `/admin`
- **QR Code Sharing** — Share game sessions or invite friends
- **Dark Theme** — Forced dark mode, zinc base palette
- **SEO** — Dynamic OG images, sitemap, robots.txt, JSON-LD schema

---

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui (zinc base) |
| Database | Neon PostgreSQL + Drizzle ORM |
| AI | Anthropic Claude Haiku (question generation) |
| Auth | Magic links via Resend + httpOnly JWT cookies |
| Payments | Stripe (subscriptions) |
| Email | Resend |
| Charts | Recharts |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- PostgreSQL database ([Neon](https://neon.tech) recommended)
- Anthropic API key (Claude Haiku)
- Resend API key

### Installation

```bash
git clone https://github.com/Trace9095/ai-trivia-arena.git
cd ai-trivia-arena
npm install
cp .env.example .env.local   # Configure your environment variables
npx drizzle-kit push         # Create database tables
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play locally.

### Environment Variables

| Variable | Required | Description |
|:---------|:--------:|:------------|
| `DATABASE_URL` | Yes | Neon PostgreSQL connection string |
| `ANTHROPIC_API_KEY` | Yes | Claude API key for question generation |
| `RESEND_API_KEY` | Yes | Resend key for magic link auth emails |
| `RESEND_FROM_EMAIL` | Yes | Verified sender email address |
| `JWT_SECRET` | Yes | Min 32 character random string |
| `NEXT_PUBLIC_APP_URL` | Yes | Full site URL (https://...) |

---

## Project Structure

```
ai-trivia-arena/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage + category selector
│   │   ├── play/                 # Game play routes
│   │   ├── leaderboard/          # Global leaderboard
│   │   ├── categories/           # Browse by category
│   │   ├── profile/              # Player profile + stats
│   │   ├── join/                 # Auth (magic link)
│   │   ├── pricing/              # Subscription plans
│   │   ├── admin/                # Admin dashboard
│   │   ├── rttv/                 # TV mode (restaurant/bar display)
│   │   └── api/                  # API routes
│   ├── components/               # React components
│   ├── db/
│   │   ├── schema.ts             # Drizzle schema (10 tables)
│   │   └── index.ts              # Lazy DB singleton (getDb())
│   └── lib/
│       ├── auth.ts               # Magic link + session auth
│       ├── claude.ts             # Question generation via Haiku
│       └── utils.ts              # Helpers + CATEGORIES constant
├── seed-questions.ts             # 1,078 question seed script
└── public/                       # Static assets
```

---

## TV Mode

The `/rttv` route is designed for restaurant and bar displays. It auto-starts a trivia session on load and cycles through questions automatically, optimized for TV screens. Use with a Chromecast or HDMI connection.

---

## Deployment

| Setting | Value |
|:--------|:------|
| Platform | Vercel |
| Root Directory | `.` (project root) |
| Branch | `MAINBRANCH` (not `main`) |
| GitHub | [Trace9095/ai-trivia-arena](https://github.com/Trace9095/ai-trivia-arena) |

> **Note:** This project's default branch is `MAINBRANCH`. Configure in Vercel dashboard accordingly.

---

## Version

**Version:** 1.0.0 (2026) — Wave 6

---

## License

Proprietary. All rights reserved. Copyright © 2026 Epic AI.
