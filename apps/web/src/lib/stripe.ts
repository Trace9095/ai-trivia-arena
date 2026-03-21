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

// ── Pricing plans (inline price_data — no Stripe Dashboard products needed) ─
// CEO-approved pricing: Bar License $49/mo, Venue Pack $149/mo, Annual $399/yr
export const PLANS = {
  bar_license: {
    name: 'Bar License',
    price: 49,
    interval: 'month' as const,
    mode: 'subscription' as const,
    description: 'Standard bar/restaurant trivia license',
    badge: null as null,
    features: [
      'Unlimited TV mode sessions',
      'Phone join for bar guests — no app required',
      'Real-time leaderboard after every question',
      'All 11 categories including Colorado & Local',
      'Cancel anytime',
    ],
    priceData: {
      currency: 'usd',
      unit_amount: 4900,
      recurring: { interval: 'month' as const },
      product_data: {
        name: 'AI Trivia Arena Bar License',
        description: 'Standard bar/restaurant trivia license',
      },
    },
  },
  venue_pack: {
    name: 'Venue Pack',
    price: 149,
    interval: 'month' as const,
    mode: 'subscription' as const,
    description: 'Multi-room, custom branding, analytics',
    badge: 'Best Value' as const,
    features: [
      'Everything in Bar License',
      'Up to 5 screens / locations',
      'Custom branding on TV mode',
      'Advanced analytics dashboard',
      'Priority question generation',
      'Dedicated support',
    ],
    priceData: {
      currency: 'usd',
      unit_amount: 14900,
      recurring: { interval: 'month' as const },
      product_data: {
        name: 'AI Trivia Arena Venue Pack',
        description: 'Multi-room, custom branding, analytics',
      },
    },
  },
  annual: {
    name: 'Annual',
    price: 399,
    interval: 'year' as const,
    mode: 'subscription' as const,
    description: 'Bar License features for a full year',
    badge: null as null,
    features: [
      'Everything in Bar License',
      'Unlimited screens / locations',
      'Saves $189 vs monthly Bar License',
      'Annual billing — one charge per year',
      'Cancel anytime',
    ],
    priceData: {
      currency: 'usd',
      unit_amount: 39900,
      recurring: { interval: 'year' as const },
      product_data: {
        name: 'AI Trivia Arena Annual',
        description: 'Bar License features for a full year',
      },
    },
  },
} as const

export type PlanKey = keyof typeof PLANS
