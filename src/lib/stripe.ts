import Stripe from 'stripe'

// ── Server-side singleton ──────────────────────────────────────────────────
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-02-25.clover',
    })
  }
  return _stripe
}

// ── Pricing plans ─────────────────────────────────────────────────────────
export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    interval: null as null,
    priceId: null as null,
    features: [
      'Unlimited solo play',
      'Daily challenges',
      'Global leaderboard',
      'All standard categories',
    ],
  },
  proMonthly: {
    name: 'Pro Monthly',
    price: 4.99,
    interval: 'month' as const,
    priceId: process.env.STRIPE_PRICE_ID_PRO_MONTHLY!,
    features: [
      'Everything in Free',
      'Multiplayer & tournaments',
      'No ads',
      'Custom categories',
      'Priority question generation',
    ],
  },
  proYearly: {
    name: 'Pro Yearly',
    price: 29.99,
    interval: 'year' as const,
    priceId: process.env.STRIPE_PRICE_ID_PRO_YEARLY!,
    features: [
      'Everything in Free',
      'Multiplayer & tournaments',
      'No ads',
      'Custom categories',
      'Priority question generation',
      '~50% savings vs monthly',
    ],
  },
  lifetime: {
    name: 'Lifetime',
    price: 49.99,
    interval: null as null,
    priceId: process.env.STRIPE_PRICE_ID_LIFETIME!,
    features: [
      'Everything in Pro, forever',
      'All future features included',
      'No recurring charges',
      'Priority support',
    ],
  },
} as const

export type PlanKey = keyof typeof PLANS
