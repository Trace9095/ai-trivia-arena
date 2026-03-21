'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { Playfair_Display } from 'next/font/google'
import QRCode from 'qrcode'
import { cn } from '@/lib/utils'
import {
  Trophy,
  CheckCircle,
  AlertTriangle,
  Loader2,
  Crown,
  Medal,
  Users,
  Zap,
  Vote,
  Gift,
  Music,
  Instagram,
  UtensilsCrossed,
  Mountain,
  GlassWater,
  Beer,
  Sunrise,
  type LucideIcon,
} from 'lucide-react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['italic', 'normal'],
  display: 'swap',
  variable: '--font-playfair',
})

// ─── RT Brand tokens ──────────────────────────────────────────────────────────
const RT = {
  gold: '#D4A853',
  goldLight: '#E8C97A',
  goldDim: '#A07830',
  bg: '#0D1117',
  card: '#131920',
  cardBorder: 'rgba(212,168,83,0.20)',
  textDim: 'rgba(255,255,255,0.45)',
  textMuted: 'rgba(255,255,255,0.22)',
} as const

// ─── RT Logo inline SVG ───────────────────────────────────────────────────────
function RTLogo({ height = 52 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rooftop Social"
    >
      <path d="M8 8 L8 28 M8 8 L28 8" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" />
      <path d="M292 8 L292 28 M292 8 L312 8" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 72 L8 52 M8 72 L28 72" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" />
      <path d="M292 72 L292 52 M292 72 L312 72" stroke="#D4A853" strokeWidth="3" strokeLinecap="round" />
      <text x="160" y="28" textAnchor="middle" fill="rgba(212,168,83,0.55)" fontSize="11"
        fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="4">
        WHITEWATER
      </text>
      <text x="160" y="52" textAnchor="middle" fill="#D4A853" fontSize="26"
        fontFamily="system-ui, sans-serif" fontWeight="900" letterSpacing="6">
        ROOFTOP
      </text>
      <text x="160" y="68" textAnchor="middle" fill="#D4A853" fontSize="13"
        fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="8">
        SOCIAL
      </text>
    </svg>
  )
}

// ─── Category badge ───────────────────────────────────────────────────────────
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
  mixed: 'Mixed',
}

// Category icons
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  sports: <span style={{ fontSize: 22 }}>🏆</span>,
  music: <Music size={22} />,
  food_drink: <UtensilsCrossed size={22} />,
  colorado: <Mountain size={22} />,
  movies_tv: <span style={{ fontSize: 22 }}>🎬</span>,
  history: <span style={{ fontSize: 22 }}>📜</span>,
  science: <span style={{ fontSize: 22 }}>🔬</span>,
  geography: <Mountain size={22} />,
  pop_culture: <span style={{ fontSize: 22 }}>⭐</span>,
  technology: <span style={{ fontSize: 22 }}>💻</span>,
  general: <span style={{ fontSize: 22 }}>🧠</span>,
  mixed: <span style={{ fontSize: 22 }}>🎲</span>,
}

// ─── RT Daily Specials ────────────────────────────────────────────────────────
const RT_SPECIALS: { day: string; label: string; desc: string; Icon: LucideIcon }[] = [
  { day: 'MON', label: 'Margarita Monday', desc: 'BOGO margaritas all night', Icon: GlassWater },
  { day: 'TUE', label: 'Taste Tuesday', desc: '20% off all shareables', Icon: UtensilsCrossed },
  { day: 'WED', label: "Locals' Day", desc: 'Fremont County ID gets a treat', Icon: Mountain },
  { day: 'THU', label: 'Thirsty Thursday', desc: '20% off all cocktails', Icon: GlassWater },
  { day: 'FRI', label: 'Friday Kickoff', desc: '$5 domestics · $25 buckets', Icon: Beer },
  { day: 'SAT', label: 'Live Music Night', desc: 'Local artists every Saturday', Icon: Music },
  { day: 'SUN', label: 'Sunday Funday', desc: '$8 mimosas all afternoon', Icon: Sunrise },
]
const DAY_KEYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] as const

