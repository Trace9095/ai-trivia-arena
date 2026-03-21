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
export const PLANS = {
  bar: {
    name: 'Bar License',
    price: 49,
    interval: 'month' as const,
    mode: 'subscription' as const,
    description: 'Perfect for bars running weekly trivia nights',
    badge: null as null,
    features: [
      'Unlimited TV mode sessions',
      '/rttv Rooftop Social kiosk display',
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
        name: 'AI Trivia Arena — Bar License',
        description: 'Monthly venue license for bars and restaurants',
      },
    },
  },
  venue: {
    name: 'Venue Pack',
    price: 149,
    interval: 'month' as const,
    mode: 'subscription' as const,
    description: 'For larger venues, chains, and event companies',
    badge: 'Most Popular' as const,
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
        name: 'AI Trivia Arena — Venue Pack',
        description: 'Multi-location venue pack for event operators',
      },
    },
  },
  annual: {
    name: 'Annual',
    price: 399,
    interval: 'year' as const,
    mode: 'subscription' as const,
    description: '2 months free vs Venue Pack monthly',
    badge: 'Best Value' as const,
    features: [
      'Everything in Venue Pack',
      'Unlimited screens / locations',
      '32% savings vs monthly Venue Pack',
      'White-label option',
      'API access',
      'Dedicated account manager',
    ],
    priceData: {
      currency: 'usd',
      unit_amount: 39900,
      recurring: { interval: 'year' as const },
      product_data: {
        name: 'AI Trivia Arena — Annual License',
        description: 'Annual venue license — best value',
      },
    },
  },
} as const

export type PlanKey = keyof typeof PLANS
