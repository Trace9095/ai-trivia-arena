import { CheckoutButton } from './checkout-button'
import { PLANS } from '@/lib/stripe'
import { IOS_PRICES } from '@/lib/pricing'
import { Check, Zap, Crown, Star, Infinity } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SaveBanner } from '@/components/SaveBanner'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Pricing — AI Trivia Arena',
  description: 'Upgrade to Pro for multiplayer, tournaments, and more.',
}

// Per-plan config for icons and accent colours
const PLAN_META = {
  free:       { Icon: Zap,      accent: 'text-zinc-400',   ring: '',                          iconBg: 'bg-zinc-800 border-zinc-700' },
  proMonthly: { Icon: Star,     accent: 'text-blue-400',   ring: '',                          iconBg: 'bg-blue-950 border-blue-800' },
  proYearly:  { Icon: Crown,    accent: 'text-amber-300',  ring: 'ring-2 ring-amber-500/50',  iconBg: 'bg-amber-950 border-amber-700' },
  lifetime:   { Icon: Infinity, accent: 'text-amber-400',  ring: '',                          iconBg: 'bg-amber-950 border-amber-800' },
} as const

export default function PricingPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-amber-400 via-blue-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
            Pick Your Plan
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Start free forever. Upgrade to unlock multiplayer, tournaments, and custom categories.
          </p>
        </div>

        {/* iOS savings banner */}
        <SaveBanner />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">

          {/* Free */}
          <PlanCard
            planKey="free"
            name={PLANS.free.name}
            price="$0"
            priceSub="forever free"
            features={PLANS.free.features}
            highlight={false}
            badge={null}
            cta={<FreeCta />}
          />

          {/* Pro Monthly */}
          <PlanCard
            planKey="proMonthly"
            name={PLANS.proMonthly.name}
            price="$4.99"
            priceSub="per month"
            iosPrice={`$${IOS_PRICES.proMonthly}/mo`}
            features={PLANS.proMonthly.features}
            highlight={false}
            badge={null}
            cta={
              <CheckoutButton
                priceId={PLANS.proMonthly.priceId}
                plan="proMonthly"
                label="Subscribe Monthly"
              />
            }
          />

          {/* Pro Yearly — highlighted */}
          <PlanCard
            planKey="proYearly"
            name={PLANS.proYearly.name}
            price="$29.99"
            priceSub="per year · save 50%"
            iosPrice={`$${IOS_PRICES.proYearly}/yr`}
            features={PLANS.proYearly.features}
            highlight={true}
            badge="Best Value"
            cta={
              <CheckoutButton
                priceId={PLANS.proYearly.priceId}
                plan="proYearly"
                label="Subscribe Yearly"
                variant="primary"
              />
            }
          />

          {/* Lifetime */}
          <PlanCard
            planKey="lifetime"
            name={PLANS.lifetime.name}
            price="$49.99"
            priceSub="one-time payment"
            iosPrice={`$${IOS_PRICES.lifetime}`}
            features={PLANS.lifetime.features}
            highlight={false}
            badge={null}
            cta={
              <CheckoutButton
                priceId={PLANS.lifetime.priceId}
                plan="lifetime"
                label="Get Lifetime Access"
              />
            }
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-zinc-600 text-sm mt-10">
          Secure payments via Stripe. Cancel anytime from your account dashboard.
        </p>
      </div>
    </main>
  )
}

// ── Plan card ─────────────────────────────────────────────────────────────────

interface PlanCardProps {
  planKey: keyof typeof PLAN_META
  name: string
  price: string
  priceSub: string
  iosPrice?: string
  features: readonly string[]
  highlight: boolean
  badge: string | null
  cta: React.ReactNode
}

function PlanCard({
  planKey,
  name,
  price,
  priceSub,
  iosPrice,
  features,
  highlight,
  badge,
  cta,
}: PlanCardProps) {
  const meta = PLAN_META[planKey]

  return (
    <Card
      className={cn(
        'relative flex flex-col border bg-card transition-all',
        highlight
          ? cn('border-amber-500/50 shadow-xl shadow-amber-500/10', meta.ring)
          : 'border-white/8 hover:border-white/14 hover:shadow-lg hover:shadow-black/20',
      )}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-amber-500 text-zinc-900 text-xs font-bold px-3.5 py-1 rounded-full shadow-lg shadow-amber-500/30">
            {badge}
          </span>
        </div>
      )}

      <CardHeader className="pb-3 pt-7">
        {/* Plan icon */}
        <div className={cn('w-9 h-9 rounded-xl border flex items-center justify-center mb-4', meta.iconBg)}>
          <meta.Icon className={cn('w-4.5 h-4.5', meta.accent)} />
        </div>

        <CardTitle className={cn('text-base font-bold', meta.accent)}>{name}</CardTitle>

        <div className="mt-1">
          <span className="text-4xl font-extrabold text-white tabular-nums">{price}</span>
        </div>
        <p className="text-xs text-zinc-500 mt-0.5">{priceSub}</p>

        {iosPrice && (
          <p className="text-xs text-zinc-600 mt-1">
            iOS price: <span className="line-through">{iosPrice}</span>
            <span className="text-zinc-500 ml-1">(web is cheaper)</span>
          </p>
        )}
      </CardHeader>

      <CardContent className="flex-1 pt-2">
        <ul className="space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-4">{cta}</CardFooter>
    </Card>
  )
}

// ── Free tier CTA ─────────────────────────────────────────────────────────────

function FreeCta() {
  return (
    <Link
      href="/join"
      className="w-full inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/4 hover:bg-white/8 hover:border-white/18 text-zinc-300 hover:text-white text-sm font-semibold min-h-[44px] px-4 transition-all"
    >
      Get Started Free
    </Link>
  )
}