// ─── RT Promo Slides ──────────────────────────────────────────────────────────
function PromoSlide({ slide, visible }: { slide: number; visible: boolean }) {
  const today = new Date().getDay()
  const specialIndex = today === 0 ? 6 : today - 1
  const todaySpecial = RT_SPECIALS[specialIndex]!

  const slides = [
    // Tonight's Special
    <div key="special" className="flex flex-col items-center justify-center text-center h-full px-16 gap-6">
      <div style={{ color: RT.gold, fontSize: 18, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.7 }}>
        Tonight&apos;s Special
      </div>
      <div
        className={playfair.className}
        style={{ color: RT.gold, fontSize: 88, fontStyle: 'italic', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em' }}
      >
        {todaySpecial.label}
      </div>
      <div style={{ color: 'white', fontSize: 36, fontWeight: 600, opacity: 0.85 }}>
        {todaySpecial.desc}
      </div>
      <div style={{ color: RT.textDim, fontSize: 24, fontWeight: 600, marginTop: 8 }}>
        Ask your server
      </div>
    </div>,

    // Weekly Specials
    <div key="weekly" className="flex flex-col h-full px-12 py-10 gap-5">
      <div style={{ color: RT.gold, fontSize: 20, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.7 }}>
        Weekly Specials
      </div>
      <div
        className={playfair.className}
        style={{ color: 'white', fontSize: 52, fontStyle: 'italic', fontWeight: 800, lineHeight: 1.1, marginBottom: 6 }}
      >
        Something special,<br />every night.
      </div>
      <div className="grid grid-cols-2 gap-3">
        {RT_SPECIALS.map((s) => {
          const isToday = s.day === DAY_KEYS[today]
          return (
            <div
              key={s.day}
              className="rounded-2xl flex items-center gap-3"
              style={{
                background: isToday ? `${RT.gold}18` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${isToday ? RT.goldDim : 'rgba(255,255,255,0.08)'}`,
                padding: '10px 14px',
              }}
            >
              <span style={{ color: RT.gold, fontWeight: 800, fontSize: 14, minWidth: 34, letterSpacing: 1 }}>{s.day}</span>
              <span style={{ color: 'white', fontSize: 15, fontWeight: 600, opacity: 0.85 }}>{s.label}</span>
            </div>
          )
        })}
      </div>
    </div>,

    // Follow on Instagram
    <div key="social" className="flex flex-col items-center justify-center text-center h-full px-16 gap-8">
      <Instagram size={72} style={{ color: RT.gold }} />
      <div
        className={playfair.className}
        style={{ color: 'white', fontSize: 72, fontStyle: 'italic', fontWeight: 900, lineHeight: 1.05 }}
      >
        Follow the vibe.
      </div>
      <div style={{ color: RT.gold, fontSize: 40, fontWeight: 800, letterSpacing: '0.05em' }}>
        @rooftopsocial
      </div>
      <div style={{ color: RT.textDim, fontSize: 24, fontWeight: 600 }}>
        Tag us in your trivia night photo
      </div>
    </div>,

    // Gift Cards
    <div key="gift" className="flex flex-col items-center justify-center text-center h-full px-16 gap-8">
      <Gift size={80} style={{ color: RT.gold }} />
      <div
        className={playfair.className}
        style={{ color: RT.gold, fontSize: 80, fontStyle: 'italic', fontWeight: 900, lineHeight: 1 }}
      >
        Gift Cards
      </div>
      <div style={{ color: 'white', fontSize: 36, fontWeight: 600, opacity: 0.85 }}>
        The perfect gift for any occasion
      </div>
      <div style={{
        background: RT.gold, color: '#0D1117', fontWeight: 900, fontSize: 26,
        letterSpacing: '0.1em', padding: '14px 40px', borderRadius: 16, textTransform: 'uppercase',
      }}>
        Ask your server
      </div>
    </div>,
  ]

  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {slides[slide % slides.length]}
    </div>
  )
}

function PromoCarousel({ visible }: { visible: boolean }) {
  const [slide, setSlide] = useState(0)
  const SLIDE_DURATION = 5000
  const SLIDE_COUNT = 4

  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), SLIDE_DURATION)
    return () => clearInterval(id)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ flex: 1, background: RT.card, border: `1px solid ${RT.cardBorder}`, minHeight: 0 }}
    >
      {Array.from({ length: SLIDE_COUNT }, (_, i) => (
        <PromoSlide key={i} slide={i} visible={i === slide} />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2" style={{ zIndex: 10 }}>
        {Array.from({ length: SLIDE_COUNT }, (_, i) => (
          <div
            key={i}
            style={{
              width: i === slide ? 28 : 8, height: 8, borderRadius: 4,
              background: i === slide ? RT.gold : 'rgba(255,255,255,0.25)',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
type DisplayPhase = 'question' | 'revealing' | 'leaderboard' | 'voting'

interface AlwaysOnState {
  gameCode: string
  status: 'active' | 'showing_leaderboard' | 'voting'
  questionNumber: number
  category: string
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

// ─── QR Panel ─────────────────────────────────────────────────────────────────
function QRPanel({ url, gameCode, compact = false }: { url: string; gameCode: string; compact?: boolean }) {
  const [src, setSrc] = useState('')
  const size = compact ? 92 : 116

  useEffect(() => {
    QRCode.toDataURL(url, { width: size * 2, margin: 1, color: { light: '#ffffff', dark: '#111111' } })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [url, size])

  return (
    <div
      className="flex items-center gap-4 rounded-2xl shrink-0"
      style={{
        background: 'rgba(212,168,83,0.08)',
        border: `1.5px solid ${RT.cardBorder}`,
        padding: compact ? '10px 16px' : '16px 20px',
      }}
    >
      <div className="bg-white rounded-xl shrink-0" style={{ padding: 6 }}>
        {src
          ? <img src={src} alt="QR code to join game" style={{ width: size, height: size, display: 'block' }} />
          : <div className="animate-pulse rounded-lg" style={{ width: size, height: size, background: '#e5e7eb' }} />
        }
      </div>
      <div className="flex flex-col gap-1">
        <span style={{ fontSize: compact ? 13 : 14, color: RT.textMuted, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scan to play
        </span>
        <span style={{ fontSize: compact ? 16 : 19, color: 'white', fontWeight: 700, lineHeight: 1.3 }}>
          aitriviaarena.com/join
        </span>
        <span style={{ fontSize: compact ? 24 : 32, color: RT.gold, fontWeight: 900, letterSpacing: '0.18em', lineHeight: 1, marginTop: 2 }}>
          {gameCode}
        </span>
      </div>
    </div>
  )
}

// ─── Countdown Timer ──────────────────────────────────────────────────────────
function CountdownTimer({ startedAt, duration }: { startedAt: string | null; duration: number }) {
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
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn('font-black tabular-nums', isUrgent && 'animate-pulse')}
        style={{ fontSize: 88, color: isUrgent ? '#EF4444' : RT.gold, lineHeight: 1 }}
      >
        {Math.ceil(timeLeft)}
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden" style={{ width: 140 }}>
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: isUrgent ? '#EF4444' : RT.gold,
            transition: 'width 0.2s linear, background 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}

// ─── Answer Card ──────────────────────────────────────────────────────────────
const RT_ANSWER_COLORS = ['#C0392B', '#2471A3', '#1E8449', '#D4A853']
const RT_ANSWER_LABELS = ['A', 'B', 'C', 'D']

function AnswerCard({
  answer, label, color, phase, isCorrect, index,
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

  // Font size: never below 36px even for very long answers
  const fontSize = answer.length > 60 ? 36 : answer.length > 40 ? 40 : answer.length > 25 ? 44 : 50

  return (
    <div
      className="rounded-3xl flex items-center gap-5 px-8"
      style={{
        background: correct ? `rgba(212,168,83,0.18)` : wrong ? 'rgba(17,24,39,0.65)' : color + 'CC',
        border: `4px solid ${correct ? RT.gold : wrong ? '#374151' : color}`,
        minHeight: 120,
        opacity: wrong ? 0.38 : 1,
        transform: correct ? 'scale(1.04)' : 'scale(1)',
        transition: `
          background 0.65s cubic-bezier(0.4,0,0.2,1),
          border-color 0.65s cubic-bezier(0.4,0,0.2,1),
          opacity 0.65s cubic-bezier(0.4,0,0.2,1),
          transform 0.65s cubic-bezier(0.4,0,0.2,1)
        `,
        transitionDelay: wrong ? `${index * 70}ms` : '0ms',
        animation: correct
          ? 'rt-correct-pop 0.7s cubic-bezier(0.4,0,0.2,1) forwards, rt-gold-pulse 2s ease-in-out 0.6s infinite'
          : 'none',
        boxShadow: correct ? `0 0 36px ${RT.gold}55, 0 0 90px ${RT.gold}22` : 'none',
      }}
    >
      {/* Letter label */}
      <span
        className="font-black shrink-0"
        style={{
          fontSize: 60,
          minWidth: 64,
          lineHeight: 1,
          color: correct ? RT.gold : wrong ? '#4b5563' : 'white',
          transition: 'color 0.65s ease',
        }}
      >
        {label}
      </span>

      {/* Answer text */}
      <span
        className="font-bold flex-1"
        style={{
          fontSize,
          lineHeight: 1.2,
          color: correct ? RT.goldLight : wrong ? '#6b7280' : 'white',
          transition: 'color 0.65s ease',
        }}
      >
        {answer}
      </span>

      {/* Gold check on correct */}
      {correct && (
        <span className="shrink-0 ml-2">
          <CheckCircle size={52} color={RT.gold} strokeWidth={2.5} />
        </span>
      )}
    </div>
  )
}

// ─── Rank Badge ───────────────────────────────────────────────────────────────
function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Crown size={48} style={{ color: RT.gold }} />
  if (rank === 2) return <Medal size={44} style={{ color: '#9CA3AF' }} />
  if (rank === 3) return <Medal size={44} style={{ color: '#CD7F32' }} />
  return (
    <span className="font-black tabular-nums" style={{ fontSize: 34, minWidth: 48, textAlign: 'center', lineHeight: 1, color: RT.textDim }}>
      {rank}
    </span>
  )
}

// ─── Leaderboard strip (bottom bar) ──────────────────────────────────────────
function LeaderboardStrip({ players }: { players: AlwaysOnState['leaderboard'] }) {
  return (
    <div className="flex items-center gap-5 overflow-hidden min-w-0">
      <span className="flex items-center gap-2 font-bold uppercase tracking-widest shrink-0" style={{ fontSize: 18, color: RT.textMuted }}>
        <Trophy size={18} style={{ color: RT.gold }} />
        Top players:
      </span>
      {players.slice(0, 5).map((p, i) => (
        <span key={p.id} className="flex items-center gap-1.5 shrink-0" style={{ fontSize: 22 }}>
          <span style={{ color: RT.textDim, fontWeight: 700 }}>{i + 1}.</span>
          <span className="text-white font-bold truncate max-w-[200px]">{p.displayName}</span>
          <span className="font-black tabular-nums" style={{ color: RT.gold }}>{p.score.toLocaleString()}</span>
        </span>
      ))}
    </div>
  )
}

// ─── Voting Screen ────────────────────────────────────────────────────────────
function RTVotingScreen({ state, countdown }: { state: AlwaysOnState; countdown: number }) {
  const options = state.votingOptions ?? []
  const counts = state.voteCounts ?? {}
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  const maxVotes = Math.max(1, ...options.map((c) => counts[c] ?? 0))
  const VOTE_COLORS = [RT.gold, '#06B6D4', '#F97316', '#EC4899']

  return (
    <div className="flex-1 flex flex-col items-center justify-center" style={{ padding: '40px 80px', gap: 40 }}>
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2" style={{ color: RT.gold, fontSize: 22, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          <Vote size={26} />
          Vote for next category
        </div>
        <div
          className={playfair.className}
          style={{ color: 'white', fontSize: 72, fontStyle: 'italic', fontWeight: 900, lineHeight: 1.05 }}
        >
          You decide what&apos;s next.
        </div>
        <div style={{ color: RT.textDim, fontSize: 30, fontWeight: 600, marginTop: 10 }}>
          {state.playerCount} player{state.playerCount !== 1 ? 's' : ''} voting · closes in{' '}
          <span className="font-black tabular-nums" style={{ color: countdown <= 5 ? '#EF4444' : RT.gold }}>
            {countdown}s
          </span>
        </div>
      </div>

      <div className="w-full grid grid-cols-2" style={{ gap: 24, maxWidth: 1300 }}>
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
                background: isLeading ? `${color}1A` : RT.card,
                border: `2.5px solid ${isLeading ? color : RT.cardBorder}`,
                padding: '28px 36px', gap: 16,
                transition: 'all 0.5s ease',
                animation: `rt-fade-in-up 0.4s ease ${i * 80}ms both`,
              }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: color }}>{CATEGORY_ICONS[cat] ?? null}</span>
                <div className="font-black text-white" style={{ fontSize: 50, lineHeight: 1.1 }}>
                  {CATEGORY_LABELS[cat] ?? cat}
                </div>
              </div>
              <div className="h-5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color, transition: 'width 0.7s cubic-bezier(0.4,0,0.2,1)' }} />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-black tabular-nums" style={{ fontSize: 38, color: isLeading ? color : RT.textDim }}>
                  {votes} vote{votes !== 1 ? 's' : ''}
                </span>
                <span className="font-bold tabular-nums" style={{ fontSize: 28, color: RT.textMuted }}>
                  {Math.round(pct)}%
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="font-bold text-center" style={{ fontSize: 28, color: RT.textMuted }}>
        Vote from your phone · scan the QR code below to join
      </div>
    </div>
  )
}

// ─── Leaderboard Screen ───────────────────────────────────────────────────────
function RTLeaderboardScreen({
  state, joinUrl, countdown, isMilestone,
}: {
  state: AlwaysOnState
  joinUrl: string
  countdown: number
  isMilestone: boolean
}) {
  const maxPlayers = isMilestone ? 8 : 6

  return (
    <div className="flex-1 flex gap-6" style={{ minHeight: 0, padding: '28px 48px' }}>
      {/* Main leaderboard column */}
      <div className="flex-1 flex flex-col gap-5 min-w-0" style={{ minHeight: 0 }}>
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-white font-black" style={{ fontSize: isMilestone ? 60 : 50 }}>
            <Trophy size={isMilestone ? 60 : 50} style={{ color: RT.gold }} strokeWidth={2} />
            {isMilestone ? (
              <span>
                Round Complete
                <span className="ml-4 font-bold" style={{ fontSize: 28, color: RT.gold, opacity: 0.7 }}>
                  Q#{state.questionNumber}
                </span>
              </span>
            ) : (
              <span>
                Leaderboard
                <span className="ml-4 font-bold" style={{ fontSize: 26, color: RT.gold, opacity: 0.6 }}>
                  Q#{state.questionNumber}
                </span>
              </span>
            )}
          </div>
          <div className="text-right">
            <div style={{ color: RT.textMuted, fontSize: 20, fontWeight: 700 }}>Next question in</div>
            <div className="font-black tabular-nums" style={{ fontSize: 70, color: RT.gold, lineHeight: 1 }}>
              {countdown}s
            </div>
          </div>
        </div>

        {/* Player rows */}
        <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-hidden">
          {state.leaderboard.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center" style={{ animation: 'rt-scale-in 0.4s ease both' }}>
                <Users size={80} className="mx-auto mb-4" style={{ color: RT.textMuted }} />
                <div className="font-bold" style={{ fontSize: 40, color: RT.textDim }}>No players yet</div>
                <div className="font-bold mt-2" style={{ fontSize: 24, color: RT.textMuted }}>
                  Scan the QR code to be first!
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
                    paddingLeft: isPodium ? 28 : 20, paddingRight: isPodium ? 28 : 20,
                    paddingTop: isPodium ? 18 : 12, paddingBottom: isPodium ? 18 : 12,
                    background: p.rank === 1 ? 'rgba(212,168,83,0.14)' : p.rank === 2 ? 'rgba(156,163,175,0.09)' : p.rank === 3 ? 'rgba(205,127,50,0.09)' : 'rgba(255,255,255,0.03)',
                    border: `2px solid ${p.rank === 1 ? 'rgba(212,168,83,0.40)' : p.rank === 2 ? 'rgba(156,163,175,0.24)' : p.rank === 3 ? 'rgba(205,127,50,0.24)' : 'rgba(255,255,255,0.07)'}`,
                    animation: `rt-fade-in-up 0.45s ease ${i * 75}ms both`,
                  }}
                >
                  <div className="shrink-0 flex items-center justify-center" style={{ minWidth: 56 }}>
                    <RankBadge rank={p.rank} />
                  </div>
                  <span className="flex-1 font-black text-white truncate" style={{ fontSize: isPodium ? 48 : 38 }}>
                    {p.displayName}
                  </span>
                  <span style={{ fontSize: 22, color: RT.textDim, fontWeight: 600 }} className="shrink-0">
                    {p.correctCount} correct
                  </span>
                  {p.streak >= 3 && (
                    <span className="flex items-center gap-1.5 shrink-0" style={{ color: '#F97316' }}>
                      <Zap size={isPodium ? 34 : 28} strokeWidth={2.5} />
                      <span className="font-black" style={{ fontSize: isPodium ? 32 : 26 }}>{p.streak}</span>
                    </span>
                  )}
                  <span
                    className="font-black tabular-nums shrink-0"
                    style={{ fontSize: isPodium ? 56 : 44, color: RT.gold, minWidth: 170, textAlign: 'right' }}
                  >
                    {p.score.toLocaleString()}
                  </span>
                </div>
              )
            })
          )}
        </div>

        {/* QR join */}
        <div className="shrink-0">
          <QRPanel url={joinUrl} gameCode={state.gameCode} />
        </div>
      </div>

      {/* Promo column (milestone only) */}
      {isMilestone && (
        <div className="flex flex-col shrink-0" style={{ width: 500, minHeight: 0 }}>
          <PromoCarousel visible />
        </div>
      )}
    </div>
  )
}

// ─── Question Screen ──────────────────────────────────────────────────────────
function RTQuestionScreen({
  state, joinUrl, displayPhase,
}: {
  state: AlwaysOnState
  joinUrl: string
  displayPhase: DisplayPhase
}) {
  const { question } = state
  const revealing = displayPhase === 'revealing'
  const categoryLabel = CATEGORY_LABELS[state.category] ?? state.category

  // Adaptive font size for questions — minimum 48px for readability at 15+ feet
  let questionFontSize = 64
  if (question) {
    if (question.text.length > 160) questionFontSize = 48
    else if (question.text.length > 110) questionFontSize = 52
    else if (question.text.length > 70) questionFontSize = 58
  }

  return (
    <div
      className="flex-1 flex flex-col"
      style={{ minHeight: 0, animation: 'rt-question-in 0.5s cubic-bezier(0.4,0,0.2,1) both' }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-10 py-5 shrink-0">
        <div className="flex items-center gap-5">
          <RTLogo height={54} />
          <div className="flex flex-col gap-0.5">
            {/* Category badge */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-1"
              style={{
                background: `${RT.gold}18`,
                border: `1.5px solid ${RT.cardBorder}`,
                color: RT.gold,
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '0.05em',
                width: 'fit-content',
              }}
            >
              <span>{CATEGORY_ICONS[state.category] ?? null}</span>
              <span>{categoryLabel}</span>
            </div>
            <span style={{ color: RT.textMuted, fontSize: 20, fontWeight: 600 }}>
              Question #{state.questionNumber}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {revealing ? (
            <div
              className="flex items-center gap-3 font-black"
              style={{ fontSize: 42, color: RT.gold, animation: 'rt-times-up 1.8s ease-in-out infinite' }}
            >
              <CheckCircle size={44} strokeWidth={2.5} style={{ color: RT.gold }} />
              Time&apos;s Up!
            </div>
          ) : (
            <CountdownTimer startedAt={state.questionStartedAt} duration={state.timePerQuestion} />
          )}
          <div className="text-right" style={{ fontSize: 22, color: RT.textDim, fontWeight: 600 }}>
            <div>{state.playerCount} player{state.playerCount !== 1 ? 's' : ''}</div>
            <div>playing along</div>
          </div>
        </div>
      </div>

      {/* Question text */}
      <div className="px-10 flex-1 flex flex-col gap-5" style={{ minHeight: 0 }}>
        <div
          className={cn('rounded-3xl px-12 py-8 text-white font-bold text-center shrink-0', playfair.className)}
          style={{
            fontSize: questionFontSize,
            lineHeight: 1.25,
            fontStyle: 'italic',
            background: RT.card,
            border: `2px solid ${RT.cardBorder}`,
            animation: revealing ? 'none' : 'rt-question-text-in 0.55s cubic-bezier(0.4,0,0.2,1) 0.1s both',
          }}
        >
          {question?.text ?? 'Loading question...'}
        </div>

        {/* Answer grid — 2×2 */}
        {question && (
          <div className="grid grid-cols-2 gap-5 flex-1 min-h-0">
            {question.answers.map((answer, i) => (
              <AnswerCard
                key={i}
                answer={answer}
                label={RT_ANSWER_LABELS[i] ?? String.fromCharCode(65 + i)}
                color={RT_ANSWER_COLORS[i] ?? '#888'}
                phase={displayPhase}
                isCorrect={answer === question.correctAnswer}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar: QR + leaderboard strip */}
      <div
        className="flex items-center gap-5 px-10 py-4 shrink-0"
        style={{ borderTop: `1px solid ${RT.cardBorder}` }}
      >
        <QRPanel url={joinUrl} gameCode={state.gameCode} compact />
        <div className="flex-1 min-w-0">
          <LeaderboardStrip players={state.leaderboard} />
        </div>
      </div>
    </div>
  )
}

// ─── Main RT TV Component ─────────────────────────────────────────────────────
function RTTVContent() {
  const [gameState, setGameState] = useState<AlwaysOnState | null>(null)
  const [displayPhase, setDisplayPhase] = useState<DisplayPhase>('question')
  const [error, setError] = useState<string | null>(null)
  const [votingCountdown, setVotingCountdown] = useState(15)
  const [questionKey, setQuestionKey] = useState(0)

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const revealTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevStatusRef = useRef<string>('')
  const prevQuestionNumberRef = useRef<number>(0)

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

      // Bump question key to trigger entrance animation on new questions
      if (data.status === 'active' && data.questionNumber !== prevQuestionNumberRef.current) {
        setQuestionKey((k) => k + 1)
        prevQuestionNumberRef.current = data.questionNumber
      }

      // Display phase state machine
      if (data.status === 'showing_leaderboard' && prevStatusRef.current === 'active') {
        // Transition: show answer reveal first for 5 seconds, then leaderboard
        setDisplayPhase('revealing')
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        revealTimerRef.current = setTimeout(() => setDisplayPhase('leaderboard'), 5000)
      } else if (data.status === 'voting') {
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        setDisplayPhase('voting')
      } else if (data.status === 'active') {
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
        setDisplayPhase('question')
      }

      prevStatusRef.current = data.status
    } catch {
      // Network blip — retry on next poll
    }
  }, [])

  // Auto-start on mount — no tap, no click, no interaction required
  useEffect(() => {
    poll()
    pollRef.current = setInterval(poll, 1500)
    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
      if (revealTimerRef.current) clearTimeout(revealTimerRef.current)
    }
  }, [poll])

  // Voting countdown
  useEffect(() => {
    if (gameState?.status !== 'voting' || !gameState.votingDeadline) return
    const tick = () => {
      setVotingCountdown(Math.max(0, Math.ceil((new Date(gameState.votingDeadline!).getTime() - Date.now()) / 1000)))
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [gameState?.status, gameState?.votingDeadline])

  const gs = gameState
  const joinUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://aitriviaarena.com'}/join`
  const isMilestone = gs !== null && gs.questionNumber > 0 && gs.questionNumber % 5 === 0

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

  const rootStyle: React.CSSProperties = {
    background: RT.bg,
    color: 'white',
    fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
  }

  // Loading
  if (!gs && !error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center overflow-hidden" style={rootStyle}>
        <div className="flex flex-col items-center gap-6">
          <RTLogo height={72} />
          <div className="flex items-center gap-3 font-bold" style={{ fontSize: 34, color: RT.textDim }}>
            <Loader2 size={34} className="animate-spin" style={{ color: RT.gold }} />
            Loading Trivia Night...
          </div>
        </div>
      </div>
    )
  }

  // Error
  if (error) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden" style={rootStyle}>
        <RTLogo height={72} />
        <AlertTriangle size={64} className="mt-8 mb-4" style={{ color: RT.gold }} />
        <div className="font-black text-white" style={{ fontSize: 40 }}>Setup required</div>
        <div className="font-bold mt-2" style={{ fontSize: 24, color: RT.textDim }}>{error}</div>
        <div style={{ fontSize: 18, color: RT.textMuted, marginTop: 8 }}>
          Visit <strong>/admin</strong> to seed questions, then this page will auto-start.
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn('w-screen h-screen flex flex-col overflow-hidden select-none', playfair.variable)}
      style={rootStyle}
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes rt-correct-pop {
          0%   { transform: scale(1); }
          35%  { transform: scale(1.07); }
          65%  { transform: scale(1.04); }
          100% { transform: scale(1.04); }
        }
        @keyframes rt-gold-pulse {
          0%, 100% { box-shadow: 0 0 32px rgba(212,168,83,0.55), 0 0 80px rgba(212,168,83,0.25); }
          50%       { box-shadow: 0 0 60px rgba(212,168,83,0.80), 0 0 130px rgba(212,168,83,0.42); }
        }
        @keyframes rt-fade-in-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rt-scale-in {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes rt-times-up {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        @keyframes rt-question-in {
          from { opacity: 0; transform: translateY(18px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes rt-question-text-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Question / Answer reveal — key triggers entrance animation on each new question */}
      {(displayPhase === 'question' || displayPhase === 'revealing') && (
        <RTQuestionScreen
          key={questionKey}
          state={gs!}
          joinUrl={joinUrl}
          displayPhase={displayPhase}
        />
      )}

      {/* Full leaderboard (post-reveal) */}
      {displayPhase === 'leaderboard' && (
        <RTLeaderboardScreen
          state={gs!}
          joinUrl={joinUrl}
          countdown={lbCountdown}
          isMilestone={isMilestone}
        />
      )}

      {/* Category voting */}
      {displayPhase === 'voting' && (
        <RTVotingScreen state={gs!} countdown={votingCountdown} />
      )}
    </div>
  )
}

export default function RTTVPage() {
  return (
    <Suspense fallback={
      <div className="w-screen h-screen flex items-center justify-center" style={{ background: '#0D1117' }}>
        <div style={{ color: '#D4A853', fontWeight: 700, fontSize: 28 }}>Loading Rooftop Trivia...</div>
      </div>
    }>
      <RTTVContent />
    </Suspense>
  )
}
