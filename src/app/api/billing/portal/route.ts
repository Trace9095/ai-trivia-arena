import { NextResponse } from 'next/server'
import { requireAuth } from '@/lib/auth'
import { getStripe } from '@/lib/stripe'
import { getDb } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function POST() {
  let session: { userId: string; email: string }
  try {
    session = await requireAuth()
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const db = getDb()
    const [user] = await db
      .select({ stripeCustomerId: users.stripeCustomerId })
      .from(users)
      .where(eq(users.id, session.userId))
      .limit(1)

    if (!user?.stripeCustomerId) {
      return NextResponse.json({ error: 'No billing account found' }, { status: 404 })
    }

    const stripe = getStripe()
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/dashboard`,
    })

    return NextResponse.json({ url: portalSession.url })
  } catch (err) {
    console.error('[api/billing/portal] Stripe error', { error: String(err) })
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 })
  }
}
