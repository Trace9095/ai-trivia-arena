'use client'

import { useState, useEffect, useCallback } from 'react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Flame, CheckCircle2, XCircle, Timer, ChevronRight } from 'lucide-react'

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

// ABCD colour scheme — matches the /join phone buttons and TV mode
const ANSWER_COLORS = [
  {
    idle:     'bg-red-900/30 border-red-700/50 hover:bg-red-900/55 hover:border-red-500/70',
    correct:  'bg-green-900/60 border-green-500/80 text-green-200',
    wrong:    'bg-red-900/60 border-red-500/80 text-red-300',
    dim:      'opacity-40 bg-red-900/20 border-red-900/30',
    letter:   'text-red-400',
    label: 'A',
  },
  {
    idle:     'bg-blue-900/30 border-blue-700/50 hover:bg-blue-900/55 hover:border-blue-500/70',
    correct:  'bg-green-900/60 border-green-500/80 text-green-200',
    wrong:    'bg-red-900/60 border-red-500/80 text-red-300',
    dim:      'opacity-40 bg-blue-900/20 border-blue-900/30',
    letter:   'text-blue-400',
    label: 'B',
  },
  {
    idle:     'bg-green-900/30 border-green-700/50 hover:bg-green-900/55 hover:border-green-500/70',
    correct:  'bg-green-900/60 border-green-500/80 text-green-200',
    wrong:    'bg-red-900/60 border-red-500/80 text-red-300',
    dim:      'opacity-40 bg-green-900/20 border-green-900/30',
    letter:   'text-green-400',
    label: 'C',
  },
  {
    idle:     'bg-yellow-900/30 border-yellow-700/50 hover:bg-yellow-900/55 hover:border-yellow-500/70',
    correct:  'bg-green-900/60 border-green-500/80 text-green-200',
    wrong:    'bg-red-900/60 border-red-500/80 text-red-300',
    dim:      'opacity-40 bg-yellow-900/20 border-yellow-900/30',
    letter:   'text-yellow-400',
    label: 'D',
  },
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
    [question.correctAnswer, ...question.wrongAnswers].sort(() => Math.random() - 0.5),
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
      setTimeout(() => setShowPop(false), 700)
    }
  }

  const getButtonClass = (answer: string, i: number) => {
    const c = ANSWER_COLORS[i % 4]!
    if (!result) {
      return cn(
        'min-h-[64px] w-full px-4 py-4 rounded-xl border text-left font-medium transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50',
        selectedAnswer === null ? c.idle : cn(c.idle, 'cursor-not-allowed'),
      )
    }
    if (answer === question.correctAnswer) {
      return cn('min-h-[64px] w-full px-4 py-4 rounded-xl border text-left font-medium transition-all', c.correct)
    }
    if (answer === selectedAnswer && !result.isCorrect) {
      return cn('min-h-[64px] w-full px-4 py-4 rounded-xl border text-left font-medium', c.wrong)
    }
    return cn('min-h-[64px] w-full px-4 py-4 rounded-xl border text-left font-medium transition-all', c.dim)
  }

  const timerPct = (timeLeft / TIME_LIMIT) * 100
  const timerColor =
    timeLeft <= 5 ? 'text-red-400' : timeLeft <= 10 ? 'text-yellow-400' : 'text-blue-400'
  const barClass =
    timeLeft <= 5
      ? '[&>div]:bg-red-500'
      : timeLeft <= 10
      ? '[&>div]:bg-yellow-400'
      : '[&>div]:bg-amber-500'

  const isLastQuestion = questionNumber >= totalQuestions

  return (
    <div className="flex flex-col gap-5 relative">
      {/* Correct-answer pop flash */}
      {showPop && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/60 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
        </div>
      )}

      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <Badge
          variant="secondary"
          className="text-xs font-bold bg-white/6 text-zinc-400 border-white/8 shrink-0"
        >
          {questionNumber} / {totalQuestions}
        </Badge>

        {streak >= 2 && (
          <div className="flex items-center gap-1 bg-orange-950/60 border border-orange-700/50 rounded-full px-2.5 py-1">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-orange-300 font-bold text-xs">{streak}x streak</span>
          </div>
        )}

        <div className="flex items-center gap-1 shrink-0">
          <span className="text-yellow-400 font-mono font-black text-lg tabular-nums leading-none">
            {score.toLocaleString()}
          </span>
          <span className="text-zinc-500 text-xs font-medium">pts</span>
        </div>

        {/* Timer digit */}
        <div
          className={cn(
            'font-mono font-black text-3xl w-12 text-center shrink-0 tabular-nums transition-colors leading-none',
            timerColor,
            timeLeft <= 5 && 'animate-pulse',
          )}
        >
          {timeLeft}
        </div>
      </div>

      {/* Timer bar */}
      <Progress
        value={timerPct}
        className={cn('h-2 bg-white/8 rounded-full', barClass)}
      />

      {/* Question */}
      <div className="border border-white/8 bg-card rounded-xl p-6 min-h-[100px] flex items-center">
        <p className="text-lg sm:text-xl font-semibold leading-relaxed text-zinc-100">
          {question.questionText}
        </p>
      </div>

      {/* Answer buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {allAnswers.map((answer, i) => {
          const c = ANSWER_COLORS[i % 4]!
          return (
            <button
              key={i}
              onClick={() => handleSelect(answer)}
              disabled={selectedAnswer !== null || isLoading}
              className={getButtonClass(answer, i)}
            >
              <span className={cn('font-black mr-3 text-base shrink-0', c.letter)}>
                {c.label}.
              </span>
              <span className="text-base leading-snug">{answer}</span>
            </button>
          )
        })}
      </div>

      {/* Result feedback */}
      {result && (
        <div
          className={cn(
            'rounded-xl p-5 border transition-all animate-scale-in',
            result.isCorrect
              ? 'bg-green-950/40 border-green-800/60'
              : 'bg-red-950/40 border-red-800/60',
          )}
        >
          <p className="font-bold text-base mb-2 flex items-center gap-2">
            {result.isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-green-300">Correct!</span>
              </>
            ) : selectedAnswer === '' ? (
              <>
                <Timer className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-yellow-300">Time&apos;s up!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-red-300">Wrong</span>
              </>
            )}
          </p>
          {!result.isCorrect && selectedAnswer !== '' && (
            <p className="text-sm text-zinc-400 mb-1.5">
              Correct answer:{' '}
              <span className="text-green-400 font-semibold">{question.correctAnswer}</span>
            </p>
          )}
          {result.explanation && (
            <p className="text-sm text-zinc-500 leading-relaxed">{result.explanation}</p>
          )}
          <button
            onClick={onNext}
            className={cn(
              'mt-4 w-full min-h-[48px] rounded-xl border font-semibold text-sm flex items-center justify-center gap-2 transition-all',
              'bg-white/6 border-white/12 text-zinc-200 hover:bg-white/10 hover:text-white hover:border-white/20',
            )}
          >
            {isLastQuestion ? 'See Results' : 'Next Question'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
