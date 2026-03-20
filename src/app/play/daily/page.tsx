'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { QuestionCard } from '@/components/game/QuestionCard'
import { Badge } from '@/components/ui/badge'
import { Calendar, Loader2, Brain } from 'lucide-react'

interface DailyQuestion {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

interface DailyChallenge {
  id: string
  date: string
  category: string
  questions: DailyQuestion[]
}

export default function DailyChallengePage() {
  const router = useRouter()
  const [challenge, setChallenge] = useState<DailyChallenge | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<Array<{ isCorrect: boolean; pointsEarned: number }>>([])

  useEffect(() => {
    fetch('/api/games/daily')
      .then((r) => r.json())
      .then((data: { challenge: DailyChallenge }) => {
        setChallenge(data.challenge)
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [])

  const handleAnswer = useCallback(
    async (selectedAnswer: string, timeMs: number) => {
      if (!challenge) return { isCorrect: false, explanation: null }
      const question = challenge.questions[currentQuestion]
      const isCorrect = question.correctAnswer === selectedAnswer
      const points = isCorrect ? Math.max(100, Math.floor((15000 - timeMs) / 50)) : 0
      setScore((s) => s + points)
      setResults((r) => [...r, { isCorrect, pointsEarned: points }])
      return { isCorrect, explanation: question.explanation }
    },
    [challenge, currentQuestion]
  )

  const handleNext = useCallback(() => {
    if (!challenge) return
    if (currentQuestion >= challenge.questions.length - 1) {
      const correct = results.filter((r) => r.isCorrect).length
      router.push(
        `/play/results?score=${score}&correct=${correct}&total=${challenge.questions.length}&daily=1`
      )
    } else {
      setCurrentQuestion((q) => q + 1)
    }
  }, [challenge, currentQuestion, score, results, router])

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-4">
        <div className="p-5 rounded-2xl bg-violet-950/50 border border-violet-700/40 shadow-xl shadow-violet-500/10">
          <Brain className="w-12 h-12 text-violet-400 animate-pulse" />
        </div>
        <div className="text-center space-y-1.5">
          <p className="text-white font-semibold text-lg">Loading today&apos;s challenge...</p>
          <p className="text-zinc-500 text-sm">Fresh questions powered by Claude AI</p>
        </div>
        <Loader2 className="w-6 h-6 animate-spin text-violet-400" />
      </div>
    )
  }

  if (!challenge) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        Failed to load daily challenge. Please try again.
      </div>
    )
  }

  const question = challenge.questions[currentQuestion]

  const formattedQuestion = {
    id: `daily-${currentQuestion}`,
    questionText: question.questionText,
    correctAnswer: question.correctAnswer,
    wrongAnswers: question.wrongAnswers,
    explanation: question.explanation,
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-blue-400" />
        <Badge className="bg-blue-950 text-blue-400 border-blue-800">Daily Challenge</Badge>
        <span className="text-muted-foreground text-sm ml-auto">
          {new Date(challenge.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
        </span>
      </div>

      <QuestionCard
        key={currentQuestion}
        question={formattedQuestion}
        questionNumber={currentQuestion + 1}
        totalQuestions={challenge.questions.length}
        score={score}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  )
}
