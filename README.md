# AI Trivia Arena

Multiplayer AI trivia platform with 1,000+ questions across 11 categories.

## Monorepo Structure

```
ai-trivia-arena/
├── apps/
│   ├── web/          # Next.js web app (aitriviaarena.com) + TV mode
│   └── mobile/       # Expo mobile app (iOS + Android)
├── packages/
│   └── shared/       # Shared types, categories, constants
├── turbo.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev:web      # web only — includes /tv mode
npm run dev:mobile   # Expo dev server
npm run build        # build all
```
