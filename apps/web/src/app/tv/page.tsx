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
  Loader2,
  Crown,
  Medal,
  Users,
  Zap,
} from 'lucide-react'

// ─── Theme definitions ────────────────────────────────────────────────────────
const THEMES = {
  classic: {
    bgClass: 'bg-[#0D1117]',
    cardClass: 'bg-white/5 border border-[#D4A853]/30',
    accentColor: '#D4A853',
    timerColor: '#D4A853',
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
type DisplayPhase = 'question' | 'revealing' | 'leaderboard' | 'voting'

const CATEGORY_LABELS: Record<string, string> = {
  general: 'General Knowledge',
  science: 'Science & Nature',
  history: 'History',
  geography: 'Geography',
  pop_culture: 'Pop Culture',
  sports: 'Sports',
  food_drink: 'Food & Drink',
  technology: 'Technology',
  movies_tv: 'Movies & TV',
  music: 'Music',
  colorado: 'Colorado & Local',
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface AlwaysOnState {
  gameCode: string
  theme: string
  status: 'active' | 'showing_leaderboard' | 'voting'
  questionNumber: number
  questionStartedAt: string | null
  leaderboardEndsAt: string | null
  votingDeadline: string | null
  votingOptions: string[] | null
  voteCounts: Record<string, number> | null
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

// ─── QR Code Panel ────────────────────────────────────────────────────────────
function QRCodePanel({
  url,
  gameCode,
  accent,
  compact = false,
}: {
  url: string
  gameCode: string
  accent: string
  compact?: boolean
}) {
  const [src, setSrc] = useState('')
  const size = compact ? 96 : 120

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size * 2,
      margin: 1,
      color: { light: '#ffffff', dark: '#111111' },
    })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [url, size])

  return (
    <div
      className="flex items-center gap-3 rounded-2xl border border-white/15 shrink-0"
      style={{
        background: 'rgba(255,255,255,0.06)',
        padding: compact ? '10px 14px' : '12px 16px',
      }}
    >
      {/* White-background QR */}
      <div className="bg-white rounded-xl shrink-0" style={{ padding: 6 }}>
        {src ? (
          <img
            src={src}
            alt="QR Code to join game"
            style={{ width: size, height: size, display: 'block' }}
          />
        ) : (
          <div
            className="animate-pulse rounded-lg"
            style={{ width: size, height: size, background: '#e5e7eb' }}
          />
        )}
      </div>

      {/* Text info */}
      <div className="flex flex-col gap-0.5">
        <span
          className="font-bold text-white/40 uppercase tracking-widest"
          style={{ fontSize: compact ? 12 : 13 }}
        >
          Scan to join
        </span>
        <span
          className="font-black text-white"
          style={{ fontSize: compact ? 16 : 18, lineHeight: 1.25 }}
        >
          aitriviaarena.com/join
        </span>
        <span
          className="font-black tabular-nums tracking-[0.18em] mt-0.5"
          style={{ fontSize: compact ? 22 : 26, color: accent, lineHeight: 1 }}
        >
          {gameCode}
        </span>
      </div>
    </div>
  )
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
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn('font-black tabular-nums', isUrgent && 'animate-pulse')}
        style={{ fontSize: 76, color: isUrgent ? '#EF4444' : color, lineHeight: 1 }}
      >
        {Math.ceil(timeLeft)}
      </div>
      <div
        className="h-2.5 bg-white/10 rounded-full overflow-hidden"
        style={{ width: 128 }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: isUrgent ? '#EF4444' : color,
            transition: 'width 0.2s linear, background 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}

// ─── Answer card — handles normal + reveal animation ─────────────────────────
function AnswerCard({
  answer,
  label,
  color,
  phase,
  isCorrect,
  index,
}: {
  answer: string
  label: string
  color: string
  phase: DisplayPhase
  isCorrect: boolean
  index: number
}) {
  const revealing = phase === 'revealing'
  const wrong = revealing && !isCorrect
  const correct = revealing && isCorrect

  return (
    <div
      className="rounded-3xl flex items-center gap-5 px-8"
      style={{
        background: correct
          ? 'rgba(5,46,22,0.95)'
          : wrong
          ? 'rgba(17,24,39,0.7)'
          : color + 'CC',
        border: `4px solid ${correct ? '#10B981' : wrong ? '#374151' : color}`,
        minHeight: 112,
        opacity: wrong ? 0.42 : 1,
        transform: correct ? 'scale(1.04)' : 'scale(1)',
        transition: `
          background 0.65s cubic-bezier(0.4,0,0.2,1),
          border-color 0.65s cubic-bezier(0.4,0,0.2,1),
          opacity 0.65s cubic-bezier(0.4,0,0.2,1),
          transform 0.65s cubic-bezier(0.4,0,0.2,1)
        `,
        transitionDelay: wrong ? `${index * 70}ms` : '0ms',
        animation: correct
          ? 'tv-correct-pop 0.7s cubic-bezier(0.4,0,0.2,1) forwards, tv-glow-pulse 2s ease-in-out 0.6s infinite'
          : 'none',
      }}
    >
      {/* Letter label */}
      <span
        className="font-black shrink-0"
        style={{
          fontSize: 56,
          minWidth: 60,
          lineHeight: 1,
          color: correct ? '#10B981' : wrong ? '#4b5563' : 'white',
          transition: 'color 0.65s ease',
        }}
      >
        {label}
      </span>

      {/* Answer text */}
      <span
        className="font-bold flex-1"
        style={{
          fontSize: answer.length > 40 ? 34 : 44,
          lineHeight: 1.2,
          color: correct ? '#d1fae5' : wrong ? '#6b7280' : 'white',
          transition: 'color 0.65s ease',
        }}
      >
        {answer}
      </span>

      {/* Correct checkmark */}
      {correct && (
        <span className="shrink-0 ml-2">
          <CheckCircle size={48} color="#10B981" strokeWidth={2.5} />
        </span>
      )}
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
    <div className="flex items-center gap-5 overflow-hidden min-w-0">
      <span
        className="flex items-center gap-2 text-white/35 font-bold uppercase tracking-widest shrink-0"
        style={{ fontSize: 17 }}
      >
        <Trophy size={17} />
        Top players:
      </span>
      {shown.map((p, i) => (
        <span key={p.id} className="flex items-center gap-1.5 shrink-0" style={{ fontSize: 20 }}>
          <span className="text-white/40 font-bold">{i + 1}.</span>
          <span className="text-white font-bold truncate max-w-[180px]">{p.displayName}</span>
          <span className="font-black tabular-nums" style={{ color: accent }}>
            {p.score.toLocaleString()}
          </span>
        </span>
      ))}
    </div>
  )
}

// ─── Rank badge (top 3 get icons, rest get numbers) ──────────────────────────
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Crown size={44} style={{ color: '#F59E0B' }} />
  if (rank === 2) return <Medal size={40} style={{ color: '#9CA3AF' }} />
  if (rank === 3) return <Medal size={40} style={{ color: '#CD7F32' }} />
  return (
    <span
      className="font-black tabular-nums text-white/35"
      style={{ fontSize: 32, minWidth: 44, textAlign: 'center', lineHeight: 1 }}
    >
      {rank}
    </span>
  )
}

// ─── Full leaderboard screen ──────────────────────────────────────────────────
function LeaderboardScreen({
  state,
  theme,
  joinUrl,
  countdown,
  isKiosk,
  isMilestone,
}: {
  state: AlwaysOnState
  theme: (typeof THEMES)[ThemeKey]
  joinUrl: string
  countdown: number
  isKiosk?: boolean
  isMilestone: boolean
}) {
  const maxPlayers = isMilestone ? 8 : 5

  return (
    <div
      className="flex-1 flex flex-col gap-5"
      style={{ minHeight: 0, padding: isMilestone ? '36px 44px' : '28px 44px' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div
          className="flex items-center gap-4 text-white font-black"
          style={{ fontSize: isMilestone ? 62 : 50 }}
        >
          <Trophy
            size={isMilestone ? 62 : 50}
            style={{ color: '#F59E0B' }}
            strokeWidth={2}
          />
          {isMilestone ? (
            <span>
              Round Complete
              <span
                className="ml-4 font-bold"
                style={{ fontSize: isMilestone ? 32 : 26, color: '#F59E0B', opacity: 0.8 }}
              >
                Q#{state.questionNumber}
              </span>
            </span>
          ) : (
            <span>
              Leaderboard
              <span
                className="ml-4 font-bold"
                style={{ fontSize: 28, color: theme.accentColor, opacity: 0.7 }}
              >
                Q#{state.questionNumber}
              </span>
            </span>
          )}
        </div>

        {/* Countdown */}
        <div className="text-right">
          <div className="text-white/35 font-bold" style={{ fontSize: 20 }}>
            Next question in
          </div>
          <div
            className="font-black tabular-nums"
            style={{ fontSize: 68, color: theme.accentColor, lineHeight: 1 }}
          >
            {countdown}s
          </div>
        </div>
      </div>

      {/* Player rows */}
      <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-hidden">
        {state.leaderboard.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center" style={{ animation: 'tv-scale-in 0.4s ease both' }}>
              <Users size={72} className="mx-auto text-white/15 mb-4" />
              <div className="text-white/30 font-bold" style={{ fontSize: 38 }}>
                No players yet
              </div>
              <div className="text-white/20 font-bold mt-2" style={{ fontSize: 24 }}>
                Scan the QR code to join!
              </div>
            </div>
          </div>
        ) : (
          state.leaderboard.slice(0, maxPlayers).map((p, i) => {
            const isPodium = p.rank <= 3
            return (
              <div
                key={p.id}
                className="flex items-center rounded-2xl shrink-0"
                style={{
                  gap: 20,
                  paddingLeft: isPodium ? 28 : 20,
                  paddingRight: isPodium ? 28 : 20,
                  paddingTop: isPodium ? 16 : 12,
                  paddingBottom: isPodium ? 16 : 12,
                  background:
                    p.rank === 1
                      ? 'rgba(245,158,11,0.13)'
                      : p.rank === 2
                      ? 'rgba(156,163,175,0.10)'
                      : p.rank === 3
                      ? 'rgba(205,127,50,0.10)'
                      : 'rgba(255,255,255,0.04)',
                  border: `2px solid ${
                    p.rank === 1
                      ? 'rgba(245,158,11,0.40)'
                      : p.rank === 2
                      ? 'rgba(156,163,175,0.28)'
                      : p.rank === 3
                      ? 'rgba(205,127,50,0.28)'
                      : 'rgba(255,255,255,0.08)'
                  }`,
                  animation: `tv-fade-in-up 0.45s ease ${i * 75}ms both`,
                }}
              >
                {/* Rank badge */}
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{ minWidth: 52 }}
                >
                  <RankBadge rank={p.rank} />
                </div>

                {/* Name */}
                <span
                  className="flex-1 font-black text-white truncate"
                  style={{ fontSize: isPodium ? 44 : 36 }}
                >
                  {p.displayName}
                </span>

                {/* Correct count */}
                <span
                  className="text-white/35 font-bold shrink-0"
                  style={{ fontSize: 20 }}
                >
                  {p.correctCount} correct
                </span>

                {/* Streak */}
                {p.streak >= 3 && (
                  <span
                    className="flex items-center gap-1.5 shrink-0"
                    style={{ color: '#F97316' }}
                  >
                    <Zap size={isPodium ? 32 : 26} strokeWidth={2.5} />
                    <span
                      className="font-black"
                      style={{ fontSize: isPodium ? 30 : 24 }}
                    >
                      {p.streak}
                    </span>
                  </span>
                )}

                {/* Score */}
                <span
                  className="font-black tabular-nums shrink-0"
                  style={{
                    fontSize: isPodium ? 54 : 42,
                    color: theme.accentColor,
                    minWidth: 160,
                    textAlign: 'right',
                  }}
                >
                  {p.score.toLocaleString()}
                </span>
              </div>
            )
          })
        )}
      </div>

      {/* Bottom: QR join */}
      {!isKiosk && (
        <div className="shrink-0">
          <QRCodePanel url={joinUrl} gameCode={state.gameCode} accent={theme.accentColor} />
        </div>
      )}
    </div>
  )
}

// ─── Voting screen ────────────────────────────────────────────────────────────
function VotingScreen({
  state,
  theme,
  countdown,
}: {
  state: AlwaysOnState
  theme: (typeof THEMES)[ThemeKey]
  countdown: number
}) {
  const options = state.votingOptions ?? []
  const counts = state.voteCounts ?? {}
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  const maxVotes = Math.max(1, ...options.map((c) => counts[c] ?? 0))

  const VOTE_COLORS = ['#8B5CF6', '#06B6D4', '#F97316', '#EC4899']

  return (
    <div
      className="flex-1 flex flex-col items-center justify-center"
      style={{ padding: '40px 80px', gap: 40 }}
    >
      {/* Header */}
      <div className="text-center">
        <div
          className="font-black text-white"
          style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          Choose Next Category
        </div>
        <div
          className="font-bold mt-3"
          style={{ fontSize: 36, color: theme.accentColor }}
        >
          {state.playerCount} player{state.playerCount !== 1 ? 's' : ''} voting · closing in{' '}
          <span
            className={cn('font-black tabular-nums', countdown <= 5 && 'text-red-400')}
            style={{ color: countdown <= 5 ? '#EF4444' : 'inherit' }}
          >
            {countdown}s
          </span>
        </div>
      </div>

      {/* Category cards */}
      <div
        className="w-full grid grid-cols-2"
        style={{ gap: 24, maxWidth: 1200 }}
      >
        {options.map((cat, i) => {
          const votes = counts[cat] ?? 0
          const pct = total > 0 ? (votes / total) * 100 : 0
          const isLeading = votes === maxVotes && total > 0
          const color = VOTE_COLORS[i % VOTE_COLORS.length]!

          return (
            <div
              key={cat}
              className="rounded-3xl flex flex-col"
              style={{
                background: isLeading ? `${color}22` : 'rgba(255,255,255,0.05)',
                border: `3px solid ${isLeading ? color : 'rgba(255,255,255,0.12)'}`,
                padding: '28px 36px',
                gap: 16,
                transition: 'all 0.5s ease',
                animation: `tv-fade-in-up 0.4s ease ${i * 80}ms both`,
              }}
            >
              {/* Category name */}
              <div
                className="font-black text-white"
                style={{ fontSize: 48, lineHeight: 1.1 }}
              >
                {CATEGORY_LABELS[cat] ?? cat}
              </div>

              {/* Vote bar */}
              <div className="h-5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: color,
                    transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />
              </div>

              {/* Vote count */}
              <div className="flex items-center justify-between">
                <span
                  className="font-black tabular-nums"
                  style={{ fontSize: 36, color: isLeading ? color : 'rgba(255,255,255,0.4)' }}
                >
                  {votes} vote{votes !== 1 ? 's' : ''}
                </span>
                <span
                  className="font-bold tabular-nums"
                  style={{ fontSize: 28, color: 'rgba(255,255,255,0.3)' }}
                >
                  {Math.round(pct)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Prompt */}
      <div
        className="font-bold text-white/30 text-center"
        style={{ fontSize: 28 }}
      >
        Vote on your phone · scan the QR code to join
      </div>
    </div>
  )
}

// ─── Question screen ──────────────────────────────────────────────────────────
function QuestionScreen({
  state,
  theme,
  joinUrl,
  isKiosk,
  displayPhase,
}: {
  state: AlwaysOnState
  theme: (typeof THEMES)[ThemeKey]
  joinUrl: string
  isKiosk?: boolean
  displayPhase: DisplayPhase
}) {
  const { question } = state
  const revealing = displayPhase === 'revealing'

  return (
    <div className="flex-1 flex flex-col" style={{ minHeight: 0 }}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-10 py-5 shrink-0">
        <div className="flex items-center gap-5">
          <div
            className="flex items-center gap-2.5 text-white font-black"
            style={{ fontSize: 30 }}
          >
            <Target size={30} strokeWidth={2} />
            AI Trivia Arena
          </div>
          <span className="text-white/30 font-bold" style={{ fontSize: 26 }}>
            Q#{state.questionNumber}
          </span>
        </div>

        <div className="flex items-center gap-8">
          {revealing ? (
            <div
              className="flex items-center gap-3 font-black"
              style={{
                fontSize: 38,
                color: '#10B981',
                animation: 'tv-times-up 1.8s ease-in-out infinite',
              }}
            >
              <CheckCircle size={40} strokeWidth={2.5} />
              Time&apos;s Up!
            </div>
          ) : (
            <CountdownTimer
              startedAt={state.questionStartedAt}
              duration={state.timePerQuestion}
              color={theme.timerColor}
            />
          )}

          <div className="text-white/45 font-bold text-right" style={{ fontSize: 22 }}>
            <div>{state.playerCount} player{state.playerCount !== 1 ? 's' : ''}</div>
            <div>online</div>
          </div>
        </div>
      </div>

      {/* Question text */}
      <div className="px-10 flex-1 flex flex-col gap-5" style={{ minHeight: 0 }}>
        <div
          className={cn(
            'rounded-3xl px-10 py-8 text-white font-bold text-center shrink-0',
            theme.cardClass,
          )}
          style={{
            fontSize: question && question.text.length > 100 ? 44 : 56,
            lineHeight: 1.25,
          }}
        >
          {question?.text ?? 'Loading question...'}
        </div>

        {/* Answer grid */}
        {question && (
          <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
            {question.answers.map((answer, i) => (
              <AnswerCard
                key={i}
                answer={answer}
                label={theme.answerLabels[i]}
                color={theme.answerColors[i]}
                phase={displayPhase}
                isCorrect={answer === question.correctAnswer}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar: QR + leaderboard strip */}
      {!isKiosk && (
        <div className="flex items-center gap-5 px-10 py-4 border-t border-white/10 shrink-0">
          <QRCodePanel
            url={joinUrl}
            gameCode={state.gameCode}
            accent={theme.accentColor}
            compact
          />
          <div className="flex-1 min-w-0">
            <LeaderboardStrip players={state.leaderboard} accent={theme.accentColor} />
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main TV component ────────────────────────────────────────────────────────
function TVPageContent() {
  const searchParams = useSearchParams()
  const isKiosk = searchParams.get('kiosk') === 'true'

  const [gameState, setGameState] = useState<AlwaysOnState | null>(null)
  const [displayPhase, setDisplayPhase] = useState<DisplayPhase>('question')
  const [error, setError] = useState<string | null>(null)

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
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

      // ── Display phase state machine ──────────────────────────────────────
      if (data.status === 'showing_leaderboard' && prevStatusRef.current === 'active') {
        // Just transitioned → show answer reveal first
        setDisplayPhase('revealing')
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        revealTimerRef.current = setTimeout(() => {
          setDisplayPhase('leaderboard')
        }, 2600)
      } else if (data.status === 'voting') {
        // Voting phase — show immediately
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        setDisplayPhase('voting')
      } else if (data.status === 'active') {
        // New question started → reset
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        setDisplayPhase('question')
      }
      // Still showing_leaderboard and already in leaderboard/revealing — don't reset

      prevStatusRef.current = data.status
    } catch {
      // Network hiccup — retry on next interval
    }
  }, [])

  // Auto-start on mount — no tap required
  useEffect(() => {
    poll()
    pollRef.current = setInterval(poll, 1500)
    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
    }
  }, [poll])

  const gs = gameState
  const themeKey = (gs?.theme ?? 'classic') as ThemeKey
  const theme = THEMES[themeKey] ?? THEMES.classic
  const joinUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://aitriviaarena.com'}/join`

  // Milestone = every 5th question (Q5, Q10, Q15…) gets the full podium board
  const isMilestone =
    gs !== null && gs.questionNumber > 0 && gs.questionNumber % 5 === 0

  // Leaderboard countdown
  const [lbCountdown, setLbCountdown] = useState(0)
  useEffect(() => {
    if (gs?.status !== 'showing_leaderboard' || !gs.leaderboardEndsAt) { setLbCountdown(0); return }
    const tick = () => {
      setLbCountdown(Math.max(0, Math.ceil((new Date(gs.leaderboardEndsAt!).getTime() - Date.now()) / 1000)))
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [gs?.status, gs?.leaderboardEndsAt])

  // Voting countdown
  const [votingCountdown, setVotingCountdown] = useState(15)
  useEffect(() => {
    if (gs?.status !== 'voting' || !gs.votingDeadline) return
    const tick = () => {
      setVotingCountdown(Math.max(0, Math.ceil((new Date(gs.votingDeadline!).getTime() - Date.now()) / 1000)))
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [gs?.status, gs?.votingDeadline])

  // ── Loading ─────────────────────────────────────────────────────────────────
  if (!gs && !error) {
    return (
      <div className={cn('w-screen h-screen flex items-center justify-center overflow-hidden', theme.bgClass)}>
        <div
          className="flex items-center gap-3 text-white/50 font-bold"
          style={{ fontSize: 36 }}
        >
          <Loader2 size={36} className="animate-spin" />
          Loading game...
        </div>
      </div>
    )
  }

  // ── Error state ─────────────────────────────────────────────────────────────
  if (error) {
    return (
      <div
        className={cn(
          'w-screen h-screen flex flex-col items-center justify-center overflow-hidden',
          theme.bgClass,
        )}
      >
        <div className="text-center space-y-4">
          <AlertTriangle size={72} className="mx-auto text-yellow-400" />
          <div className="text-white font-black" style={{ fontSize: 42 }}>
            Setup required
          </div>
          <div className="text-white/55 font-bold" style={{ fontSize: 26 }}>
            {error}
          </div>
          <div className="text-white/35" style={{ fontSize: 20 }}>
            Visit <strong>/admin → Seed Questions</strong> to add questions to the pool
          </div>
        </div>
      </div>
    )
  }

  // ── Game ─────────────────────────────────────────────────────────────────────
  return (
    <div
      className={cn('w-screen h-screen flex flex-col overflow-hidden select-none', theme.bgClass)}
      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      {/* Question screen — shown during 'question' and 'revealing' phases */}
      {(displayPhase === 'question' || displayPhase === 'revealing') && (
        <QuestionScreen
          state={gs!}
          theme={theme}
          joinUrl={joinUrl}
          isKiosk={isKiosk}
          displayPhase={displayPhase}
        />
      )}

      {/* Leaderboard — shown after reveal animation completes */}
      {displayPhase === 'leaderboard' && (
        <LeaderboardScreen
          state={gs!}
          theme={theme}
          joinUrl={joinUrl}
          countdown={lbCountdown}
          isKiosk={isKiosk}
          isMilestone={isMilestone}
        />
      )}

      {/* Voting — category pick between milestones */}
      {displayPhase === 'voting' && (
        <VotingScreen
          state={gs!}
          theme={theme}
          countdown={votingCountdown}
        />
      )}
    </div>
  )
}

export default function TVPage() {
  return (
    <Suspense fallback={<div className="w-screen h-screen bg-[#0A0A14]" />}>
      <TVPageContent />
    </Suspense>
  )
}
