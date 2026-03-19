'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import QRCode from 'qrcode'
import { CATEGORIES, cn } from '@/lib/utils'
import { CATEGORY_NAMES } from '@/lib/live-game'
import { Target, Trophy, Flame, CheckCircle2, Lightbulb, RefreshCw, Play, Loader2, Maximize, Minimize, Medal } from 'lucide-react'

// ─── Theme definitions ────────────────────────────────────────────────────────
const THEMES = {
  classic: {
    label: 'Classic',
    emoji: 'CL',
    outerClass: 'tv-classic',
    bgClass: 'bg-gradient-to-b from-[#0A0A14] via-[#1A1040] to-[#0A0A14]',
    cardClass: 'bg-white/5 border border-blue-500/30 backdrop-blur-sm',
    accentColor: '#3B82F6',
    timerColor: '#3B82F6',
    answerColors: ['#EF4444', '#3B82F6', '#10B981', '#F59E0B'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  neon: {
    label: 'Neon',
    emoji: 'NE',
    outerClass: 'tv-neon',
    bgClass: 'bg-black',
    cardClass: 'bg-black border border-[#FF006E] shadow-[0_0_20px_#FF006E55]',
    accentColor: '#FF006E',
    timerColor: '#00F5FF',
    answerColors: ['#FF006E', '#00F5FF', '#39FF14', '#FFFF00'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  royalgorge: {
    label: 'Royal Gorge',
    emoji: 'RG',
    outerClass: 'tv-royalgorge',
    bgClass: 'bg-gradient-to-b from-[#3E2723] via-[#BF360C] to-[#4A148C]',
    cardClass: 'bg-[#5D4037]/60 border border-orange-400/40',
    accentColor: '#FF6F00',
    timerColor: '#FF8F00',
    answerColors: ['#C62828', '#1565C0', '#2E7D32', '#E65100'],
    answerLabels: ['A', 'B', 'C', 'D'],
  },
  sportsbar: {
    label: 'Sports Bar',
    emoji: 'SB',
    outerClass: 'tv-sportsbar',
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
interface GameState {
  status: string
  gameCode: string
  theme: string
  categoryMode: string
  difficulty: string
  roundCount: number
  questionsPerRound: number
  timePerQuestion: number
  currentRound: number
  currentQuestionIndex: number
  questionStartedAt: string | null
  categoryPickDeadline: string | null
  roundCategory: string | null
  playerCount: number
  players: Array<{ id: string; displayName: string; score: number }>
  leaderboard: Array<{ rank: number; id: string; displayName: string; score: number; correctCount: number; streak: number }>
  picker: { id: string; displayName: string } | null
  question: {
    globalIndex: number
    roundIndex: number
    indexInRound: number
    totalInRound: number
    totalQuestions: number
    text: string
    answers: string[]
    correctAnswer?: string
    explanation?: string
  } | null
  answeredCount: number
}

// ─── Setup form ───────────────────────────────────────────────────────────────
interface SetupConfig {
  theme: ThemeKey
  categoryMode: string
  singleCategory: string
  difficulty: string
  roundCount: number
  questionsPerRound: number
  timePerQuestion: number
}

function SetupScreen({ onStart }: { onStart: (code: string, config: SetupConfig) => void }) {
  const [config, setConfig] = useState<SetupConfig>({
    theme: 'classic',
    categoryMode: 'single',
    singleCategory: 'general',
    difficulty: 'medium',
    roundCount: 1,
    questionsPerRound: 10,
    timePerQuestion: 20,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleStart = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/games/live', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      })
      if (!res.ok) throw new Error('Failed to create game')
      const { gameCode } = (await res.json()) as { gameCode: string }
      onStart(gameCode, config)
    } catch {
      setError('Failed to start game. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const theme = THEMES[config.theme]

  return (
    <div className={cn('min-h-screen flex flex-col items-center justify-center p-8', theme.bgClass)}>
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-black text-white text-center mb-2 flex items-center justify-center gap-3">
          <Target className="w-12 h-12 text-blue-400" /> AI Trivia Arena
        </h1>
        <p className="text-white/60 text-center text-xl mb-10">TV Host Setup</p>

        <div className={cn('rounded-3xl p-8 space-y-8', theme.cardClass)}>
          {/* Theme picker */}
          <div>
            <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Visual Theme</label>
            <div className="grid grid-cols-4 gap-3">
              {(Object.keys(THEMES) as ThemeKey[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setConfig((c) => ({ ...c, theme: t }))}
                  className={cn(
                    'rounded-xl p-3 border-2 text-center transition-all',
                    config.theme === t ? 'border-white scale-105' : 'border-white/20 hover:border-white/40'
                  )}
                  style={{ background: config.theme === t ? THEMES[t].accentColor + '33' : 'transparent' }}
                >
                  <div
                    className="text-xs font-black w-10 h-10 rounded-lg flex items-center justify-center mx-auto"
                    style={{ background: THEMES[t].accentColor + '33', color: THEMES[t].accentColor, border: `1px solid ${THEMES[t].accentColor}66` }}
                  >
                    {THEMES[t].emoji}
                  </div>
                  <div className="text-white text-xs font-bold mt-1">{THEMES[t].label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Category mode */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Category Mode</label>
              <div className="space-y-2">
                {[
                  { value: 'single', label: 'Single Category' },
                  { value: 'rotating', label: 'Players Pick (Rotating)' },
                  { value: 'random', label: 'Random Mix' },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setConfig((c) => ({ ...c, categoryMode: opt.value }))}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-xl border-2 text-white font-medium transition-all',
                      config.categoryMode === opt.value ? 'border-white bg-white/15' : 'border-white/20 hover:border-white/40'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {/* Single category selector */}
              {config.categoryMode === 'single' && (
                <div>
                  <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Category</label>
                  <select
                    value={config.singleCategory}
                    onChange={(e) => setConfig((c) => ({ ...c, singleCategory: e.target.value }))}
                    className="w-full bg-white/10 border border-white/30 text-white rounded-xl px-4 py-3 text-base"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id} className="bg-gray-900">
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Difficulty */}
              <div>
                <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Difficulty</label>
                <div className="flex gap-2">
                  {(['easy', 'medium', 'hard'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setConfig((c) => ({ ...c, difficulty: d }))}
                      className={cn(
                        'flex-1 py-3 rounded-xl border-2 text-white font-bold capitalize transition-all',
                        config.difficulty === d ? 'border-white bg-white/20' : 'border-white/20 hover:border-white/40'
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Game settings row */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Rounds</label>
              <div className="flex gap-2 flex-wrap">
                {[1, 3, 5, 7, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => setConfig((c) => ({ ...c, roundCount: n }))}
                    className={cn(
                      'px-4 py-2 rounded-xl border-2 text-white font-bold transition-all',
                      config.roundCount === n ? 'border-white bg-white/20' : 'border-white/20'
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Questions/Round</label>
              <div className="flex gap-2">
                {[3, 5, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => setConfig((c) => ({ ...c, questionsPerRound: n }))}
                    className={cn(
                      'px-4 py-2 rounded-xl border-2 text-white font-bold transition-all',
                      config.questionsPerRound === n ? 'border-white bg-white/20' : 'border-white/20'
                    )}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/70 text-sm font-bold uppercase tracking-wider block mb-3">Seconds/Question</label>
              <div className="flex gap-2">
                {[10, 15, 20, 30].map((n) => (
                  <button
                    key={n}
                    onClick={() => setConfig((c) => ({ ...c, timePerQuestion: n }))}
                    className={cn(
                      'px-4 py-2 rounded-xl border-2 text-white font-bold transition-all',
                      config.timePerQuestion === n ? 'border-white bg-white/20' : 'border-white/20'
                    )}
                  >
                    {n}s
                  </button>
                ))}
              </div>
            </div>
          </div>

          {error && <p className="text-red-400 text-center">{error}</p>}

          <button
            onClick={handleStart}
            disabled={loading}
            className="w-full py-6 rounded-2xl text-white text-3xl font-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            style={{ background: theme.accentColor, boxShadow: `0 0 40px ${theme.accentColor}66` }}
          >
            {loading
              ? <><Loader2 className="w-7 h-7 animate-spin inline mr-3" />Generating...</>
              : <><Play className="w-7 h-7 inline mr-3" />Start Game</>}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── QR Code component ────────────────────────────────────────────────────────
function QRCodeImg({ url, size = 300 }: { url: string; size?: number }) {
  const [src, setSrc] = useState('')
  useEffect(() => {
    QRCode.toDataURL(url, { width: size, margin: 1, color: { light: '#ffffff', dark: '#000000' } })
      .then(setSrc)
      .catch(() => setSrc(''))
  }, [url, size])
  if (!src) return <div style={{ width: size, height: size }} className="bg-white/10 rounded-2xl animate-pulse" />
  return <img src={src} alt="QR Code" className="rounded-2xl" style={{ width: size, height: size }} />
}

// ─── Timer display ────────────────────────────────────────────────────────────
function CountdownTimer({
  questionStartedAt,
  timePerQuestion,
  color,
  onExpire,
}: {
  questionStartedAt: string | null
  timePerQuestion: number
  color: string
  onExpire: () => void
}) {
  const [timeLeft, setTimeLeft] = useState(timePerQuestion)
  const expiredRef = useRef(false)

  useEffect(() => {
    expiredRef.current = false
    const tick = () => {
      if (!questionStartedAt) { setTimeLeft(timePerQuestion); return }
      const elapsed = (Date.now() - new Date(questionStartedAt).getTime()) / 1000
      const left = Math.max(0, timePerQuestion - elapsed)
      setTimeLeft(left)
      if (left <= 0 && !expiredRef.current) {
        expiredRef.current = true
        onExpire()
      }
    }
    tick()
    const id = setInterval(tick, 200)
    return () => clearInterval(id)
  }, [questionStartedAt, timePerQuestion, onExpire])

  const pct = (timeLeft / timePerQuestion) * 100
  const isUrgent = timeLeft <= 5

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn('font-black tabular-nums transition-colors', isUrgent && 'animate-pulse')}
        style={{ fontSize: 96, color: isUrgent ? '#EF4444' : color, lineHeight: 1 }}
      >
        {Math.ceil(timeLeft)}
      </div>
      {/* Progress bar */}
      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{ width: `${pct}%`, background: isUrgent ? '#EF4444' : color }}
        />
      </div>
    </div>
  )
}

// ─── Leaderboard ──────────────────────────────────────────────────────────────
function Leaderboard({
  players,
  theme,
  showAll = false,
}: {
  players: GameState['leaderboard']
  theme: typeof THEMES[ThemeKey]
  showAll?: boolean
}) {
  const shown = showAll ? players : players.slice(0, 5)
  const medalColors = ['#F59E0B', '#9CA3AF', '#CD7F32']

  return (
    <div className="space-y-3 w-full">
      {shown.map((p, i) => (
        <div
          key={p.id}
          className={cn('flex items-center gap-4 rounded-2xl px-6 py-4', theme.cardClass)}
          style={
            i === 0 ? { background: 'linear-gradient(90deg,#F59E0B22,transparent)', borderColor: '#F59E0B66' }
            : i === 1 ? { background: 'linear-gradient(90deg,#9CA3AF22,transparent)', borderColor: '#9CA3AF66' }
            : i === 2 ? { background: 'linear-gradient(90deg,#CD7F3222,transparent)', borderColor: '#CD7F3266' }
            : {}
          }
        >
          <span style={{ minWidth: 60, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {i < 3
              ? <Medal size={40} style={{ color: medalColors[i] }} />
              : <span className="font-mono" style={{ fontSize: 40, color: 'rgba(255,255,255,0.5)' }}>{i + 1}</span>}
          </span>
          <span className="flex-1 font-black text-white truncate" style={{ fontSize: 48 }}>
            {p.displayName}
          </span>
          <span className="font-black tabular-nums" style={{ fontSize: 64, color: theme.accentColor }}>
            {p.score.toLocaleString()}
          </span>
          {p.streak >= 3 && (
            <span className="flex items-center gap-1" style={{ color: '#F97316' }}>
              <Flame size={36} /><span className="font-black" style={{ fontSize: 36 }}>{p.streak}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Podium ───────────────────────────────────────────────────────────────────
function Podium({ players }: { players: GameState['leaderboard'] }) {
  const top3 = players.slice(0, 3)
  const order = [1, 0, 2] // display order: 2nd, 1st, 3rd

  return (
    <div className="flex items-end justify-center gap-8 w-full">
      {order.map((idx) => {
        const p = top3[idx]
        if (!p) return <div key={idx} className="w-64" />
        const heights = ['h-48', 'h-64', 'h-36']
        const colors = ['#9CA3AF', '#F59E0B', '#CD7F32']
        const labels = ['2nd', '1st', '3rd']
        const podiumMedalColors = ['#9CA3AF', '#F59E0B', '#CD7F32']

        return (
          <div key={p.id} className="flex flex-col items-center">
            <div className="text-white font-black text-center mb-3" style={{ fontSize: 48 }}>{p.displayName}</div>
            <div className="font-black text-center mb-3" style={{ fontSize: 56, color: colors[idx] }}>
              {p.score.toLocaleString()}
            </div>
            <div
              className={cn('flex flex-col items-center justify-end rounded-t-2xl', heights[idx])}
              style={{ width: 220, background: colors[idx] + '44', border: `3px solid ${colors[idx]}` }}
            >
              <Medal size={56} style={{ color: podiumMedalColors[idx] }} />
              <div className="text-white font-bold text-2xl pb-4">{labels[idx]}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Main TV component ────────────────────────────────────────────────────────
export default function TVPage() {
  const [phase, setPhase] = useState<'setup' | 'game'>('setup')
  const [gameCode, setGameCode] = useState('')
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('classic')
  const [gameState, setGameState] = useState<GameState | null>(null)
  const [advancePending, setAdvancePending] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const theme = THEMES[activeTheme]

  const handleSetupStart = (code: string, config: SetupConfig) => {
    setGameCode(code)
    setActiveTheme(config.theme as ThemeKey)
    setPhase('game')
  }

  const advance = useCallback(async (code: string) => {
    if (advancePending) return
    setAdvancePending(true)
    try {
      await fetch(`/api/games/live/${code}/advance`, { method: 'POST' })
    } finally {
      setAdvancePending(false)
    }
  }, [advancePending])

  const poll = useCallback(async (code: string) => {
    try {
      const res = await fetch(`/api/games/live/${code}/state`)
      if (!res.ok) return
      const data = (await res.json()) as GameState
      setGameState(data)
    } catch { /* network error — just retry next tick */ }
  }, [])

  useEffect(() => {
    if (phase !== 'game' || !gameCode) return
    poll(gameCode)
    pollRef.current = setInterval(() => poll(gameCode), 1500)
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [phase, gameCode, poll])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {})
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {})
    }
  }

  if (phase === 'setup') return <SetupScreen onStart={handleSetupStart} />

  const gs = gameState
  const joinUrl = `https://aitriviaarena.com/join?code=${gameCode}`

  return (
    <div
      className={cn('min-h-screen flex flex-col overflow-hidden select-none', theme.bgClass)}
      style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
    >
      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 text-sm font-bold transition-all"
      >
        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
      </button>

      {/* WAITING SCREEN */}
      {(!gs || gs.status === 'waiting') && (
        <div className="flex-1 flex flex-col items-center justify-center p-12 gap-10">
          <div className="text-white font-black text-center flex items-center justify-center gap-4" style={{ fontSize: 56 }}>
            <Target size={56} className="text-blue-400" /> AI Trivia Arena
          </div>

          <div className="flex gap-16 items-center">
            {/* Game code */}
            <div className="text-center">
              <div className="text-white/60 font-bold uppercase tracking-widest mb-3" style={{ fontSize: 28 }}>
                Game Code
              </div>
              <div
                className="font-black tracking-[0.15em] px-10 py-6 rounded-3xl"
                style={{
                  fontSize: 140,
                  color: theme.accentColor,
                  background: theme.accentColor + '15',
                  border: `4px solid ${theme.accentColor}`,
                  lineHeight: 1,
                }}
              >
                {gameCode}
              </div>
            </div>

            {/* QR code */}
            <div className="flex flex-col items-center gap-4">
              <QRCodeImg url={joinUrl} size={320} />
              <div className="text-white text-center font-bold" style={{ fontSize: 28 }}>
                aitriviaarena.com/join
              </div>
            </div>
          </div>

          {/* Players joined */}
          <div className="text-center">
            <div className="text-white/60 font-bold" style={{ fontSize: 28 }}>
              {gs?.playerCount ?? 0} player{(gs?.playerCount ?? 0) !== 1 ? 's' : ''} joined
            </div>
            {gs && gs.players.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {gs.players.map((p) => (
                  <span
                    key={p.id}
                    className="px-5 py-2 rounded-full text-white font-bold"
                    style={{ fontSize: 24, background: theme.accentColor + '33', border: `2px solid ${theme.accentColor}66` }}
                  >
                    {p.displayName}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Start button */}
          <button
            onClick={() => advance(gameCode)}
            disabled={advancePending || (gs?.playerCount ?? 0) === 0}
            className="px-16 py-6 rounded-3xl text-white font-black transition-all hover:scale-105 active:scale-95 disabled:opacity-40"
            style={{ fontSize: 36, background: theme.accentColor, boxShadow: `0 0 60px ${theme.accentColor}55` }}
          >
            {advancePending
              ? <><Loader2 className="w-8 h-8 animate-spin inline mr-3" />Starting...</>
              : <><Play className="w-8 h-8 inline mr-3" />Start Game!</>}
          </button>
        </div>
      )}

      {/* PICKING SCREEN */}
      {gs?.status === 'picking' && (
        <div className="flex-1 flex flex-col items-center justify-center p-12 gap-10">
          <div className="text-white/60 font-bold uppercase tracking-widest" style={{ fontSize: 36 }}>
            Round {gs.currentRound + 1} of {gs.roundCount}
          </div>
          <div className="font-black text-white text-center flex items-center justify-center gap-4" style={{ fontSize: 80 }}>
            <Target size={80} className="text-blue-400 shrink-0" />
            <span>{gs.picker?.displayName ?? 'Someone'}&apos;s Pick!</span>
          </div>
          <div className="text-white/70 font-bold" style={{ fontSize: 48 }}>
            Waiting for them to choose a category...
          </div>
          {gs.categoryPickDeadline && (
            <div className="flex items-center gap-4">
              <span className="text-white/60 font-bold" style={{ fontSize: 32 }}>Auto-pick in:</span>
              <PickCountdown deadline={gs.categoryPickDeadline} color={theme.accentColor} onExpire={() => advance(gameCode)} />
            </div>
          )}
        </div>
      )}

      {/* ACTIVE QUESTION */}
      {gs?.status === 'active' && gs.question && (
        <div className="flex-1 flex flex-col p-10 gap-8">
          {/* Header bar */}
          <div className="flex items-center justify-between">
            <div className="text-white/60 font-bold" style={{ fontSize: 28 }}>
              {gs.roundCategory} · Q{gs.question.indexInRound + 1}/{gs.question.totalInRound}
              {gs.roundCount > 1 && ` · Round ${gs.currentRound + 1}/${gs.roundCount}`}
            </div>
            <div className="text-white/60 font-bold" style={{ fontSize: 28 }}>
              {gs.answeredCount}/{gs.playerCount} answered
            </div>
          </div>

          {/* Timer */}
          <div className="flex justify-center">
            <div className="w-64">
              <CountdownTimer
                questionStartedAt={gs.questionStartedAt}
                timePerQuestion={gs.timePerQuestion}
                color={theme.timerColor}
                onExpire={() => advance(gameCode)}
              />
            </div>
          </div>

          {/* Question text */}
          <div
            className={cn('rounded-3xl p-8 text-white font-bold text-center', theme.cardClass)}
            style={{ fontSize: 64, lineHeight: 1.3 }}
          >
            {gs.question.text}
          </div>

          {/* Answer grid */}
          <div className="grid grid-cols-2 gap-5 flex-1">
            {gs.question.answers.map((answer, i) => (
              <div
                key={i}
                className="rounded-3xl flex items-center gap-5 px-8"
                style={{
                  background: theme.answerColors[i] + 'CC',
                  border: `4px solid ${theme.answerColors[i]}`,
                  minHeight: 110,
                }}
              >
                <span className="font-black text-white" style={{ fontSize: 56, minWidth: 60 }}>
                  {theme.answerLabels[i]}
                </span>
                <span className="font-bold text-white" style={{ fontSize: 44, lineHeight: 1.2 }}>
                  {answer}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SHOWING ANSWER */}
      {gs?.status === 'showing_answer' && gs.question && (
        <div className="flex-1 flex flex-col p-10 gap-8">
          <div className="text-center font-black text-white flex items-center justify-center gap-4" style={{ fontSize: 60 }}>
            <CheckCircle2 size={60} className="text-green-400 shrink-0" /> Correct Answer!
          </div>

          {/* Question */}
          <div className={cn('rounded-3xl p-6 text-white/80 text-center', theme.cardClass)} style={{ fontSize: 44 }}>
            {gs.question.text}
          </div>

          {/* Answer grid with reveal */}
          <div className="grid grid-cols-2 gap-5 flex-1">
            {gs.question.answers.map((answer, i) => {
              const isCorrect = answer === gs.question?.correctAnswer
              return (
                <div
                  key={i}
                  className="rounded-3xl flex items-center gap-5 px-8 transition-all"
                  style={{
                    background: isCorrect ? '#10B981CC' : theme.answerColors[i] + '44',
                    border: `4px solid ${isCorrect ? '#10B981' : theme.answerColors[i] + '55'}`,
                    minHeight: 110,
                    transform: isCorrect ? 'scale(1.03)' : 'scale(0.97)',
                  }}
                >
                  <span className="font-black text-white" style={{ fontSize: 56, minWidth: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isCorrect ? <CheckCircle2 size={48} /> : theme.answerLabels[i]}
                  </span>
                  <span className="font-bold text-white" style={{ fontSize: 44, lineHeight: 1.2, opacity: isCorrect ? 1 : 0.5 }}>
                    {answer}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Explanation */}
          {gs.question.explanation && (
            <div className={cn('rounded-2xl p-5 text-white/80 text-center flex items-center justify-center gap-3', theme.cardClass)} style={{ fontSize: 32 }}>
              <Lightbulb size={32} className="text-yellow-400 shrink-0" /> {gs.question.explanation}
            </div>
          )}

          <button
            onClick={() => advance(gameCode)}
            className="py-5 rounded-2xl text-white font-black transition-all hover:scale-105"
            style={{ fontSize: 32, background: theme.accentColor }}
          >
            Next →
          </button>
        </div>
      )}

      {/* LEADERBOARD */}
      {gs?.status === 'showing_leaderboard' && (
        <div className="flex-1 flex flex-col p-10 gap-8">
          <div className="text-white font-black text-center flex items-center justify-center gap-4" style={{ fontSize: 72 }}>
            <Trophy size={72} className="text-yellow-400 shrink-0" /> Leaderboard
          </div>
          <Leaderboard players={gs.leaderboard} theme={theme} />
          <button
            onClick={() => advance(gameCode)}
            className="py-5 rounded-2xl text-white font-black mt-auto transition-all hover:scale-105"
            style={{ fontSize: 32, background: theme.accentColor }}
          >
            Continue →
          </button>
        </div>
      )}

      {/* FINISHED — PODIUM */}
      {gs?.status === 'finished' && (
        <div className="flex-1 flex flex-col items-center p-10 gap-10">
          <div className="text-white font-black text-center" style={{ fontSize: 80 }}>
            Game Over!
          </div>
          {gs.leaderboard.length >= 1 && <Podium players={gs.leaderboard} />}
          {gs.leaderboard.length > 3 && (
            <div className="w-full mt-4">
              <div className="text-white/60 text-center font-bold mb-4" style={{ fontSize: 28 }}>Full Results</div>
              <Leaderboard players={gs.leaderboard.slice(3)} theme={theme} showAll />
            </div>
          )}
          <button
            onClick={() => { setPhase('setup'); setGameState(null); setGameCode('') }}
            className="px-12 py-5 rounded-2xl text-white font-black transition-all hover:scale-105"
            style={{ fontSize: 28, background: theme.accentColor }}
          >
            <RefreshCw className="w-7 h-7 inline mr-3" />New Game
          </button>
        </div>
      )}
    </div>
  )
}

// Small inline countdown for pick phase
function PickCountdown({ deadline, color, onExpire }: { deadline: string; color: string; onExpire: () => void }) {
  const [left, setLeft] = useState(15)
  const firedRef = useRef(false)
  useEffect(() => {
    firedRef.current = false
    const id = setInterval(() => {
      const secs = Math.max(0, (new Date(deadline).getTime() - Date.now()) / 1000)
      setLeft(Math.ceil(secs))
      if (secs <= 0 && !firedRef.current) { firedRef.current = true; onExpire() }
    }, 500)
    return () => clearInterval(id)
  }, [deadline, onExpire])
  return <span className="font-black" style={{ fontSize: 56, color }}>{left}s</span>
}
