'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, RotateCcw, Home } from 'lucide-react'
import Link from 'next/link'

export function ResultsContent() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') ?? '0')
  const correct = parseInt(searchParams.get('correct') ?? '0')
  const total = parseInt(searchParams.get('total') ?? '10')
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

  const getGrade = () => {
    if (accuracy >= 90) return { grade: 'A+', label: 'Trivia Master!', color: 'text-yellow-400' }
    if (accuracy >= 80) return { grade: 'A', label: 'Excellent!', color: 'text-green-400' }
    if (accuracy >= 70) return { grade: 'B', label: 'Great job!', color: 'text-blue-400' }
    if (accuracy >= 60) return { grade: 'C', label: 'Good effort!', color: 'text-purple-400' }
    return { grade: 'D', label: 'Keep practicing!', color: 'text-muted-foreground' }
  }

  const { grade, label, color } = getGrade()

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className={`text-6xl font-black mb-2 font-mono ${color}`}>{grade}</div>
        <h1 className="text-3xl font-bold">{label}</h1>
      </div>

      <Card className="p-8 mb-6 text-center">
        <div className="flex justify-around mb-6">
          <div>
            <div className="text-4xl font-bold font-mono text-blue-400">{score.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mt-1">Points</div>
          </div>
          <div className="w-px bg-border" />
          <div>
            <div className="text-4xl font-bold font-mono text-green-400">
              {correct}/{total}
            </div>
            <div className="text-sm text-muted-foreground mt-1">Correct</div>
          </div>
          <div className="w-px bg-border" />
          <div>
            <div className="text-4xl font-bold font-mono text-purple-400">{accuracy}%</div>
            <div className="text-sm text-muted-foreground mt-1">Accuracy</div>
          </div>
        </div>

        {accuracy === 100 && (
          <Badge className="bg-yellow-950 text-yellow-400 border-yellow-800 text-sm px-4 py-2">
            🔥 Perfect Score!
          </Badge>
        )}
      </Card>

      <div className="flex flex-col gap-3">
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
