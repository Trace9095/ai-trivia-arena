import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Haptics from 'expo-haptics'
import { COLORS } from '../../config'
import { api } from '../../lib/api'
import type { SoloGameScreenProps } from '../../navigation/types'
import type { SoloQuestion } from '../../types/api'

interface AnswerState {
  selected: string
  isCorrect: boolean
  correct: string
  explanation: string | null
  points: number
}

export default function SoloGameScreen({ route, navigation }: SoloGameScreenProps) {
  const { category, difficulty } = route.params
  const [gameId, setGameId] = useState<string | null>(null)
  const [questions, setQuestions] = useState<SoloQuestion[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)
  const [answerState, setAnswerState] = useState<AnswerState | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [answers, setAnswers] = useState<AnswerState[]>([])
  const [done, setDone] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    api.games
      .createSolo({ category, difficulty })
      .then(({ game, questions: qs }) => {
        setGameId(game.id)
        setQuestions(qs)
        setLoading(false)
        startTimer()
      })
      .catch(() => {
        Alert.alert('Error', 'Could not start game. Please try again.', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ])
      })
  }, [])

  const startTimer = useCallback(() => {
    setTimeLeft(15)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!)
          return 0
        }
        return t - 1
      })
    }, 1000)
  }, [])

  // Auto-submit on timeout
  useEffect(() => {
    if (timeLeft === 0 && !answerState && !loading && questions[currentIdx]) {
      handleAnswer('__timeout__')
    }
  }, [timeLeft])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleAnswer = useCallback(
    async (selected: string) => {
      if (answerState || submitting || !gameId) return
      const q = questions[currentIdx]
      if (!q) return
      if (timerRef.current) clearInterval(timerRef.current)
      setSubmitting(true)
      const timeMs = (15 - timeLeft) * 1000
      try {
        const result = await api.games.submitAnswer(gameId, {
          questionId: q.id,
          selectedAnswer: selected === '__timeout__' ? '' : selected,
          timeMs,
        })
        const state: AnswerState = {
          selected: selected === '__timeout__' ? '' : selected,
          isCorrect: result.isCorrect,
          correct: result.correctAnswer,
          explanation: result.explanation ?? null,
          points: result.pointsEarned,
        }
        setAnswerState(state)
        setAnswers((prev) => [...prev, state])
        if (result.isCorrect) {
          setScore((s) => s + result.pointsEarned)
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        } else {
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
        }
      } catch {
        setAnswerState({ selected: '', isCorrect: false, correct: q.correctAnswer, explanation: null, points: 0 })
      } finally {
        setSubmitting(false)
      }
    },
    [answerState, submitting, gameId, questions, currentIdx, timeLeft]
  )

  const handleNext = () => {
    const next = currentIdx + 1
    if (next >= questions.length) {
      setDone(true)
      return
    }
    setCurrentIdx(next)
    setAnswerState(null)
    startTimer()
  }

  if (loading) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.center}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={s.loadingText}>Generating questions…</Text>
        </View>
      </SafeAreaView>
    )
  }

  if (done) {
    const correct = answers.filter((a) => a.isCorrect).length
    return (
      <SafeAreaView style={s.container}>
        <ScrollView contentContainerStyle={s.scroll}>
          <Text style={s.doneTitle}>Complete! 🎉</Text>
          <View style={s.doneStats}>
            <Text style={s.doneScore}>{score.toLocaleString()}</Text>
            <Text style={s.doneLabel}>points</Text>
          </View>
          <View style={s.doneMeta}>
            <Text style={s.doneMetaText}>
              {correct}/{questions.length} correct
            </Text>
            <Text style={s.doneMetaText}>
              {Math.round((correct / questions.length) * 100)}% accuracy
            </Text>
          </View>
          <View style={s.doneActions}>
            <TouchableOpacity
              style={s.playAgainBtn}
              onPress={() => {
                setDone(false)
                setCurrentIdx(0)
                setScore(0)
                setAnswers([])
                setAnswerState(null)
                setLoading(true)
                api.games.createSolo({ category, difficulty }).then(({ game, questions: qs }) => {
                  setGameId(game.id)
                  setQuestions(qs)
                  setLoading(false)
                  startTimer()
                })
              }}
              activeOpacity={0.85}
            >
              <Text style={s.playAgainText}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={s.homeBtn}
              onPress={() => navigation.navigate('MainTabs', { screen: 'Play' })}
              activeOpacity={0.7}
            >
              <Text style={s.homeText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  const q = questions[currentIdx]
  const allAnswers = q ? [...q.wrongAnswers, q.correctAnswer].sort() : []
  const progress = (currentIdx / questions.length) * 100

  return (
    <SafeAreaView style={s.container}>
      {/* Progress bar */}
      <View style={s.progressBar}>
        <View style={[s.progressFill, { width: `${progress}%` as `${number}%` }]} />
      </View>

      <View style={s.topRow}>
        <Text style={s.questionCount}>{currentIdx + 1} / {questions.length}</Text>
        <Text style={s.scoreDisplay}>{score.toLocaleString()} pts</Text>
        <Text style={[s.timer, timeLeft <= 5 && s.timerUrgent]}>{timeLeft}s</Text>
      </View>

      <View style={s.questionBox}>
        <Text style={s.questionText}>{q?.questionText ?? ''}</Text>
      </View>

      <View style={s.answersGrid}>
        {allAnswers.map((ans, idx) => {
          const isSelected = answerState?.selected === ans
          const isCorrect = ans === q?.correctAnswer
          const revealCorrect = !!answerState && isCorrect
          const revealWrong = isSelected && !answerState?.isCorrect

          let bg = COLORS.card
          let borderColor = COLORS.border
          if (answerState) {
            if (revealCorrect) { bg = '#0D3B27'; borderColor = COLORS.green }
            else if (revealWrong) { bg = '#3B0A0A'; borderColor = COLORS.red }
          } else if (isSelected) {
            borderColor = COLORS.blue
          }

          return (
            <TouchableOpacity
              key={idx}
              style={[s.answerBtn, { backgroundColor: bg, borderColor }]}
              onPress={() => handleAnswer(ans)}
              disabled={!!answerState || submitting}
              activeOpacity={0.85}
            >
              <Text style={s.answerText}>{ans}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      {answerState && (
        <View style={s.resultArea}>
          <View style={[s.resultBanner, { borderColor: answerState.isCorrect ? COLORS.green : COLORS.red }]}>
            <Text style={[s.resultTitle, { color: answerState.isCorrect ? COLORS.green : COLORS.red }]}>
              {answerState.isCorrect ? `✓ Correct! +${answerState.points} pts` : `✗ Wrong`}
            </Text>
            {!answerState.isCorrect && (
              <Text style={s.correctAnswer}>Correct: {answerState.correct}</Text>
            )}
            {answerState.explanation && (
              <Text style={s.explanation}>{answerState.explanation}</Text>
            )}
          </View>
          <TouchableOpacity style={s.nextBtn} onPress={handleNext} activeOpacity={0.85}>
            <Text style={s.nextBtnText}>
              {currentIdx + 1 < questions.length ? 'Next Question →' : 'See Results →'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontSize: 15, color: COLORS.muted },
  progressBar: { height: 4, backgroundColor: COLORS.border },
  progressFill: { height: 4, backgroundColor: COLORS.blue },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  questionCount: { fontSize: 14, color: COLORS.muted, fontWeight: '600' },
  scoreDisplay: { fontSize: 14, color: COLORS.blue, fontWeight: '800' },
  timer: { fontSize: 14, color: COLORS.white, fontWeight: '800', minWidth: 28, textAlign: 'right' },
  timerUrgent: { color: COLORS.red },
  questionBox: { flex: 1, justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 8 },
  questionText: { fontSize: 21, fontWeight: '700', color: COLORS.white, lineHeight: 30, textAlign: 'center' },
  answersGrid: { paddingHorizontal: 16, paddingBottom: 8, gap: 10 },
  answerBtn: {
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    minHeight: 60,
    justifyContent: 'center',
  },
  answerText: { fontSize: 16, fontWeight: '600', color: COLORS.white, lineHeight: 22 },
  resultArea: { paddingHorizontal: 16, paddingBottom: 12, gap: 10 },
  resultBanner: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    gap: 4,
    borderWidth: 1.5,
  },
  resultTitle: { fontSize: 16, fontWeight: '800' },
  correctAnswer: { fontSize: 14, color: COLORS.white },
  explanation: { fontSize: 13, color: COLORS.muted, lineHeight: 18 },
  nextBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    minHeight: 56,
  },
  nextBtnText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  // Done screen
  scroll: { padding: 24, gap: 24, alignItems: 'center' },
  doneTitle: { fontSize: 36, fontWeight: '900', color: COLORS.white },
  doneStats: { alignItems: 'center', gap: 4 },
  doneScore: { fontSize: 64, fontWeight: '900', color: COLORS.gold },
  doneLabel: { fontSize: 18, color: COLORS.muted },
  doneMeta: { flexDirection: 'row', gap: 24 },
  doneMetaText: { fontSize: 15, color: COLORS.muted },
  doneActions: { width: '100%', gap: 12 },
  playAgainBtn: {
    backgroundColor: COLORS.blue,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    minHeight: 56,
  },
  playAgainText: { fontSize: 16, fontWeight: '700', color: COLORS.white },
  homeBtn: { alignItems: 'center', paddingVertical: 14, minHeight: 44 },
  homeText: { fontSize: 14, color: COLORS.muted },
})
