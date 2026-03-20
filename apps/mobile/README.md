# AI Trivia Arena — Mobile App

> React Native companion app for AI Trivia Arena. Play trivia, compete on leaderboards, and challenge friends — all powered by Claude AI.

![Expo](https://img.shields.io/badge/Expo_SDK-55-000020?logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-0.83-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-D4A853)
![License](https://img.shields.io/badge/license-Private-red)

## Overview

Native iOS and Android companion app for [AI Trivia Arena](https://ai-trivia-arena.epicai.ai). Connects to the same backend API as the web app. Features trivia gameplay, category selection, daily challenges, leaderboard, and player profiles — all in a native mobile experience.

Part of the [Epic AI](https://epicai.ai) Wave 6 portfolio.

## Tech Stack

| Layer | Technology |
|:------|:-----------|
| Framework | Expo SDK 55 (React Native 0.83) |
| Router | Expo Router |
| Language | TypeScript |
| Navigation | React Navigation (bottom tabs + native stack) |
| Data Fetching | TanStack Query v5 + Axios |
| Camera | Expo Camera (QR code scanning) |
| IAP | RevenueCat |
| Haptics | Expo Haptics |

## Getting Started

```bash
npm install
npx expo start --dev-client   # Requires EAS dev build
```

## Build

```bash
EAS_NO_VCS=1 eas build --platform ios --profile production
EAS_NO_VCS=1 eas build --platform android --profile production
```

## Backend

This app shares the backend API with the web app at [ai-trivia-arena.epicai.ai](https://ai-trivia-arena.epicai.ai). See the [web app README](../ai-trivia-arena/README.md) for backend setup.

## Version

**Version:** 1.0.0 (2026) — Wave 6

## License

Proprietary. Copyright © 2026 Epic AI.
