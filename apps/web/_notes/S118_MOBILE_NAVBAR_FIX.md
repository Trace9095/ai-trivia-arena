# S118 — Mobile Navbar Dynamic Viewport Fix

**Date:** 2026-03-19
**Session:** S118

## Files Changed
| File | Change |
|------|--------|
| `src/app/globals.css` | Added dvh override block |
| `src/app/layout.tsx` | Added `Viewport` export with `viewportFit: 'cover'` |
| `src/app/admin/(dashboard)/layout.tsx` | `calc(100vh - 4rem)` → `calc(100dvh - 4rem)` |

## What Was Already Correct
- `src/components/NavBar.tsx` — already `fixed top-0 left-0 right-0 z-50` ✅
- `NavWrapper.tsx` — already has `pt-16` on `<main>` ✅

## How to Verify
On mobile, scroll on any trivia page — navbar should stay pinned. Admin dashboard should not have overflow issues.
