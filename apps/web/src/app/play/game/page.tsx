'use client'

import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { QuestionCard } from '@/components/game/QuestionCard'
import { Button } from '@/components/ui/button'
import { Loader2, Brain } from 'lucide-react'

interface GameQuestion {
  id: string
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string | null
  category: string
  difficulty: string
}

interface GameData {
  gameId: string
  questions: GameQuestion[]
}

function GameContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const category = searchParams.get('category') ?? 'general'
  const difficulty = searchParams.get('difficulty') ?? 'medium'

  const [gameData, setGameData] = useState<GameData | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<Array<{ isCorrect: boolean; pointsEarned: number }>>([])

  useEffect(() => {
    const createGame = async () => {
      try {
        const res = await fetch('/api/games', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category, difficulty, maxPlayers: 1 }),
        })
        if (!res.ok) {
          const data = (await res.json()) as { error?: string }
          throw new Error(data.error ?? 'Failed to create game')
        }
        const data = (await res.json()) as { game: { id: string } }

        // Fetch game with questions
        const gameRes = await fetch(`/api/games/${data.game.id}`)
        const gameData = (await gameRes.json()) as { game: { id: string }; questions: GameQuestion[] }
        setGameData({ gameId: gameData.game.id, questions: gameData.questions })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to start game')
      } finally {
        setIsLoading(false)
      }
    }
    createGame()
  }, [category, difficulty])

  const handleAnswer = useCallback(
    async (selectedAnswer: string, timeMs: number) => {
      if (!gameData) return { isCorrect: false, explanation: null }
      const question = gameData.questions[currentQuestion]

      const res = await fetch(`/api/games/${gameData.gameId}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: question.id, selectedAnswer, timeMs }),
      })
      const data = (await res.json()) as {
        isCorrect: boolean
        explanation: string | null
        pointsEarned: number
      }
      setScore((s) => s + (data.pointsEarned ?? 0))
      setResults((r) => [...r, { isCorrect: data.isCorrect, pointsEarned: data.pointsEarned ?? 0 }])
      return { isCorrect: data.isCorrect, explanation: data.explanation }
    },
    [gameData, currentQuestion]
  )

  const handleNext = useCallback(() => {
    if (!gameData) return
    if (currentQuestion >= gameData.questions.length - 1) {
      const correct = results.filter((r) => r.isCorrect).length
      router.push(
        `/play/results?score=${score}&correct=${correct}&total=${gameData.questions.length}`
      )
    } else {
      setCurrentQuestion((q) => q + 1)
    }
  }, [gameData, currentQuestion, score, results, router])

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-4">
        <div className="p-5 rounded-2xl bg-amber-950/50 border border-amber-700/40 shadow-xl shadow-amber-500/10">
          <Brain className="w-12 h-12 text-amber-400 animate-pulse" />
        </div>
        <div className="text-center space-y-1.5">
          <p className="text-white font-semibold text-lg">Generating your questions...</p>
          <p className="text-zinc-500 text-sm">Claude AI is crafting unique trivia just for you</p>
        </div>
        <Loader2 className="w-6 h-6 animate-spin text-amber-400" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
        <p className="text-red-400 font-semibold">{error}</p>
        <Button onClick={() => router.back()} className="min-h-[52px] px-8">Go Back</Button>
      </div>
    )
  }

  if (!gameData) return null

  const question = gameData.questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <QuestionCard
        key={question.id}
        question={question}
        questionNumber={currentQuestion + 1}
        totalQuestions={gameData.questions.length}
        score={score}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  )
}

export default function GamePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
        </div>
      }
    >
      <GameContent />
    </Suspense>
  )
}
