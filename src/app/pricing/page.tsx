import { CheckoutButton } from './checkout-button'
import { PLANS } from '@/lib/stripe'
import { IOS_PRICES } from '@/lib/pricing'
import { Check } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SaveBanner } from '@/components/SaveBanner'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — AI Trivia Arena',
  description: 'Upgrade to Pro for multiplayer, tournaments, and more.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Pick Your Plan
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Start free forever. Upgrade to unlock multiplayer, tournaments, and custom categories.
          </p>
        </div>

        {/* iOS savings banner — only visible on iOS devices */}
        <SaveBanner />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {/* Free */}
          <PlanCard
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
            name={PLANS.proYearly.name}
            price="$29.99"
            priceSub="per year"
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
        <p className="text-center text-zinc-500 text-sm mt-10">
          Secure payments via Stripe. Cancel anytime from your account dashboard.
        </p>
      </div>
    </main>
  )
}

// ── Plan card ──────────────────────────────────────────────────────────────

interface PlanCardProps {
  name: string
  price: string
  priceSub: string
  iosPrice?: string
  features: readonly string[]
  highlight: boolean
  badge: string | null
  cta: React.ReactNode
}

function PlanCard({ name, price, priceSub, iosPrice, features, highlight, badge, cta }: PlanCardProps) {
  return (
    <Card
      className={
        highlight
          ? 'relative bg-zinc-900 border-violet-500 ring-2 ring-violet-500/60 flex flex-col'
          : 'relative bg-zinc-900 border-zinc-800 flex flex-col'
      }
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-zinc-100">{name}</CardTitle>
        <div className="mt-1">
          <span className="text-3xl font-bold text-zinc-100">{price}</span>
        </div>
        {iosPrice && (
          <p className="text-xs text-zinc-500 mt-1">
            iOS App Store: <span className="line-through">{iosPrice}</span>
          </p>
        )}
        <CardDescription className="text-zinc-500 text-sm">{priceSub}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
              <Check className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>{cta}</CardFooter>
    </Card>
  )
}

// ── Free tier CTA (no Stripe needed) ──────────────────────────────────────

function FreeCta() {
  return (
    <Link
      href="/join"
      className="w-full inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-sm font-medium min-h-[44px] px-4 transition-colors"
    >
      Get Started Free
    </Link>
  )
}
