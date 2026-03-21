import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { getStripe, PLANS, type PlanKey } from '@/lib/stripe'

export async function POST(request: Request) {
  let session: { userId: string; email: string }
  try {
    session = await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let planKey: PlanKey
  try {
    const body = await request.json() as { plan: string }
    planKey = body.plan as PlanKey
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!planKey || !(planKey in PLANS)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const plan = PLANS[planKey]
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://aitriviaarena.com'

  try {
    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: plan.mode,
      payment_method_types: ['card'],
      line_items: [{
        price_data: plan.priceData,
        quantity: 1,
      }],
      success_url: `${appUrl}/profile?billing=success&plan=${planKey}`,
      cancel_url: `${appUrl}/pricing`,
      customer_email: session.email,
      metadata: {
        userId: session.userId,
        source: 'ai-trivia-arena',
        plan: planKey,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error('[api/billing/checkout] Stripe error', { error: String(err) })
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
