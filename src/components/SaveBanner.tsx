'use client'

import { useState, useEffect } from 'react'
import { Sparkles, X } from 'lucide-react'
import { isIOSDevice, SAVE_PERCENTAGE } from '@/lib/pricing'

export function SaveBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!isIOSDevice()) return
    const dismissed = localStorage.getItem('saveBannerDismissed')
    if (!dismissed) setShow(true)
  }, [])

  if (!show) return null

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-violet-700/60 bg-violet-950/60 px-4 py-3 text-sm mb-8">
      <div className="flex items-center gap-2 text-violet-200">
        <Sparkles className="h-4 w-4 text-violet-400 shrink-0" />
        <span>
          <span className="font-semibold text-violet-100">Save {SAVE_PERCENTAGE}%</span>
          {' '}— You&apos;re paying web price, not the iOS App Store price.
        </span>
      </div>
      <button
        onClick={() => {
          localStorage.setItem('saveBannerDismissed', '1')
          setShow(false)
        }}
        className="shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center text-violet-400 hover:text-violet-200 transition-colors -mr-2"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
