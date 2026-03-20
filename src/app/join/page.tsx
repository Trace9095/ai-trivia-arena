'use client'

import { useState, useEffect, useCallback, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Target, Loader2, Flame, CheckCircle2, XCircle, Trophy, Medal, Vote, X } from 'lucide-react'

const ANSWER_COLORS = [
  { bg: 'bg-red-600', border: 'border-red-400', label: 'A', hex: '#DC2626' },
  { bg: 'bg-blue-600', border: 'border-blue-400', label: 'B', hex: '#2563EB' },
  { bg: 'bg-green-600', border: 'border-green-400', label: 'C', hex: '#16A34A' },
  { bg: 'bg-yellow-500', border: 'border-yellow-300', label: 'D', hex: '#EAB308' },
]

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
  votingDeadline: string | null
  votingOptions: string[] | null
  hasVoted: boolean
  voteCounts: Record<string, number> | null
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

// ── Save Score Modal ──────────────────────────────────────────────────────────
function SaveScoreModal({
  score,
  rank,
  totalPlayers,
  onClose,
}: {
  score: number
  rank: number
  totalPlayers: number
  onClose: () => void
}) {
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async () => {
    if (!email.trim() || sending) return
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSent(true)
    } catch {
      setError('Could not send. Check your email and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/85">
      <div className="w-full max-w-sm bg-[#12121a] border border-white/15 rounded-3xl p-6 space-y-5 mb-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-black text-xl">Save your score?</h3>
            <p className="text-white/40 text-sm mt-0.5">
              #{rank} of {totalPlayers} · {score.toLocaleString()} pts
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/30 hover:text-white/60 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 -mt-1"
          >
            <X size={20} />
          </button>
        </div>

        {sent ? (
          <div className="text-center py-4 space-y-2">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
            <div className="text-white font-bold text-lg">Check your email!</div>
            <div className="text-white/40 text-sm">We sent a sign-in link to {email}</div>
            <button
              onClick={onClose}
              className="w-full mt-3 py-3 rounded-2xl bg-white/5 border border-white/15 text-white/60 font-bold min-h-[48px]"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div>
              <label className="text-white/50 text-sm font-bold block mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-4 py-3 text-white font-bold focus:outline-none focus:border-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                autoFocus
              />
            </div>
            {error && <p className="text-red-400 text-sm font-bold">{error}</p>}
            <button
              onClick={submit}
              disabled={sending || !email.trim()}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-black text-lg transition-all min-h-[56px]"
            >
              {sending ? <><Loader2 className="w-4 h-4 animate-spin inline mr-2" />Sending...</> : 'Save Score'}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-white/30 text-sm font-bold hover:text-white/50 transition-colors"
            >
              No thanks, just leave
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Voting countdown timer ────────────────────────────────────────────────────
function VoteCountdown({ deadline }: { deadline: string | null }) {
  const [secs, setSecs] = useState(15)
  useEffect(() => {
    if (!deadline) return
    const tick = () => {
      const left = Math.max(0, Math.ceil((new Date(deadline).getTime() - Date.now()) / 1000))
      setSecs(left)
    }
    tick()
    const id = setInterval(tick, 500)
    return () => clearInterval(id)
  }, [deadline])
  return <span className={cn('font-black tabular-nums', secs <= 5 && 'text-red-400')}>{secs}s</span>
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
  const [showSaveModal, setShowSaveModal] = useState(false)
  const [votedCategory, setVotedCategory] = useState<string | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const prevQuestionRef = useRef<number>(-1)
  const prevStatusRef = useRef<string>('')

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch('/api/games/live/current')
        const todayCode = res.ok ? ((await res.json()) as { gameCode?: string }).gameCode ?? '' : ''
        setCurrentGameCode(todayCode)

        const saved = localStorage.getItem('trivia_player')
        if (saved) {
          try {
            const { playerId: pid, gameCode: gc } = JSON.parse(saved) as { playerId: string; gameCode: string }
            if (pid && gc && (gc === todayCode || (prefilledCode && gc === prefilledCode))) {
              setPlayerId(pid)
              setGameCode(gc)
              setPhase('playing')
              return
            }
          } catch { /* ignore */ }
          localStorage.removeItem('trivia_player')
        }
      } catch { /* network */ }
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

      // Reset answer state on new question
      if (data.question && data.question.globalIndex !== prevQuestionRef.current) {
        prevQuestionRef.current = data.question.globalIndex
        setSelectedAnswer(null)
        setAnswerResult(null)
      }
      // Reset voted category when leaving voting phase
      if (data.status !== 'voting' && prevStatusRef.current === 'voting') {
        setVotedCategory(null)
      }
      prevStatusRef.current = data.status
    } catch { /* retry */ }
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
      const res = await fetch(`/api/games/live/${gameCode}/answer`, {
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

  const submitVote = async (category: string) => {
    if (!playerId || votedCategory || state?.hasVoted) return
    setVotedCategory(category)
    try {
      await fetch('/api/games/live/current/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId, category }),
      })
    } catch { /* ignore */ }
    // Re-poll immediately to get updated vote counts
    poll()
  }

  const leaveGame = () => {
    // Show save modal if they have a score
    if (state && state.myScore > 0) {
      setShowSaveModal(true)
      return
    }
    doLeave()
  }

  const doLeave = () => {
    localStorage.removeItem('trivia_player')
    setPhase('join')
    setPlayerId(null)
    setGameCode('')
    setState(null)
    setSelectedAnswer(null)
    setAnswerResult(null)
    setShowSaveModal(false)
    if (pollRef.current) clearInterval(pollRef.current)
  }

  // ── LOADING ───────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-violet-400 animate-spin" />
          <div className="text-white/50 font-bold text-lg">Loading game...</div>
        </div>
      </div>
    )
  }

  // ── JOIN ──────────────────────────────────────────────────────────────────
  if (phase === 'join') {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <Target className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-3xl font-black text-white">AI Trivia Arena</h1>
            <p className="text-white/50 mt-2">
              {currentGameCode ? 'Join the live game — no account needed' : 'Enter a game code to join'}
            </p>
          </div>

          <div className="space-y-4">
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
              {joining ? <><Loader2 className="w-5 h-5 animate-spin inline mr-2" />Joining...</> : 'Join Game'}
            </button>

            <p className="text-white/30 text-center text-sm">No account needed</p>
          </div>
        </div>
      </div>
    )
  }

  // ── PLAYING ───────────────────────────────────────────────────────────────
  const st = state

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Save score modal */}
      {showSaveModal && st && (
        <SaveScoreModal
          score={st.myScore}
          rank={st.myRank}
          totalPlayers={st.totalPlayers}
          onClose={doLeave}
        />
      )}

      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
        <div className="text-white/50 text-sm font-bold">
          Code: <span className="text-white font-black tracking-widest">{gameCode}</span>
        </div>
        <div className="flex gap-3 items-center">
          {st && <span className="text-white font-mono font-black text-lg tabular-nums">{st.myScore.toLocaleString()} pts</span>}
          {(st?.myStreak ?? 0) >= 3 && (
            <span className="text-orange-400 font-bold text-sm flex items-center gap-0.5">
              <Flame className="w-4 h-4" />{st!.myStreak}
            </span>
          )}
          <button onClick={leaveGame} className="text-white/30 text-sm hover:text-white/60 min-w-[44px] min-h-[44px] flex items-center justify-center">
            Leave
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6">

        {/* WAITING */}
        {(!st || st.status === 'waiting') && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-violet-950/50 border border-violet-700/40 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-violet-400 animate-spin" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">Getting ready...</h2>
              <p className="text-white/50">First question is coming up!</p>
            </div>
          </div>
        )}

        {/* VOTING */}
        {st?.status === 'voting' && st.votingOptions && (
          <div className="w-full space-y-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-white font-black text-2xl mb-1">
                <Vote className="w-7 h-7 text-blue-400" />
                Pick the next category!
              </div>
              <div className="text-white/40 text-sm">
                Vote ends in <VoteCountdown deadline={st.votingDeadline} />
              </div>
            </div>

            {(st.hasVoted || !!votedCategory) ? (
              /* Results view after voting */
              <div className="space-y-3">
                <p className="text-center text-white/50 text-sm font-bold">
                  You voted for <span className="text-white">{CATEGORY_LABELS[votedCategory ?? ''] ?? votedCategory}</span>
                </p>
                {st.votingOptions.map((cat) => {
                  const votes = st.voteCounts?.[cat] ?? 0
                  const total = Object.values(st.voteCounts ?? {}).reduce((a, b) => a + b, 0)
                  const pct = total > 0 ? Math.round((votes / total) * 100) : 0
                  const isMyVote = cat === votedCategory
                  return (
                    <div key={cat} className="space-y-1">
                      <div className="flex justify-between text-sm font-bold">
                        <span className={cn('text-white', isMyVote && 'text-blue-400')}>
                          {CATEGORY_LABELS[cat] ?? cat}
                        </span>
                        <span className="text-white/40">{votes} vote{votes !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={cn('h-full rounded-full transition-all duration-700', isMyVote ? 'bg-blue-500' : 'bg-white/20')}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              /* Vote buttons */
              <div className="grid grid-cols-1 gap-4">
                {st.votingOptions.map((cat, i) => {
                  const colors = ['bg-purple-600', 'bg-teal-600', 'bg-orange-600', 'bg-pink-600']
                  return (
                    <button
                      key={cat}
                      onClick={() => submitVote(cat)}
                      className={cn(
                        'min-h-[64px] rounded-2xl border-2 border-transparent flex items-center gap-4 px-5 text-white font-black text-lg text-left transition-all active:scale-95',
                        colors[i % 4]
                      )}
                    >
                      {CATEGORY_LABELS[cat] ?? cat}
                    </button>
                  )
                })}
              </div>
            )}
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
                    <div className="flex justify-center mb-2">
                      {answerResult.isCorrect
                        ? <CheckCircle2 className="w-10 h-10 text-green-400" />
                        : <XCircle className="w-10 h-10 text-red-400" />}
                    </div>
                    <div className="text-white font-black text-xl">
                      {answerResult.isCorrect ? 'Correct!' : 'Wrong!'}
                    </div>
                    {answerResult.isCorrect && (
                      <div className="text-green-400 font-bold text-lg mt-1">+{answerResult.points} pts</div>
                    )}
                    {answerResult.streak >= 3 && (
                      <div className="text-orange-400 font-bold mt-1 flex items-center justify-center gap-1">
                        <Flame className="w-4 h-4" /> {answerResult.streak} streak!
                      </div>
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
                <div className="flex justify-center mb-3">
                  {st.myLastAnswer.isCorrect
                    ? <CheckCircle2 className="w-14 h-14 text-green-400" />
                    : <XCircle className="w-14 h-14 text-red-400" />}
                </div>
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
            <div className="text-3xl font-black text-white flex items-center justify-center gap-2">
              <Trophy className="w-8 h-8 text-yellow-400" /> Leaderboard
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-white/60 text-sm font-bold">Your rank</div>
              <div className="text-5xl font-mono font-black text-blue-400 tabular-nums">#{st.myRank}</div>
              <div className="text-white font-mono font-black text-2xl tabular-nums">{st.myScore.toLocaleString()} pts</div>
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

        {/* FINISHED */}
        {st?.status === 'finished' && (
          <div className="w-full space-y-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                {st.myRank <= 3
                  ? <Medal className="w-16 h-16 text-yellow-400" />
                  : <Trophy className="w-16 h-16 text-blue-400" />}
              </div>
              <h2 className="text-3xl font-black text-white">Game Over!</h2>
              <p className="text-white/60 mt-1">You finished #{st.myRank} of {st.totalPlayers}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-blue-400 font-mono font-black text-3xl tabular-nums">{st.myScore.toLocaleString()}</div>
                  <div className="text-white/50 text-xs mt-1">Points</div>
                </div>
                <div>
                  <div className="text-green-400 font-mono font-black text-3xl tabular-nums">{st.myCorrectCount}</div>
                  <div className="text-white/50 text-xs mt-1">Correct</div>
                </div>
                <div>
                  <div className="text-orange-400 font-mono font-black text-3xl tabular-nums flex items-center justify-center gap-1">
                    {st.myStreak}<Flame className="w-7 h-7" />
                  </div>
                  <div className="text-white/50 text-xs mt-1">Best Streak</div>
                </div>
              </div>
            </div>
            <button
              onClick={leaveGame}
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-black text-lg transition-all min-h-[56px]"
            >
              Save My Score
            </button>
            <button
              onClick={doLeave}
              className="w-full py-3 rounded-2xl border border-white/10 text-white/40 font-bold hover:bg-white/5 transition-all"
            >
              Play Again
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white/50 font-bold">Loading...</div>
      </div>
    }>
      <JoinContent />
    </Suspense>
  )
}
