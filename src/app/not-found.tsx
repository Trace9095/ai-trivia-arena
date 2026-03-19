'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0f0f23] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <p
          className="text-8xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          aria-label="Error 404"
        >
          404
        </p>

        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>

        <p className="text-zinc-400 text-base">
          This page scored zero points. Looks like even our AI couldn&apos;t generate an answer for this one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Go Home
          </Link>
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] px-6 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white font-semibold transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
