import { CheckoutButton } from './checkout-button'
import { PLANS } from '@/lib/stripe'
import { Check, Tv, Building2, CalendarDays } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Pricing — AI Trivia Arena',
  description: 'Venue licensing for bars and restaurants running AI-powered trivia nights.',
}

const PLAN_META = {
  bar_license: { Icon: Tv,           accent: '#D4A853', ring: false },
  venue_pack:  { Icon: Building2,    accent: '#D4A853', ring: true  },
  annual:      { Icon: CalendarDays, accent: '#D4A853', ring: false },
} as const

export default function PricingPage() {
  return (
    <main
      className="min-h-screen py-20 px-4"
      style={{ background: '#0D1117' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: '#D4A853' }}>
            Venue Licensing
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Trivia Night on Your Terms
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            AI-generated questions that never repeat. Drop it on any TV and let your guests play from their phones — no app download required.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {(Object.keys(PLANS) as Array<keyof typeof PLANS>).map((key) => {
            const plan = PLANS[key]
            const meta = PLAN_META[key]
            const isPrimary = meta.ring

            return (
              <div
                key={key}
                className={cn(
                  'relative flex flex-col rounded-2xl border p-8 transition-all',
                  isPrimary
                    ? 'border-[#D4A853]/60 shadow-2xl shadow-[#D4A853]/10'
                    : 'border-zinc-800 hover:border-zinc-700',
                )}
                style={{ background: isPrimary ? '#131920' : '#0f151c' }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="text-xs font-bold px-4 py-1.5 rounded-full"
                      style={{ background: '#D4A853', color: '#0D1117' }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon + name */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
                  style={{ background: '#1a2330', borderColor: '#D4A853' + '33' }}
                >
                  <meta.Icon className="w-5 h-5" style={{ color: '#D4A853' }} />
                </div>

                <p className="text-sm font-bold tracking-wide mb-1" style={{ color: '#D4A853' }}>
                  {plan.name.toUpperCase()}
                </p>
                <p className="text-zinc-500 text-sm mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-white tabular-nums">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-400 text-sm ml-2">
                    / {plan.interval === 'year' ? 'year' : 'month'}
                  </span>
                </div>

                {/* CTA */}
                <div className="mb-8">
                  <CheckoutButton
                    plan={key}
                    label={`Get ${plan.name}`}
                    variant={isPrimary ? 'primary' : 'default'}
                  />
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#D4A853' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Trust footer */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-zinc-500 text-sm">
            Secure payments via Stripe. Cancel anytime from your account dashboard.
          </p>
          <p className="text-zinc-600 text-sm">
            Want to see it in action first?{' '}
            <Link href="/rttv" className="underline underline-offset-4 hover:text-zinc-400 transition-colors" style={{ color: '#D4A853' }}>
              Open TV mode live
            </Link>
          </p>
        </div>

      </div>
    </main>
  )
}
