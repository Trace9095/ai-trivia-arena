'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

const ANSWER_COLORS = [
  { bg: 'bg-red-600', border: 'border-red-400', label: 'A', hex: '#DC2626' },
  { bg: 'bg-blue-600', border: 'border-blue-400', label: 'B', hex: '#2563EB' },
  { bg: 'bg-green-600', border: 'border-green-400', label: 'C', hex: '#16A34A' },
  { bg: 'bg-yellow-500', border: 'border-yellow-300', label: 'D', hex: '#EAB308' },
]

interface PlayerState {
  status: string
  theme: string
  myScore: number
  myRank: number
  myStreak: number
  myCorrectCount: number
  totalPlayers: number
  roundCount: number
  currentRound: number
  roundCategory: string | null
  timePerQuestion: number
  isPicker: boolean
  pickerName: string | null
  categoryPickDeadline: string | null
  question: {
    globalIndex: number
    indexInRound: number
    totalInRound: number
    text: string
    answers: string[]
    questionStartedAt: string | null
    timePerQuestion: number
  } | null
  hasAnswered: boolean
  myLastAnswer: {
    selected: string
    isCorrect: boolean
    pointsEarned: number
    correctAnswer: string | null
    explanation: string | null
  } | null
  finishedAt: string | null
}

function JoinContent() {
  const searchParams = useSearchParams()
  const prefilledCode = searchParams.get('code')?.toUpperCase() ?? ''

  const [phase, setPhase] = useState<'loading' | 'join' | 'playing'>('loading')
  const [currentGameCode, setCurrentGameCode] = useState(prefilledCode)
  const [name, setName] = useState('')
  const [playerId, setPlayerId] = useState<string | null>(null)
  const [gameCode, setGameCode] = useState('')
  const [state, setState] = useState<PlayerState | null>(null)
  const [joining, setJoining] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answerResult, setAnswerResult] = useState<{ isCorrect: boolean; points: number; streak: number } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [showCodeInput, setShowCodeInput] = useState(false)
  const [manualCode, setManualCode] = useState(prefilledCode)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prevQuestionRef = useRef<number>(-1)

  // On mount: load current always-on game, check for saved session
  useEffect(() => {
    async function init() {
      try {
        // Fetch current always-on game to get today's code
        const res = await fetch('/api/games/live/current')
        const todayCode = res.ok ? ((await res.json()) as { gameCode?: string }).gameCode ?? '' : ''
        setCurrentGameCode(todayCode)

        // Check localStorage for a valid saved session
        const saved = localStorage.getItem('trivia_player')
        if (saved) {
          try {
            const { playerId: pid, gameCode: gc } = JSON.parse(saved) as { playerId: string; gameCode: string }
            // Only restore if it's today's game (or a prefilled private code)
            if (pid && gc && (gc === todayCode || (prefilledCode && gc === prefilledCode))) {
              setPlayerId(pid)
              setGameCode(gc)
              setPhase('playing')
              return
            }
          } catch { /* ignore */ }
          localStorage.removeItem('trivia_player')
        }
      } catch { /* network error */ }
      setPhase('join')
    }
    init()
  }, [prefilledCode])

  const handleJoin = async () => {
    const targetCode = showCodeInput ? manualCode.trim() : currentGameCode
    if (!name.trim()) return
    setJoining(true)
    setError(null)
    try {
      // Use always-on join if no manual code, otherwise use the private game join
      const url = (!showCodeInput && currentGameCode)
        ? '/api/games/live/current/join'
        : `/api/games/live/${targetCode}/join`

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: name.trim() }),
      })
      if (!res.ok) {
        const d = (await res.json()) as { error?: string }
        throw new Error(d.error ?? 'Failed to join')
      }
      const { playerId: pid, gameCode: gc } = (await res.json()) as { playerId: string; gameCode: string }
      localStorage.setItem('trivia_player', JSON.stringify({ playerId: pid, gameCode: gc }))
      setPlayerId(pid)
      setGameCode(gc)
      setPhase('playing')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to join game')
    } finally {
      setJoining(false)
    }
  }

  const poll = useCallback(async () => {
    if (!playerId || !gameCode) return
    try {
      const res = await fetch(`/api/games/live/${gameCode}/player-state?playerId=${playerId}`)
      if (!res.ok) return
      const data = (await res.json()) as PlayerState
      setState(data)
      if (data.question && data.question.globalIndex !== prevQuestionRef.current) {
        prevQuestionRef.current = data.question.globalIndex
        setSelectedAnswer(null)
        setAnswerResult(null)
      }
    } catch { /* network — retry */ }
  }, [playerId, gameCode])

  useEffect(() => {
    if (phase !== 'playing') return
    poll()
    pollRef.current = setInterval(poll, 1500)
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [phase, poll])

  const submitAnswer = async (answer: string) => {
    if (!playerId || !gameCode || !state?.question || submitting || selectedAnswer) return
    const startedAt = state.question.questionStartedAt ? new Date(state.question.questionStartedAt).getTime() : Date.now()
    const timeMs = Date.now() - startedAt
    setSelectedAnswer(answer)
    setSubmitting(true)
    try {
      // For always-on games, use the current/answer endpoint (no code needed)
      // For private games, use the regular answer endpoint
      const url = `/api/games/live/${gameCode}/answer`
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId, selectedAnswer: answer, timeMs }),
      })
      if (res.ok) {
        const d = (await res.json()) as { isCorrect: boolean; pointsEarned: number; streak: number }
        setAnswerResult({ isCorrect: d.isCorrect, points: d.pointsEarned, streak: d.streak })
      }
    } finally {
      setSubmitting(false)
    }
  }

  const leaveGame = () => {
    localStorage.removeItem('trivia_player')
    setPhase('join')
    setPlayerId(null)
    setGameCode('')
    setState(null)
    setSelectedAnswer(null)
    setAnswerResult(null)
    if (pollRef.current) clearInterval(pollRef.current)
  }

  // ── LOADING ─────────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="min-h-screen bg-[#0A0A14] flex items-center justify-center">
        <div className="text-white/40 font-bold text-xl animate-pulse">Loading game...</div>
      </div>
    )
  }

  // ── JOIN SCREEN ─────────────────────────────────────────────────────────────
  if (phase === 'join') {
    return (
      <div className="min-h-screen bg-[#0A0A14] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🎯</div>
            <h1 className="text-3xl font-black text-white">AI Trivia Arena</h1>
            <p className="text-white/50 mt-2">
              {currentGameCode
                ? 'Join the live game — no account needed'
                : 'Enter a game code to join'}
            </p>
          </div>

          <div className="space-y-4">
            {/* Name field */}
            <div>
              <label className="text-white/60 text-sm font-bold block mb-2">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 20))}
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-4 py-4 text-white text-xl font-bold focus:outline-none focus:border-blue-500"
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
              />
            </div>

            {/* Manual code input (collapsed by default when auto-join is available) */}
            {currentGameCode && !showCodeInput ? (
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-white/10" />
                <button
                  onClick={() => setShowCodeInput(true)}
                  className="text-white/30 text-xs font-bold hover:text-white/60 transition-colors"
                >
                  Use a different code
                </button>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            ) : (
              <div>
                <label className="text-white/60 text-sm font-bold block mb-2">Game Code</label>
                <input
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value.toUpperCase().slice(0, 4))}
                  placeholder="XXXX"
                  className="w-full bg-white/5 border border-white/20 rounded-2xl px-4 py-4 text-white text-4xl font-black text-center tracking-[0.3em] focus:outline-none focus:border-blue-500 uppercase"
                  maxLength={4}
                />
              </div>
            )}

            {error && <p className="text-red-400 text-center font-bold">{error}</p>}

            <button
              onClick={handleJoin}
              disabled={joining || !name.trim() || (showCodeInput && !manualCode.trim())}
              className="w-full py-5 rounded-2xl text-white text-xl font-black bg-blue-600 hover:bg-blue-500 disabled:opacity-40 transition-all active:scale-95 min-h-[64px]"
            >
              {joining ? '⏳ Joining...' : '🚀 Join Game'}
            </button>

            <p className="text-white/30 text-center text-sm">No account needed</p>
          </div>
        </div>
      </div>
    )
  }

  // ── PLAYING SCREENS ─────────────────────────────────────────────────────────
  const st = state

  return (
    <div className="min-h-screen bg-[#0A0A14] flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
        <div className="text-white/50 text-sm font-bold">
          Code: <span className="text-white font-black tracking-widest">{gameCode}</span>
        </div>
        <div className="flex gap-3 items-center">
          {st && <span className="text-white font-black text-lg">{st.myScore.toLocaleString()} pts</span>}
          {(st?.myStreak ?? 0) >= 3 && (
            <span className="text-orange-400 font-bold text-sm">🔥{st!.myStreak}</span>
          )}
          <button onClick={leaveGame} className="text-white/30 text-sm hover:text-white/60 min-w-[44px] min-h-[44px] flex items-center justify-center">
            Leave
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">

        {/* WAITING / LOADING */}
        {(!st || st.status === 'waiting') && (
          <div className="text-center space-y-6">
            <div className="text-6xl animate-bounce">⏳</div>
            <h2 className="text-2xl font-black text-white">Getting ready...</h2>
            <p className="text-white/50">First question is coming up!</p>
          </div>
        )}

        {/* ACTIVE QUESTION */}
        {st?.status === 'active' && st.question && (
          <div className="w-full space-y-5">
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-sm font-bold">{st.roundCategory ?? 'Trivia'}</span>
              <span className="text-white/50 text-sm font-bold">#{st.question.globalIndex + 1}</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-bold text-lg leading-relaxed text-center">
                {st.question.text}
              </p>
            </div>

            {!selectedAnswer ? (
              <div className="grid grid-cols-1 gap-4">
                {st.question.answers.map((answer, i) => {
                  const c = ANSWER_COLORS[i]!
                  return (
                    <button
                      key={i}
                      onClick={() => submitAnswer(answer)}
                      disabled={submitting}
                      className={cn(
                        'min-h-[64px] rounded-2xl border-2 flex items-center gap-4 px-5 text-white font-bold text-left transition-all active:scale-95',
                        c.bg, c.border
                      )}
                    >
                      <span className="text-2xl font-black w-8 shrink-0">{c.label}</span>
                      <span className="text-base leading-tight">{answer}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className={cn(
                'rounded-2xl p-6 text-center border-2',
                answerResult?.isCorrect ? 'bg-green-950/70 border-green-500' : 'bg-red-950/70 border-red-500'
              )}>
                {answerResult ? (
                  <>
                    <div className="text-4xl mb-2">{answerResult.isCorrect ? '✅' : '❌'}</div>
                    <div className="text-white font-black text-xl">
                      {answerResult.isCorrect ? 'Correct!' : 'Wrong!'}
                    </div>
                    {answerResult.isCorrect && (
                      <div className="text-green-400 font-bold text-lg mt-1">+{answerResult.points} pts</div>
                    )}
                    {answerResult.streak >= 3 && (
                      <div className="text-orange-400 font-bold mt-1">🔥 {answerResult.streak} streak!</div>
                    )}
                    <div className="text-white/40 text-sm mt-2">Waiting for leaderboard...</div>
                  </>
                ) : (
                  <div className="text-white/70 font-bold">Submitted! Waiting...</div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SHOWING ANSWER */}
        {st?.status === 'showing_answer' && (
          <div className="w-full text-center space-y-4">
            {st.myLastAnswer ? (
              <div className={cn(
                'rounded-2xl p-6 border-2',
                st.myLastAnswer.isCorrect ? 'bg-green-950/70 border-green-500' : 'bg-red-950/70 border-red-500'
              )}>
                <div className="text-5xl mb-3">{st.myLastAnswer.isCorrect ? '🎉' : '😬'}</div>
                <div className="text-white font-black text-2xl">
                  {st.myLastAnswer.isCorrect ? 'You got it!' : 'Not quite'}
                </div>
                {st.myLastAnswer.correctAnswer && !st.myLastAnswer.isCorrect && (
                  <div className="text-white/70 mt-2">
                    Answer: <span className="text-white font-bold">{st.myLastAnswer.correctAnswer}</span>
                  </div>
                )}
                {st.myLastAnswer.isCorrect && (
                  <div className="text-green-400 font-bold text-xl mt-1">+{st.myLastAnswer.pointsEarned} pts</div>
                )}
                {st.myLastAnswer.explanation && (
                  <div className="text-white/60 text-sm mt-3 border-t border-white/10 pt-3">
                    {st.myLastAnswer.explanation}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-white/60 text-xl">You didn&apos;t answer in time</div>
            )}
            <div className="text-white/40 text-sm">Score: {st.myScore.toLocaleString()} pts · Rank #{st.myRank}</div>
          </div>
        )}

        {/* LEADERBOARD */}
        {st?.status === 'showing_leaderboard' && (
          <div className="w-full text-center space-y-4">
            <div className="text-3xl font-black text-white">🏆 Leaderboard</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-white/60 text-sm font-bold">Your rank</div>
              <div className="text-5xl font-black text-blue-400">#{st.myRank}</div>
              <div className="text-white font-bold text-2xl">{st.myScore.toLocaleString()} pts</div>
            </div>
            {st.myLastAnswer && !st.myLastAnswer.isCorrect && st.myLastAnswer.correctAnswer && (
              <div className="text-white/50 text-sm">
                Correct: <span className="text-white font-bold">{st.myLastAnswer.correctAnswer}</span>
              </div>
            )}
            <div className="text-white/40 text-sm">
              Out of {st.totalPlayers} players · Next question coming up!
            </div>
          </div>
        )}

        {/* FINISHED (private games only) */}
        {st?.status === 'finished' && (
          <div className="w-full space-y-6">
            <div className="text-center">
              <div className="text-6xl mb-3">
                {st.myRank === 1 ? '🥇' : st.myRank === 2 ? '🥈' : st.myRank === 3 ? '🥉' : '🎮'}
              </div>
              <h2 className="text-3xl font-black text-white">Game Over!</h2>
              <p className="text-white/60 mt-1">You finished #{st.myRank} of {st.totalPlayers}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-blue-400 font-black text-3xl">{st.myScore.toLocaleString()}</div>
                  <div className="text-white/50 text-xs mt-1">Points</div>
                </div>
                <div>
                  <div className="text-green-400 font-black text-3xl">{st.myCorrectCount}</div>
                  <div className="text-white/50 text-xs mt-1">Correct</div>
                </div>
                <div>
                  <div className="text-orange-400 font-black text-3xl">{st.myStreak}🔥</div>
                  <div className="text-white/50 text-xs mt-1">Best Streak</div>
                </div>
              </div>
            </div>
            <button
              onClick={leaveGame}
              className="w-full py-4 rounded-2xl border border-white/20 text-white/60 font-bold hover:bg-white/5 transition-all min-h-[56px]"
            >
              Play Another Game
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function JoinPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A14] flex items-center justify-center">
        <div className="text-white/50 font-bold">Loading...</div>
      </div>
    }>
      <JoinContent />
    </Suspense>
  )
}
