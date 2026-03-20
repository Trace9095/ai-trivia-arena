# Scroll & Interaction Fixes — S118
**Date:** 2026-03-19 | **App:** AI-Trivia-Arena

---

## Issues Fixed

### Pricing Button Touch Targets
**Files:** `src/app/pricing/checkout-button.tsx`, `src/app/pricing/page.tsx`
- `CheckoutButton`: `h-10` (40px) → `min-h-[44px]`
- `FreeCta` Link: `h-10` → `min-h-[44px]`

### Mobile Viewport Height (dvh)
**File:** `src/app/globals.css`
- Auto-applied `@supports (height: 100dvh)` block overriding `.h-screen` and `.min-h-screen`

---

## Issues NOT Fixed (Intentional)
- **TV page `h-screen`/`w-screen`**: Intentionally left as-is — TV display at `/tv` is designed for desktop/TV screens, not mobile. dvh override not needed.
- **TV auto-start bug**: `/tv` requires manual tap to start game — blocks Display Cast. Needs investigation (game state logic, not scroll/UI issue).
