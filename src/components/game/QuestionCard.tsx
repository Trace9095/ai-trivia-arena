'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Flame, CheckCircle2, XCircle, Timer } from 'lucide-react'

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
  streak?: number
  onAnswer: (selectedAnswer: string, timeMs: number) => Promise<{ isCorrect: boolean; explanation: string | null }>
  onNext: () => void
}

// ABCD button color scheme (matches /join phone buttons)
const ANSWER_COLORS = [
  { bg: 'bg-red-900/40 border-red-700/60', hover: 'hover:bg-red-900/70 hover:border-red-500', letter: 'text-red-400', label: 'A' },
  { bg: 'bg-blue-900/40 border-blue-700/60', hover: 'hover:bg-blue-900/70 hover:border-blue-500', letter: 'text-blue-400', label: 'B' },
  { bg: 'bg-green-900/40 border-green-700/60', hover: 'hover:bg-green-900/70 hover:border-green-500', letter: 'text-green-400', label: 'C' },
  { bg: 'bg-yellow-900/40 border-yellow-700/60', hover: 'hover:bg-yellow-900/70 hover:border-yellow-500', letter: 'text-yellow-400', label: 'D' },
]

const TIME_LIMIT = 15

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  score,
  streak = 0,
  onAnswer,
  onNext,
}: QuestionCardProps) {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)
  const [startTime] = useState(Date.now())
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [result, setResult] = useState<{ isCorrect: boolean; explanation: string | null } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPop, setShowPop] = useState(false)

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
    if (res.isCorrect) {
      setShowPop(true)
      setTimeout(() => setShowPop(false), 800)
    }
  }

  const getButtonClass = (answer: string, i: number) => {
    const colors = ANSWER_COLORS[i % 4]
    if (!result) {
      return cn(
        'min-h-[60px] p-4 rounded-xl border text-left font-medium transition-all duration-150',
        'active:scale-[0.98]',
        selectedAnswer === null ? colors.bg + ' ' + colors.hover : colors.bg,
        selectedAnswer !== null && 'cursor-not-allowed opacity-70'
      )
    }
    if (answer === question.correctAnswer) {
      return 'min-h-[60px] p-4 rounded-xl border text-left font-medium bg-green-900/60 border-green-500 text-green-300 scale-[1.01]'
    }
    if (answer === selectedAnswer && !result.isCorrect) {
      return 'min-h-[60px] p-4 rounded-xl border text-left font-medium bg-red-900/60 border-red-500 text-red-300'
    }
    return cn('min-h-[60px] p-4 rounded-xl border text-left font-medium opacity-40', colors.bg)
  }

  const timerPct = (timeLeft / TIME_LIMIT) * 100
  const timerColor = timeLeft <= 5 ? 'text-red-500' : timeLeft <= 10 ? 'text-yellow-400' : 'text-blue-400'

  return (
    <div className="flex flex-col gap-5 relative">
      {/* Pop animation on correct */}
      {showPop && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
          <CheckCircle2 className="w-20 h-20 text-green-400 animate-bounce" />
        </div>
      )}

      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <Badge variant="secondary" className="text-sm shrink-0">
          {questionNumber} / {totalQuestions}
        </Badge>

        {streak >= 2 && (
          <div className="flex items-center gap-1 bg-orange-950/60 border border-orange-700 rounded-full px-3 py-1">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-bold text-sm">{streak}x streak</span>
          </div>
        )}

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-yellow-400 font-mono font-bold text-lg">{score.toLocaleString()}</span>
          <span className="text-muted-foreground text-xs">pts</span>
        </div>

        <div className={cn('font-mono font-bold text-2xl w-10 text-center shrink-0', timerColor, timeLeft <= 5 && 'animate-pulse')}>
          {timeLeft}
        </div>
      </div>

      {/* Timer bar */}
      <Progress value={timerPct} className={cn('h-2', timeLeft <= 5 ? '[&>div]:bg-red-500' : timeLeft <= 10 ? '[&>div]:bg-yellow-400' : '')} />

      {/* Question */}
      <div className="bg-card border border-border rounded-xl p-6 min-h-[100px] flex items-center">
        <p className="text-xl font-medium leading-relaxed">{question.questionText}</p>
      </div>

      {/* Answer buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allAnswers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleSelect(answer)}
            disabled={selectedAnswer !== null || isLoading}
            className={getButtonClass(answer, i)}
          >
            <span className={cn('font-bold mr-2 text-sm', ANSWER_COLORS[i % 4].letter)}>
              {ANSWER_COLORS[i % 4].label}.
            </span>
            {answer}
          </button>
        ))}
      </div>

      {/* Result feedback */}
      {result && (
        <div
          className={cn(
            'rounded-xl p-4 border transition-all',
            result.isCorrect ? 'bg-green-950/50 border-green-800' : 'bg-red-950/50 border-red-800'
          )}
        >
          <p className="font-bold text-lg mb-1 flex items-center gap-1">
            {result.isCorrect
              ? <><CheckCircle2 className="w-5 h-5 text-green-400" /> Correct!</>
              : selectedAnswer === ''
                ? <><Timer className="w-5 h-5 text-yellow-400" /> Time&apos;s up!</>
                : <><XCircle className="w-5 h-5 text-red-400" /> Wrong</>}
          </p>
          {!result.isCorrect && selectedAnswer !== '' && (
            <p className="text-sm text-muted-foreground mb-1">
              Correct answer: <span className="text-green-400 font-semibold">{question.correctAnswer}</span>
            </p>
          )}
          {result.explanation && (
            <p className="text-sm text-muted-foreground">{result.explanation}</p>
          )}
          <Button onClick={onNext} className="mt-3 w-full min-h-[44px]" variant="outline">
            {questionNumber < totalQuestions ? 'Next Question →' : 'See Results →'}
          </Button>
        </div>
      )}
    </div>
  )
}
