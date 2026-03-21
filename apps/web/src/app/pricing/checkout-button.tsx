'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CheckoutButtonProps {
  plan: string
  label: string
  variant?: 'default' | 'primary'
}

export function CheckoutButton({
  plan,
  label,
  variant = 'default',
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleCheckout() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/billing/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })

      if (res.status === 401) {
        router.push('/auth/login?next=/pricing')
        return
      }

      const data = await res.json() as { url?: string; error?: string }

      if (!res.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      window.location.href = data.url
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const baseClass =
    'w-full inline-flex items-center justify-center rounded-lg text-sm font-semibold min-h-[44px] px-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClass =
    variant === 'primary'
      ? 'bg-[#D4A853] hover:bg-[#E8C97A] text-[#0D1117]'
      : 'border border-[#D4A853]/40 bg-[#131920] hover:bg-[#1a2330] text-zinc-100 hover:border-[#D4A853]/70'

  return (
    <div className="w-full space-y-1">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`${baseClass} ${variantClass}`}
      >
        {loading ? 'Redirecting to Stripe…' : label}
      </button>
      {error && <p className="text-xs text-red-400 text-center mt-1">{error}</p>}
    </div>
  )
}
