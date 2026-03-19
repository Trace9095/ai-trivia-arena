import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('[api/billing/webhook] Signature verification failed', { error: String(err) })
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const db = getDb()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.userId
        const customerId = typeof session.customer === 'string' ? session.customer : null

        if (!userId) {
          console.error('[api/billing/webhook] checkout.session.completed: no userId in metadata')
          break
        }

        // For lifetime (mode: payment) or new subscription (mode: subscription)
        const isPro = true
        // Subscriptions expire when Stripe tells us; lifetime never expires
        const proExpiresAt = session.mode === 'payment' ? null : undefined

        await db
          .update(users)
          .set({
            isPro,
            ...(customerId ? { stripeCustomerId: customerId } : {}),
            ...(proExpiresAt !== undefined ? { proExpiresAt } : {}),
          })
          .where(eq(users.id, userId))

        console.log('[api/billing/webhook] checkout.session.completed: user upgraded', { userId, plan: session.metadata?.plan })
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = typeof subscription.customer === 'string' ? subscription.customer : null
        if (!customerId) break

        const isActive = subscription.status === 'active' || subscription.status === 'trialing'
        // current_period_end is a Unix timestamp (seconds)
        const periodEnd = new Date((subscription as unknown as { current_period_end: number }).current_period_end * 1000)

        await db
          .update(users)
          .set({ isPro: isActive, proExpiresAt: isActive ? periodEnd : null })
          .where(eq(users.stripeCustomerId, customerId))

        console.log('[api/billing/webhook] customer.subscription.updated', { customerId, status: subscription.status })
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = typeof subscription.customer === 'string' ? subscription.customer : null
        if (!customerId) break

        await db
          .update(users)
          .set({ isPro: false, proExpiresAt: null })
          .where(eq(users.stripeCustomerId, customerId))

        console.log('[api/billing/webhook] customer.subscription.deleted', { customerId })
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customerId = typeof invoice.customer === 'string' ? invoice.customer : null
        if (!customerId) break

        // Don't immediately revoke — Stripe retries. Just log for now.
        console.warn('[api/billing/webhook] invoice.payment_failed', { customerId })
        break
      }

      default:
        // Unhandled event type — safe to ignore
        break
    }
  } catch (err) {
    console.error('[api/billing/webhook] Handler error', { event: event.type, error: String(err) })
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
