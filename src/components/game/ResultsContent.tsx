'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, RotateCcw, Home, Share2, Medal, Target, Dumbbell, Flame, Sparkles, Star } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function GradeIcon({ accuracy }: { accuracy: number }) {
  if (accuracy === 100) return <Trophy className="w-14 h-14 text-yellow-400" />
  if (accuracy >= 90) return <Medal className="w-14 h-14 text-yellow-400" />
  if (accuracy >= 80) return <Medal className="w-14 h-14 text-slate-400" />
  if (accuracy >= 70) return <Medal className="w-14 h-14 text-amber-700" />
  if (accuracy >= 60) return <Target className="w-14 h-14 text-blue-400" />
  return <Dumbbell className="w-14 h-14 text-purple-400" />
}

export function ResultsContent() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') ?? '0')
  const correct = parseInt(searchParams.get('correct') ?? '0')
  const total = parseInt(searchParams.get('total') ?? '10')
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
  const [copied, setCopied] = useState(false)

  const getGrade = () => {
    if (accuracy === 100) return { grade: 'A+', label: 'Perfect Score!', color: 'text-yellow-400' }
    if (accuracy >= 90) return { grade: 'A+', label: 'Trivia Master!', color: 'text-yellow-400' }
    if (accuracy >= 80) return { grade: 'A', label: 'Excellent!', color: 'text-green-400' }
    if (accuracy >= 70) return { grade: 'B', label: 'Great Job!', color: 'text-blue-400' }
    if (accuracy >= 60) return { grade: 'C', label: 'Good Effort!', color: 'text-purple-400' }
    return { grade: 'D', label: 'Keep Practicing!', color: 'text-muted-foreground' }
  }

  const { grade, label, color } = getGrade()

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
    <div className="max-w-md mx-auto px-4 py-12">
      {/* Grade icon */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-2">
          <GradeIcon accuracy={accuracy} />
        </div>
        <div className={`text-7xl font-black mb-2 font-mono ${color}`}>{grade}</div>
        <h1 className="text-2xl font-bold">{label}</h1>
        {accuracy === 100 && (
          <div className="mt-3 text-yellow-400 text-sm font-medium animate-pulse flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4" /> You got every single question right!
          </div>
        )}
      </div>

      {/* Score card */}
      <Card className="p-8 mb-6">
        <div className="flex justify-around mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-blue-400">{score.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Points</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-green-400">
              {correct}/{total}
            </div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Correct</div>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-purple-400">{accuracy}%</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Accuracy</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
            style={{ width: `${accuracy}%` }}
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">{accuracy}% accuracy</p>

        {accuracy >= 80 && (
          <div className="mt-4 text-center">
            <Badge className="bg-yellow-950 text-yellow-400 border-yellow-800 text-sm px-4 py-1.5">
              {accuracy === 100
                ? <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> Perfect Score!</span>
                : <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Top Performance!</span>}
            </Badge>
          </div>
        )}
      </Card>

      {/* Action buttons */}
      <div className="flex flex-col gap-3">
        <Button onClick={handleShare} variant="outline" className="w-full h-12">
          <Share2 className="w-4 h-4 mr-2" />
          {copied ? 'Copied to clipboard!' : 'Share Score'}
        </Button>
        <Link href="/play">
          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold">
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button variant="outline" className="w-full h-12">
            <Trophy className="w-4 h-4 mr-2" />
            View Leaderboard
          </Button>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="w-full h-12">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
