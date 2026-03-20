import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Game Results',
  description: 'See how you scored in your last AI Trivia Arena game.',
}
import { ResultsContent } from '@/components/game/ResultsContent'
import { Loader2 } from 'lucide-react'

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  )
}
