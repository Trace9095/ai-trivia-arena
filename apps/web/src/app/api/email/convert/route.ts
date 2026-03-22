import { NextResponse } from 'next/server'
import { render } from '@react-email/components'
import { getResend } from '@/lib/email'
import { Convert1 } from '@/lib/emails/convert-1'
import { Convert2 } from '@/lib/emails/convert-2'
import { Convert3 } from '@/lib/emails/convert-3'

const FROM = process.env['AUTH_FROM_EMAIL'] ?? 'AI Trivia Arena <noreply@aitriviaarena.com>'
const APP_URL = process.env['NEXT_PUBLIC_APP_URL'] ?? 'https://aitriviaarena.com'

const SEQUENCES = [
  {
    step: 1,
    subject: 'Everything AI Trivia Arena Pro unlocks',
    component: Convert1,
    offerCode: undefined,
  },
  {
    step: 2,
    subject: '30% off AI Trivia Arena Pro — 48 hours',
    component: Convert2,
    offerCode: 'HOST30',
  },
  {
    step: 3,
    subject: 'Last call — 30% off expires tonight',
    component: Convert3,
    offerCode: 'HOST30',
  },
]

export async function POST(request: Request) {
  try {
    const body = await request.json() as {
      to: string
      name?: string
      step?: number
      offerCode?: string
      unsubscribeUrl?: string
    }

    const { to, name = 'there', step = 1, offerCode, unsubscribeUrl } = body

    if (!to) {
      return NextResponse.json({ error: 'Missing required field: to' }, { status: 400 })
    }

    const sequence = SEQUENCES.find((s) => s.step === step)
    if (!sequence) {
      return NextResponse.json({ error: `Invalid step: ${step}. Must be 1–3.` }, { status: 400 })
    }

    const unsubUrl = unsubscribeUrl ?? `${APP_URL}/unsubscribe`
    const code = offerCode ?? sequence.offerCode
    const html = await render(
      sequence.component({ name, appUrl: APP_URL, unsubscribeUrl: unsubUrl, offerCode: code })
    )

    const resend = getResend()
    const { data, error } = await resend.emails.send({
      from: FROM,
      to,
      subject: sequence.subject,
      html,
      headers: {
        'List-Unsubscribe': `<${unsubUrl}>`,
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
    })

    if (error) {
      console.error('[api/email/convert] Resend error', error)
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ id: data?.id, step })
  } catch (err) {
    console.error('[api/email/convert] Unexpected error', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
