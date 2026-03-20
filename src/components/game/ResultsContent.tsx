'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Trophy, RotateCcw, Home, Share2, Medal, Target, Dumbbell,
  Flame, Sparkles, Star, CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface GradeConfig {
  grade: string
  label: string
  color: string
  badgeBg: string
  barColor: string
}

function getGrade(accuracy: number): GradeConfig {
  if (accuracy === 100) return { grade: 'A+', label: 'Perfect Score!',    color: 'text-yellow-400', badgeBg: 'bg-yellow-950/60 text-yellow-400 border-yellow-700/50', barColor: 'from-yellow-500 to-amber-400' }
  if (accuracy >= 90)  return { grade: 'A+', label: 'Trivia Master!',    color: 'text-yellow-400', badgeBg: 'bg-yellow-950/60 text-yellow-400 border-yellow-700/50', barColor: 'from-yellow-500 to-green-400' }
  if (accuracy >= 80)  return { grade: 'A',  label: 'Excellent!',        color: 'text-green-400',  badgeBg: 'bg-green-950/60 text-green-400 border-green-700/50',   barColor: 'from-green-500 to-teal-400' }
  if (accuracy >= 70)  return { grade: 'B',  label: 'Great Job!',        color: 'text-blue-400',   badgeBg: 'bg-blue-950/60 text-blue-400 border-blue-700/50',     barColor: 'from-blue-500 to-violet-500' }
  if (accuracy >= 60)  return { grade: 'C',  label: 'Good Effort!',      color: 'text-violet-400', badgeBg: 'bg-violet-950/60 text-violet-400 border-violet-700/50',barColor: 'from-violet-500 to-purple-500' }
  return               { grade: 'D',  label: 'Keep Practicing!', color: 'text-zinc-400',   badgeBg: 'bg-zinc-800 text-zinc-400 border-zinc-700',              barColor: 'from-zinc-600 to-zinc-500' }
}

function GradeIcon({ accuracy }: { accuracy: number }) {
  const cls = 'w-14 h-14'
  if (accuracy === 100) return <Trophy className={cn(cls, 'text-yellow-400')} />
  if (accuracy >= 90)   return <Medal  className={cn(cls, 'text-yellow-400')} />
  if (accuracy >= 80)   return <Medal  className={cn(cls, 'text-zinc-300')} />
  if (accuracy >= 70)   return <Medal  className={cn(cls, 'text-amber-600')} />
  if (accuracy >= 60)   return <Target className={cn(cls, 'text-blue-400')} />
  return                       <Dumbbell className={cn(cls, 'text-violet-400')} />
}

export function ResultsContent() {
  const searchParams = useSearchParams()
  const score    = parseInt(searchParams.get('score')   ?? '0')
  const correct  = parseInt(searchParams.get('correct') ?? '0')
  const total    = parseInt(searchParams.get('total')   ?? '10')
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const [copied, setCopied] = useState(false)

  const { grade, label, color, badgeBg, barColor } = getGrade(accuracy)

  const handleShare = async () => {
    const text = `I scored ${score.toLocaleString()} pts (${accuracy}% accuracy) on AI Trivia Arena! aitriviaarena.com`
    try {
      if (navigator.share) {
        await navigator.share({ text })
      } else {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // ignore
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12 animate-fade-in-up">

      {/* Grade display */}
      <div className="text-center mb-8">
        <div className="inline-flex flex-col items-center gap-3 mb-2">
          <div className={cn('w-20 h-20 rounded-2xl border flex items-center justify-center', accuracy >= 80 ? 'bg-yellow-950/30 border-yellow-700/30' : 'bg-card border-white/8')}>
            <GradeIcon accuracy={accuracy} />
          </div>
          <div className={cn('text-7xl font-black font-mono leading-none', color)}>
            {grade}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">{label}</h1>
        {accuracy === 100 && (
          <div className="mt-3 text-yellow-400 text-sm font-medium flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            You got every single question right!
          </div>
        )}
      </div>

      {/* Score card */}
      <Card className="p-7 mb-5 border-white/8 bg-card">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-blue-400 tabular-nums">
              {score.toLocaleString()}
            </div>
            <div className="text-xs text-zinc-600 mt-1 uppercase tracking-wide font-medium">Points</div>
          </div>
          <div className="text-center border-x border-white/6">
            <div className="text-3xl font-bold font-mono text-green-400">
              {correct}/{total}
            </div>
            <div className="text-xs text-zinc-600 mt-1 uppercase tracking-wide font-medium">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-mono text-violet-400 tabular-nums">
              {accuracy}%
            </div>
            <div className="text-xs text-zinc-600 mt-1 uppercase tracking-wide font-medium">Accuracy</div>
          </div>
        </div>

        {/* Accuracy bar */}
        <div className="h-2 bg-white/6 rounded-full overflow-hidden">
          <div
            className={cn('h-full rounded-full bg-gradient-to-r transition-all duration-1000', barColor)}
            style={{ width: `${accuracy}%` }}
          />
        </div>

        {/* Performance badge */}
        {accuracy >= 80 && (
          <div className="mt-4 flex justify-center">
            <Badge className={cn('text-sm px-4 py-1.5 border', badgeBg)}>
              {accuracy === 100 ? (
                <span className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> Perfect Score!
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  {accuracy >= 90 ? 'Trivia Master' : 'Top Performance'}
                </span>
              )}
            </Badge>
          </div>
        )}

        {accuracy < 80 && accuracy >= 50 && (
          <p className="text-center text-xs text-zinc-600 mt-3">
            {correct} out of {total} correct — {total - correct} more and you&apos;d hit 80%!
          </p>
        )}
      </Card>

      {/* Action buttons */}
      <div className="flex flex-col gap-2.5">
        <Button
          onClick={handleShare}
          variant="outline"
          className="w-full h-12 border-white/10 text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
        >
          <Share2 className="w-4 h-4 mr-2" />
          {copied ? 'Copied to clipboard!' : 'Share Score'}
        </Button>
        <Link href="/play">
          <Button className="w-full h-12 bg-violet-600 hover:bg-violet-500 font-bold shadow-lg shadow-violet-500/20 transition-all">
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button
            variant="outline"
            className="w-full h-12 border-white/10 text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
          >
            <Star className="w-4 h-4 mr-2" />
            View Leaderboard
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="ghost"
            className="w-full h-11 text-zinc-600 hover:text-zinc-400 hover:bg-white/3 transition-all"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
