'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import QRCode from 'qrcode'
import { cn } from '@/lib/utils'
import {
  Trophy,
  Target,
  CheckCircle,
  Flame,
  AlertTriangle,
  Maximize,
  Loader2,
} from 'lucide-react'

// ─── Theme definitions ────────────────────────────────────────────────────────
const THEMES = {
  classic: {
    bgClass: 'bg-gradient-to-b from-[#0A0A14] via-[#1A1040] to-[#0A0A14]',
    cardClass: 'bg-white/5 border border-blue-500/30',
    accentColor: '#3B82F6',
    timerColor: '#3B82F6',
    answerColors: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  neon: {
    bgClass: 'bg-black',
    cardClass: 'bg-black border border-[#FF006E] shadow-[0_0_20px_#FF006E55]',
    accentColor: '#FF006E',
    timerColor: '#00F5FF',
    answerColors: ['#FF006E', '#00F5FF', '#39FF14', '#FFFF00'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  royalgorge: {
    bgClass: 'bg-gradient-to-b from-[#3E2723] via-[#BF360C] to-[#4A148C]',
    cardClass: 'bg-[#5D4037]/60 border border-orange-400/40',
    accentColor: '#FF6F00',
    timerColor: '#FF8F00',
    answerColors: ['#C62828', '#1565C0', '#2E7D32', '#E65100'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  sportsbar: {
    bgClass: 'bg-gradient-to-b from-[#1B5E20] to-[#0A2E0A]',
    cardClass: 'bg-black/60 border border-yellow-500/50',
    accentColor: '#FFC107',
    timerColor: '#FFC107',
    answerColors: ['#C62828', '#0D47A1', '#1B5E20', '#F57F17'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
} as const

type ThemeKey = keyof typeof THEMES

// ─── Types ────────────────────────────────────────────────────────────────────
interface AlwaysOnState {
  gameCode: string
  theme: string
  status: 'active' | 'showing_leaderboard'
  questionNumber: number
  questionStartedAt: string | null
  leaderboardEndsAt: string | null
  timePerQuestion: number
  playerCount: number
  question: {
    text: string
    answers: string[]
    correctAnswer: string | null
    explanation: string | null
  } | null
  leaderboard: Array<{
    rank: number
    id: string
    displayName: string
    score: number
    correctCount: number
    streak: number
  }>
}

// ─── QR Code ─────────────────────────────────────────────────────────────────
function QRCodeImg({ url, size = 160 }: { url: string; size?: number }) {
  const [src, setSrc] = useState('')
  useEffect(() => {
    QRCode.toDataURL(url, { width: size, margin: 1, color: { light: '#ffffff', dark: '#000000' } })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [url, size])
  if (!src) return <div style={{ width: size, height: size }} className="bg-white/10 rounded-xl animate-pulse" />
  return <img src={src} alt="QR Code" className="rounded-xl" style={{ width: size, height: size }} />
}

// ─── Countdown timer ─────────────────────────────────────────────────────────
function CountdownTimer({
  startedAt,
  duration,
  color,
}: {
  startedAt: string | null
  duration: number
  color: string
}) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    const tick = () => {
      if (!startedAt) { setTimeLeft(duration); return }
      const elapsed = (Date.now() - new Date(startedAt).getTime()) / 1000
      setTimeLeft(Math.max(0, duration - elapsed))
    }
    tick()
    const id = setInterval(tick, 200)
    return () => clearInterval(id)
  }, [startedAt, duration])

  const pct = (timeLeft / duration) * 100
  const isUrgent = timeLeft <= 5

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn('font-black tabular-nums', isUrgent && 'animate-pulse')}
        style={{ fontSize: 72, color: isUrgent ? '#EF4444' : color, lineHeight: 1 }}
      >
        {Math.ceil(timeLeft)}
      </div>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden" style={{ width: 120 }}>
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{ width: `${pct}%`, background: isUrgent ? '#EF4444' : color }}
        />
      </div>
    </div>
  )
}

// ─── Leaderboard strip (bottom bar during question) ──────────────────────────
function LeaderboardStrip({
  players,
  accent,
}: {
  players: AlwaysOnState['leaderboard']
  accent: string
}) {
  const shown = players.slice(0, 5)
  return (
    <div className="flex items-center gap-4 overflow-hidden">
      <span className="flex items-center gap-1.5 text-white/40 font-bold uppercase tracking-widest shrink-0" style={{ fontSize: 18 }}>
        <Trophy size={18} />
        Leaders:
      </span>
      {shown.map((p, i) => (
        <span key={p.id} className="flex items-center gap-1 shrink-0" style={{ fontSize: 20 }}>
          <span className="text-white/50 font-bold">{i + 1}.</span>
          <span className="text-white font-bold truncate max-w-[160px]">{p.displayName}</span>
          <span className="font-black tabular-nums" style={{ color: accent }}>{p.score.toLocaleString()}</span>
        </span>
      ))}
    </div>
  )
}

// ─── Full leaderboard (between questions) ─────────────────────────────────────
function LeaderboardScreen({
  state,
  theme,
  joinUrl,
  countdown,
}: {
  state: AlwaysOnState
  theme: typeof THEMES[ThemeKey]
  joinUrl: string
  countdown: number
}) {
  const { question } = state

  return (
    <div className="flex-1 flex flex-col p-10 gap-6" style={{ minHeight: 0 }}>
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 text-white font-black" style={{ fontSize: 52 }}>
          <Trophy size={52} />
          Leaderboard
        </div>
        <div className="text-right">
          <div className="text-white/40 font-bold" style={{ fontSize: 22 }}>Next question in</div>
          <div className="font-black tabular-nums" style={{ fontSize: 64, color: theme.accentColor, lineHeight: 1 }}>
            {countdown}s
          </div>
        </div>
      </div>

      {/* Answer reveal */}
      {question?.correctAnswer && (
        <div className={cn('rounded-2xl px-6 py-4 shrink-0', theme.cardClass)} style={{ borderColor: '#10B981' }}>
          <div className="flex items-start gap-3">
            <CheckCircle size={28} className="text-green-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-green-400 font-black" style={{ fontSize: 24 }}>
                {question.correctAnswer}
              </span>
              {question.explanation && (
                <span className="text-white/70 font-bold ml-3" style={{ fontSize: 22 }}>
                  — {question.explanation}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Player list */}
      <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-hidden">
        {state.leaderboard.slice(0, 8).map((p, i) => (
          <div
            key={p.id}
            className={cn('flex items-center gap-4 rounded-2xl px-6 py-3 shrink-0', theme.cardClass)}
            style={
              i === 0 ? { background: '#F59E0B15', borderColor: '#F59E0B66' }
              : i === 1 ? { background: '#9CA3AF15', borderColor: '#9CA3AF66' }
              : i === 2 ? { background: '#CD7F3215', borderColor: '#CD7F3266' }
              : {}
            }
          >
            <span
              className="font-black tabular-nums text-white/60"
              style={{ fontSize: i < 3 ? 40 : 32, minWidth: 52, textAlign: 'center' }}
            >
              {i + 1}
            </span>
            <span className="flex-1 font-black text-white truncate" style={{ fontSize: 40 }}>{p.displayName}</span>
            <span className="text-white/40 font-bold" style={{ fontSize: 24 }}>{p.correctCount} correct</span>
            <span className="font-black tabular-nums" style={{ fontSize: 52, color: theme.accentColor }}>
              {p.score.toLocaleString()}
            </span>
            {p.streak >= 3 && (
              <span className="flex items-center gap-1" style={{ color: '#F97316' }}>
                <Flame size={28} />
                <span className="font-black" style={{ fontSize: 28 }}>{p.streak}</span>
              </span>
            )}
          </div>
        ))}
        {state.leaderboard.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-white/30 font-bold" style={{ fontSize: 36 }}>
              No players yet — scan the QR to join!
            </div>
          </div>
        )}
      </div>

      {/* Bottom: join info */}
      <div className="flex items-center gap-6 shrink-0">
        <QRCodeImg url={joinUrl} size={120} />
        <div>
          <div className="text-white font-bold" style={{ fontSize: 24 }}>Join at <span className="font-black">aitriviaarena.com/join</span></div>
          <div className="text-white/50 font-bold" style={{ fontSize: 20 }}>Code: <span className="font-black tracking-widest" style={{ color: theme.accentColor }}>{state.gameCode}</span></div>
        </div>
        <div className="ml-auto text-white/30 font-bold" style={{ fontSize: 20 }}>
          {state.playerCount} player{state.playerCount !== 1 ? 's' : ''} online
        </div>
      </div>
    </div>
  )
}

// ─── Question screen ──────────────────────────────────────────────────────────
function QuestionScreen({
  state,
  theme,
  joinUrl,
}: {
  state: AlwaysOnState
  theme: typeof THEMES[ThemeKey]
  joinUrl: string
}) {
  const { question } = state

  return (
    <div className="flex-1 flex flex-col" style={{ minHeight: 0 }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-10 py-5 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white font-black" style={{ fontSize: 28 }}>
            <Target size={28} />
            AI Trivia Arena
          </div>
          <span className="text-white/30 font-bold" style={{ fontSize: 24 }}>
            Q#{state.questionNumber}
          </span>
        </div>
        <div className="flex items-center gap-8">
          <CountdownTimer
            startedAt={state.questionStartedAt}
            duration={state.timePerQuestion}
            color={theme.timerColor}
          />
          <div className="text-white/50 font-bold text-right" style={{ fontSize: 22 }}>
            <div>{state.playerCount} player{state.playerCount !== 1 ? 's' : ''}</div>
            <div>online</div>
          </div>
        </div>
      </div>

      {/* Question text */}
      <div className="px-10 flex-1 flex flex-col gap-6" style={{ minHeight: 0 }}>
        <div
          className={cn('rounded-3xl px-10 py-8 text-white font-bold text-center shrink-0', theme.cardClass)}
          style={{ fontSize: question && question.text.length > 100 ? 44 : 56, lineHeight: 1.25 }}
        >
          {question?.text ?? 'Loading question...'}
        </div>

        {/* Answer grid */}
        {question && (
          <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
            {question.answers.map((answer, i) => (
              <div
                key={i}
                className="rounded-3xl flex items-center gap-5 px-8"
                style={{
                  background: theme.answerColors[i] + 'CC',
                  border: `4px solid ${theme.answerColors[i]}`,
                  minHeight: 100,
                }}
              >
                <span className="font-black text-white shrink-0" style={{ fontSize: 52, minWidth: 56 }}>
                  {theme.answerLabels[i]}
                </span>
                <span className="font-bold text-white" style={{ fontSize: answer.length > 40 ? 32 : 42, lineHeight: 1.2 }}>
                  {answer}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar: leaderboard strip + QR */}
      <div className="flex items-center gap-6 px-10 py-4 border-t border-white/10 shrink-0">
        <QRCodeImg url={joinUrl} size={100} />
        <div className="shrink-0">
          <div className="text-white font-bold" style={{ fontSize: 18 }}>aitriviaarena.com/join</div>
          <div className="font-black tracking-widest" style={{ fontSize: 24, color: theme.accentColor }}>
            {state.gameCode}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <LeaderboardStrip players={state.leaderboard} accent={theme.accentColor} />
        </div>
      </div>
    </div>
  )
}

// ─── Main TV component ────────────────────────────────────────────────────────
function TVPageContent() {
  const searchParams = useSearchParams()
  const isKiosk = searchParams.get('kiosk') === 'true'

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [gameState, setGameState] = useState<AlwaysOnState | null>(null)
  const [error, setError] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prevStatusRef = useRef<string>('')

  const poll = useCallback(async () => {
    try {
      const res = await fetch('/api/games/live/current')
      if (!res.ok) {
        const d = (await res.json()) as { error?: string }
        setError(d.error ?? 'Failed to load game')
        return
      }
      const data = (await res.json()) as AlwaysOnState
      setGameState(data)
      setError(null)
      prevStatusRef.current = data.status
    } catch {
      // Network error — retry on next tick
    }
  }, [])

  // Auto-start immediately on mount — no tap required
  useEffect(() => {
    poll()
    pollRef.current = setInterval(poll, 1500)

    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)

    return () => {
      document.removeEventListener('fullscreenchange', onFsChange)
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [poll])

  const gs = gameState
  const themeKey = (gs?.theme ?? 'classic') as ThemeKey
  const theme = THEMES[themeKey] ?? THEMES.classic
  const joinUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://aitriviaarena.com'}/join`

  // ── Loading ─────────────────────────────────────────────────────────────────
  if (!gs && !error) {
    return (
      <div className={cn('min-h-screen flex items-center justify-center', theme.bgClass)}>
        <div className="flex items-center gap-3 text-white/50 font-bold" style={{ fontSize: 36 }}>
          <Loader2 size={36} className="animate-spin" />
          Loading game...
        </div>
      </div>
    )
  }

  // ── Error state ─────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div className={cn('min-h-screen flex flex-col items-center justify-center', theme.bgClass)}>
        <div className="text-center space-y-4">
          <AlertTriangle size={64} className="mx-auto text-yellow-400" />
          <div className="text-white font-black" style={{ fontSize: 40 }}>Setup required</div>
          <div className="text-white/60 font-bold" style={{ fontSize: 24 }}>{error}</div>
          <div className="text-white/40" style={{ fontSize: 20 }}>
            Visit <strong>/admin → Seed Questions</strong> to add questions to the pool
          </div>
        </div>
      </div>
    )
  }

  // ── Game ─────────────────────────────────────────────────────────────────────
  const lbCountdown = gs!.status === 'showing_leaderboard'
    ? Math.max(0, Math.ceil((new Date(gs!.leaderboardEndsAt ?? Date.now()).getTime() - Date.now()) / 1000))
    : 0

  return (
    <div
      className={cn('min-h-screen flex flex-col overflow-hidden select-none', theme.bgClass)}
      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      {/* Fullscreen hint — hidden in kiosk mode */}
      {!isKiosk && !isFullscreen && (
        <button
          onClick={() => document.documentElement.requestFullscreen().catch(() => {})}
          className="fixed top-3 right-3 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white/50 hover:bg-white/20 text-sm font-bold"
        >
          <Maximize size={14} />
          Fullscreen
        </button>
      )}

      {gs!.status === 'active' && (
        <QuestionScreen state={gs!} theme={theme} joinUrl={joinUrl} />
      )}

      {gs!.status === 'showing_leaderboard' && (
        <LeaderboardScreen state={gs!} theme={theme} joinUrl={joinUrl} countdown={lbCountdown} />
      )}
    </div>
  )
}

export default function TVPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A14]" />}>
      <TVPageContent />
    </Suspense>
  )
}
