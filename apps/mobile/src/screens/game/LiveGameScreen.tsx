import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import { useGameState } from '../../hooks/useGameState'
import type { LiveGameScreenProps } from '../../navigation/types'
import type { AnswerSubmitResult, LeaderboardPlayer } from '../../types/api'

const CATEGORY_NAMES: Record<string, string> = {
  general: '🎯 General', science: '🔬 Science', history: '📜 History',
  geography: '🌍 Geography', pop_culture: '🎬 Pop Culture', sports: '⚽ Sports',
  food_drink: '🍕 Food & Drink', technology: '💻 Technology',
  movies_tv: '🎥 Movies & TV', music: '🎵 Music', colorado: '🏔️ Colorado',
}

const CATEGORY_IDS = Object.keys(CATEGORY_NAMES)

export default function LiveGameScreen({ route, navigation }: LiveGameScreenProps) {
  const { code, playerId } = route.params
  const { state, loading } = useGameState(code)

  const [hasAnswered, setHasAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answerResult, setAnswerResult] = useState<AnswerSubmitResult | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20)
  const [pickingCategory, setPickingCategory] = useState(false)
  const lastQuestionKey = useRef<string>('')

  const questionKey = state
    ? `${state.currentRound}-${state.currentQuestionIndex}`
    : ''

  // Reset on new question
  useEffect(() => {
    if (questionKey && questionKey !== lastQuestionKey.current) {
      lastQuestionKey.current = questionKey
      setHasAnswered(false)
      setSelectedAnswer(null)
      setAnswerResult(null)
    }
  }, [questionKey])

  // Countdown timer
  useEffect(() => {
    if (state?.status !== 'active' || !state.questionStartedAt) return
    const startMs = new Date(state.questionStartedAt).getTime()
    const totalMs = state.timePerQuestion * 1000
    const tick = () => {
      const remaining = Math.max(0, (totalMs - (Date.now() - startMs)) / 1000)
      setTimeLeft(remaining)
    }
    tick()
    const timer = setInterval(tick, 100)
    return () => clearInterval(timer)
  }, [state?.status, state?.questionStartedAt, state?.timePerQuestion])

  // Navigate to final results
  useEffect(() => {
    if (state?.status === 'finished') {
      navigation.replace('FinalResults', { code, playerId })
    }
  }, [state?.status, code, playerId, navigation])

  const handleAnswer = useCallback(
    async (answer: string) => {
      if (hasAnswered || submitting || !state?.questionStartedAt) return
      const timeMs = Math.min(
        Date.now() - new Date(state.questionStartedAt).getTime(),
        state.timePerQuestion * 1000
      )
      setSelectedAnswer(answer)
      setSubmitting(true)
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
      try {
        const result = await api.live.submitAnswer(code, { playerId, selectedAnswer: answer, timeMs })
        setAnswerResult(result)
        setHasAnswered(true)
        await (result.isCorrect
          ? Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
          : Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error))
      } catch {
        setHasAnswered(true)
      } finally {
        setSubmitting(false)
      }
    },
    [hasAnswered, submitting, state, code, playerId]
  )

  const handlePickCategory = useCallback(
    async (category: string) => {
      if (pickingCategory) return
      setPickingCategory(true)
      try {
        await api.live.pickCategory(code, { playerId, category })
      } catch {
        setPickingCategory(false)
      }
    },
    [code, playerId, pickingCategory]
  )

  if (loading && !state) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.center}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={s.loadingText}>Connecting…</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (!state) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.center}>
          <Text style={s.errorText}>Connection lost</Text>
          <TouchableOpacity style={s.leaveBtn} onPress={() => navigation.navigate('MainTabs', { screen: 'Play' })}>
            <Text style={s.leaveBtnText}>Leave Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const { status, question, leaderboard, picker, roundCategory, timePerQuestion, currentRound, roundCount, questionsPerRound } = state
  const isMyTurn = picker?.id === playerId

  // ── PICKING PHASE ─────────────────────────────────────────────────────────
  if (status === 'picking') {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.pickHeader}>
          <Text style={s.pickTitle}>
            {isMyTurn ? '🎯 Pick a Category!' : `${picker?.displayName ?? '…'} is picking`}
          </Text>
          <Text style={s.roundBadge}>Round {currentRound + 1} of {roundCount}</Text>
        </View>
        {isMyTurn ? (
          <ScrollView contentContainerStyle={s.pickGrid}>
            {CATEGORY_IDS.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[s.pickCard, pickingCategory && s.pickCardDisabled]}
                onPress={() => handlePickCategory(cat)}
                disabled={pickingCategory}
                activeOpacity={0.8}
              >
                <Text style={s.pickCardEmoji}>{CATEGORY_NAMES[cat]?.split(' ')[0] ?? '🎯'}</Text>
                <Text style={s.pickCardName}>{CATEGORY_NAMES[cat]?.slice(3) ?? cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : (
          <View style={s.center}>
            <ActivityIndicator color={COLORS.blue} />
            <Text style={s.waitText}>Waiting for category selection…</Text>
          </View>
        )}
      </SafeAreaView>
    )
  }

  // ── LEADERBOARD PHASE ─────────────────────────────────────────────────────
  if (status === 'showing_leaderboard') {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.lbHeader}>
          <Text style={s.lbTitle}>Round {currentRound + 1} Complete</Text>
          <Text style={s.lbSub}>Next round starting soon…</Text>
        </View>
        <ScrollView contentContainerStyle={s.lbList}>
          {leaderboard.map((p, i) => (
            <LbRow key={p.id} entry={p} isMe={p.id === playerId} index={i} />
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }

  // ── ACTIVE / SHOWING_ANSWER PHASE ─────────────────────────────────────────
  const progress = timeLeft / (timePerQuestion || 20)
  const timerColor =
    progress > 0.5 ? COLORS.green : progress > 0.25 ? COLORS.gold : COLORS.red

  return (
    <SafeAreaView style={s.container}>
      {/* Timer bar */}
      <View style={s.timerContainer}>
        <View style={[s.timerBar, { backgroundColor: COLORS.border }]}>
          <View
            style={[
              s.timerFill,
              { width: `${Math.max(0, progress * 100)}%` as `${number}%`, backgroundColor: timerColor },
            ]}
          />
        </View>
        <Text style={[s.timerText, { color: timerColor }]}>{Math.ceil(timeLeft)}s</Text>
      </View>

      {/* Question header */}
      <View style={s.questionHeader}>
        <Text style={s.categoryTag}>{roundCategory ?? 'Trivia'}</Text>
        <Text style={s.questionNum}>
          Q{(question?.globalIndex ?? 0) + 1} / {question?.totalQuestions ?? questionsPerRound * roundCount}
        </Text>
      </View>

      {/* Question text */}
      <View style={s.questionBox}>
        <Text style={s.questionText}>{question?.text ?? '…'}</Text>
      </View>

      {/* Answer buttons */}
      <View style={s.answersGrid}>
        {(question?.answers ?? []).map((answer, idx) => {
          const isSelected = selectedAnswer === answer
          const revealCorrect = status === 'showing_answer' && question?.correctAnswer === answer
          const revealWrong = isSelected && answerResult && !answerResult.isCorrect

          let bg = COLORS.card
          let borderColor = COLORS.border
          if (hasAnswered) {
            if (revealCorrect) { bg = '#0D3B27'; borderColor = COLORS.green }
            else if (revealWrong) { bg = '#3B0A0A'; borderColor = COLORS.red }
            else if (isSelected) { bg = COLORS.cardHover }
          } else if (isSelected) {
            bg = COLORS.cardHover; borderColor = COLORS.blue
          }

          return (
            <TouchableOpacity
              key={idx}
              style={[s.answerBtn, { backgroundColor: bg, borderColor }]}
              onPress={() => handleAnswer(answer)}
              disabled={hasAnswered || submitting}
              activeOpacity={0.85}
            >
              <Text style={s.answerBtnText}>{answer}</Text>
              {revealCorrect && <Text style={s.answerMark}>✓</Text>}
              {revealWrong && <Text style={s.answerMark}>✗</Text>}
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Answer result banner */}
      {answerResult && (
        <View style={[s.resultBanner, { backgroundColor: answerResult.isCorrect ? '#0D3B27' : '#3B0A0A' }]}>
          <Text style={s.resultIcon}>{answerResult.isCorrect ? '✓' : '✗'}</Text>
          <View style={s.resultBody}>
            <Text style={[s.resultTitle, { color: answerResult.isCorrect ? COLORS.green : COLORS.red }]}>
              {answerResult.isCorrect
                ? `+${answerResult.pointsEarned} pts${answerResult.streak > 1 ? ` 🔥×${answerResult.streak}` : ''}`
                : 'Wrong!'}
            </Text>
            {!answerResult.isCorrect && (
              <Text style={s.resultHint} numberOfLines={2}>
                {answerResult.correctAnswer}
              </Text>
            )}
          </View>
          <Text style={s.totalScore}>{answerResult.newScore.toLocaleString()}</Text>
        </View>
      )}

      {/* Waiting banner after answer */}
      {hasAnswered && !answerResult && (
        <View style={s.waitingBanner}>
          <ActivityIndicator size="small" color={COLORS.muted} />
          <Text style={s.waitingBannerText}>Waiting for others…</Text>
        </View>
      )}
    </SafeAreaView>
  )
}

function LbRow({ entry, isMe, index }: { entry: LeaderboardPlayer; isMe: boolean; index: number }) {
  const medals = ['🥇', '🥈', '🥉']
  return (
    <View style={[lb.row, isMe && lb.rowMe]}>
      <Text style={lb.rank}>{medals[index] ?? `#${entry.rank}`}</Text>
      <Text style={[lb.name, isMe && lb.nameMe]} numberOfLines={1}>
        {entry.displayName}{isMe ? ' (You)' : ''}
      </Text>
      <Text style={lb.score}>{entry.score.toLocaleString()}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontSize: 15, color: COLORS.muted },
  errorText: { fontSize: 16, color: COLORS.red },
  leaveBtn: { backgroundColor: COLORS.card, borderRadius: 12, paddingHorizontal: 24, paddingVertical: 14, minHeight: 44 },
  leaveBtnText: { fontSize: 15, color: COLORS.white, fontWeight: '600' },

  // Timer
  timerContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 8, gap: 10 },
  timerBar: { flex: 1, height: 6, borderRadius: 3, overflow: 'hidden' },
  timerFill: { height: '100%', borderRadius: 3 },
  timerText: { fontSize: 14, fontWeight: '800', width: 30, textAlign: 'right' },

  // Question
  questionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 8 },
  categoryTag: { fontSize: 13, color: COLORS.blue, fontWeight: '700' },
  questionNum: { fontSize: 13, color: COLORS.muted },
  questionBox: { flex: 1, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 12 },
  questionText: { fontSize: 22, fontWeight: '700', color: COLORS.white, lineHeight: 30, textAlign: 'center' },

  // Answers
  answersGrid: { paddingHorizontal: 16, paddingBottom: 8, gap: 10 },
  answerBtn: {
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  answerBtnText: { flex: 1, fontSize: 16, fontWeight: '600', color: COLORS.white, lineHeight: 22 },
  answerMark: { fontSize: 18, marginLeft: 8 },

  // Result
  resultBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  resultIcon: { fontSize: 24 },
  resultBody: { flex: 1, gap: 2 },
  resultTitle: { fontSize: 16, fontWeight: '800' },
  resultHint: { fontSize: 13, color: COLORS.muted },
  totalScore: { fontSize: 18, fontWeight: '800', color: COLORS.white },

  waitingBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    gap: 8,
  },
  waitingBannerText: { fontSize: 13, color: COLORS.muted },

  // Picking
  pickHeader: { padding: 20, gap: 6 },
  pickTitle: { fontSize: 22, fontWeight: '800', color: COLORS.white },
  roundBadge: { fontSize: 13, color: COLORS.muted },
  pickGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 12, gap: 10 },
  pickCard: {
    width: '46%',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 80,
    justifyContent: 'center',
  },
  pickCardDisabled: { opacity: 0.4 },
  pickCardEmoji: { fontSize: 28 },
  pickCardName: { fontSize: 13, color: COLORS.white, fontWeight: '600', textAlign: 'center' },
  waitText: { fontSize: 15, color: COLORS.muted, marginTop: 8 },

  // Leaderboard
  lbHeader: { padding: 20, gap: 4 },
  lbTitle: { fontSize: 24, fontWeight: '800', color: COLORS.white },
  lbSub: { fontSize: 14, color: COLORS.muted },
  lbList: { paddingHorizontal: 16, gap: 8, paddingBottom: 40 },
})

const lb = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  rowMe: { borderColor: COLORS.gold },
  rank: { fontSize: 20, width: 36, textAlign: 'center' },
  name: { flex: 1, fontSize: 15, fontWeight: '700', color: COLORS.white },
  nameMe: { color: COLORS.gold },
  score: { fontSize: 16, fontWeight: '800', color: COLORS.blue },
})
