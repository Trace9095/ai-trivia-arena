import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { getStripe } from '@/lib/stripe'

export async function POST(request: Request) {
  let session: { userId: string; email: string }
  try {
    session = await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let priceId: string
  let plan: string
  try {
    const body = await request.json() as { priceId: string; plan: string }
    priceId = body.priceId
    plan = body.plan
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!priceId || !plan) {
    return NextResponse.json({ error: 'Missing priceId or plan' }, { status: 400 })
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? ''
  const isLifetime = plan === 'lifetime'

  try {
    const stripe = getStripe()
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: isLifetime ? 'payment' : 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/profile?billing=success`,
      cancel_url: `${appUrl}/pricing`,
      customer_email: session.email,
      metadata: {
        userId: session.userId,
        plan,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    console.error('[api/billing/checkout] Stripe error', { error: String(err) })
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
