'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CheckoutButtonProps {
  priceId: string
  plan: string
  label: string
  variant?: 'default' | 'primary'
}

export function CheckoutButton({
  priceId,
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
        body: JSON.stringify({ priceId, plan }),
      })

      if (res.status === 401) {
        // Not logged in — redirect to join then back to pricing
        router.push('/join?next=/pricing')
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
    'w-full inline-flex items-center justify-center rounded-md text-sm font-medium min-h-[44px] px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClass =
    variant === 'primary'
      ? 'bg-violet-600 hover:bg-violet-500 text-white'
      : 'border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-100'

  return (
    <div className="w-full space-y-1">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`${baseClass} ${variantClass}`}
      >
        {loading ? 'Redirecting…' : label}
      </button>
      {error && <p className="text-xs text-red-400 text-center">{error}</p>}
    </div>
  )
}
