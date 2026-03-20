# AI Trivia Arena — Mobile App

> **Owner:** Trace Hildebrand / Epic AI
> **GitHub:** Trace9095/ai-trivia-arena-mobile
> **Bundle ID:** ai.epicai.triviarena
> **APNs Team:** MPH83385EQ
> **Status:** Phase 1 — MVP

## Overview

Native iOS + Android app for AI Trivia Arena. Connects to the same backend API as the web app at aitriviaarena.com. Multiplayer trivia with live game support, daily challenges, and RevenueCat IAP.

## Dev Commands

```bash
npm start                # Start Expo dev server
npm run ios              # Run on iOS simulator
npm run android          # Run on Android emulator
npx tsc --noEmit         # TypeScript check
eas build --platform ios --profile development  # EAS dev build
eas build --platform ios --profile production   # Production build
```

## Environment Variables

```
EXPO_PUBLIC_API_URL=             # API base (defaults to https://aitriviaarena.com/api in prod)
EXPO_PUBLIC_REVENUECAT_API_KEY=  # RevenueCat iOS API key
```

Copy `.env.example` to `.env.local` for local dev. Never commit `.env.local`.

## Tech Stack

- Expo SDK 55 + React Native + TypeScript strict
- React Navigation v7 (native-stack + bottom-tabs)
- TanStack Query v5 for leaderboard/profile fetching
- Axios for API calls (Bearer token auth)
- expo-secure-store for session token storage
- expo-camera for QR code scanning
- expo-haptics for tactile feedback
- react-native-purchases + react-native-purchases-ui (RevenueCat)
- Dark mode primary (#0A0A14 background)

## Architecture

```
src/
├── config.ts              ← Colors, categories, FREE_CATEGORIES, API_BASE_URL
├── types/api.ts           ← All API response types
├── lib/
│   ├── api.ts             ← Axios client + typed endpoint wrappers
│   ├── auth.ts            ← SecureStore token management
│   └── revenuecat.tsx     ← RevenueCat context provider
├── context/
│   └── AuthContext.tsx    ← Auth state context
├── hooks/
│   ├── useAuth.ts         ← Auth state + token management
│   └── useGameState.ts    ← 1.5s polling hook for live games
├── navigation/
│   ├── AppNavigator.tsx   ← Root stack + bottom tabs
│   ├── types.ts           ← Navigation param types
│   └── linking.ts         ← Deep link config (aitriviaarena://)
└── screens/
    ├── auth/              ← LoginScreen, VerifyScreen
    ├── tabs/              ← PlayTab, LeaderboardTab, ProfileTab
    ├── game/              ← JoinScreen, WaitingScreen, LiveGameScreen,
    │                         FinalResultsScreen, SoloGameScreen
    └── PaywallScreen.tsx  ← RevenueCat paywall
```

## API Backend

All endpoints call `https://aitriviaarena.com/api`. The web app's verify
endpoint supports `?platform=mobile` to return JSON instead of redirecting.
Bearer tokens are sent via `Authorization: Bearer <token>`.

## RevenueCat

- Entitlement: `ai.epicai.triviarena Pro`
- 3 offerings: Monthly, Yearly (Most Popular), Lifetime
- FREE categories: General Knowledge, Pop Culture, Food & Drink
- PRO gates: remaining 8 categories + unlimited games + themes

## Deep Links

Scheme: `aitriviaarena://`
- `aitriviaarena://auth?sessionToken=xxx` → VerifyScreen (magic link callback)

## Auth Flow (Mobile)

1. User enters email → POST /api/auth/magic-link (with `platform: 'mobile'`)
2. Email arrives with link `aitriviaarena.com/api/auth/verify?token=xxx&platform=mobile`
3. Web redirects to `aitriviaarena://auth?sessionToken=SESSION_TOKEN`
4. VerifyScreen stores token in SecureStore → navigates to MainTabs

## EAS Build

```bash
# Install EAS CLI
npm install -g eas-cli

# Login and configure
eas login
eas build:configure

# Development build (TestFlight)
eas build --platform ios --profile development

# Production build
eas build --platform ios --profile production
eas submit --platform ios
```

## Status

- Phase 1: All screens built — Auth, Play, Leaderboard, Profile, Join, Waiting, LiveGame, FinalResults, SoloGame, Paywall
- Phase 2: Push notifications (APNs key: J9T9HT75WC, Team: MPH83385EQ)
- Phase 3: Offline caching, widget, Apple Watch
