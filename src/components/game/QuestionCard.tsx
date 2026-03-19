'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: {
    id: string
    questionText: string
    correctAnswer: string
    wrongAnswers: string[]
    explanation: string | null
  }
  questionNumber: number
  totalQuestions: number
  score: number
  onAnswer: (selectedAnswer: string, timeMs: number) => Promise<{ isCorrect: boolean; explanation: string | null }>
  onNext: () => void
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  score,
  onAnswer,
  onNext,
}: QuestionCardProps) {
  const [timeLeft, setTimeLeft] = useState(15)
  const [startTime] = useState(Date.now())
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [result, setResult] = useState<{ isCorrect: boolean; explanation: string | null } | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Shuffle answers once on mount
  const [allAnswers] = useState(() =>
    [question.correctAnswer, ...question.wrongAnswers].sort(() => Math.random() - 0.5)
  )

  const handleTimeUp = useCallback(async () => {
    if (selectedAnswer !== null) return
    setSelectedAnswer('')
    setIsLoading(true)
    const res = await onAnswer('', Date.now() - startTime)
    setResult(res)
    setIsLoading(false)
  }, [selectedAnswer, onAnswer, startTime])

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimeUp()
      return
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, handleTimeUp])

  const handleSelect = async (answer: string) => {
    if (selectedAnswer !== null || isLoading) return
    setSelectedAnswer(answer)
    setIsLoading(true)
    const timeMs = Date.now() - startTime
    const res = await onAnswer(answer, timeMs)
    setResult(res)
    setIsLoading(false)
  }

  const getButtonStyle = (answer: string) => {
    if (!result) return 'default'
    if (answer === question.correctAnswer) return 'correct'
    if (answer === selectedAnswer && !result.isCorrect) return 'wrong'
    return 'default'
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="text-sm">
          {questionNumber} / {totalQuestions}
        </Badge>
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 font-mono font-bold text-lg">{score.toLocaleString()}</span>
          <span className="text-muted-foreground text-sm">pts</span>
        </div>
        <div
          className={cn(
            'font-mono font-bold text-2xl w-10 text-center',
            timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-blue-400'
          )}
        >
          {timeLeft}
        </div>
      </div>

      {/* Timer bar */}
      <Progress value={(timeLeft / 15) * 100} className="h-2" />

      {/* Question */}
      <div className="bg-card border border-border rounded-xl p-6 min-h-[120px] flex items-center">
        <p className="text-xl font-medium leading-relaxed">{question.questionText}</p>
      </div>

      {/* Answers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allAnswers.map((answer, i) => {
          const style = getButtonStyle(answer)
          return (
            <button
              key={i}
              onClick={() => handleSelect(answer)}
              disabled={selectedAnswer !== null || isLoading}
              className={cn(
                'min-h-[56px] p-4 rounded-xl border text-left font-medium transition-all duration-200',
                'hover:scale-[1.01] active:scale-[0.99]',
                style === 'correct' && 'bg-green-900/50 border-green-500 text-green-400',
                style === 'wrong' && 'bg-red-900/50 border-red-500 text-red-400',
                style === 'default' && 'bg-card border-border hover:border-blue-500 hover:bg-blue-950/30',
                selectedAnswer !== null && style === 'default' && 'opacity-50',
                isLoading && 'cursor-not-allowed'
              )}
            >
              <span className="text-muted-foreground mr-2 text-sm">{String.fromCharCode(65 + i)}.</span>
              {answer}
            </button>
          )
        })}
      </div>

      {/* Result feedback */}
      {result && (
        <div
          className={cn(
            'rounded-xl p-4 border',
            result.isCorrect ? 'bg-green-950/50 border-green-800' : 'bg-red-950/50 border-red-800'
          )}
        >
          <p className="font-bold mb-1">{result.isCorrect ? '✅ Correct!' : '❌ Wrong'}</p>
          {result.explanation && <p className="text-sm text-muted-foreground">{result.explanation}</p>}
          <Button onClick={onNext} className="mt-3 w-full" variant="outline">
            {questionNumber < totalQuestions ? 'Next Question →' : 'See Results →'}
          </Button>
        </div>
      )}
    </div>
  )
}
