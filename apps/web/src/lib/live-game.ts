/**
 * Shared helpers for live game (TV mode) logic.
 */
import { type InferSelectModel } from 'drizzle-orm'
import { type liveGames, type livePlayers } from '@/db/schema'

export type LiveGame = InferSelectModel<typeof liveGames>
export type LivePlayer = InferSelectModel<typeof livePlayers>

export type RoundQuestion = {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

export type GameRound = {
  category: string
  questions: RoundQuestion[]
}

/** Seeded shuffle — same seed always produces same order, so TV + all phones agree on A/B/C/D */
export function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 0
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0
  }
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1664525) + 1013904223) | 0
    const j = ((h >>> 0) % (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Get the current question for a game, or null if game is over */
export function getCurrentQuestion(game: LiveGame): RoundQuestion | null {
  const rounds = game.roundsJson as GameRound[]
  const round = rounds[game.currentRound]
  if (!round) return null
  return round.questions[game.currentQuestionIndex] ?? null
}

/** Get shuffled answers for current question (consistent across all clients) */
export function getShuffledAnswers(question: RoundQuestion, seed: string): string[] {
  return seededShuffle([question.correctAnswer, ...question.wrongAnswers], seed)
}

/** Answer key: index of correct answer in shuffled list */
export function getAnswerKey(question: RoundQuestion, shuffledAnswers: string[]): number {
  return shuffledAnswers.indexOf(question.correctAnswer)
}

/** Point calculation */
export function calcPoints(
  isCorrect: boolean,
  timeMs: number,
  timeLimitSec: number,
  difficulty: string,
  streak: number
): number {
  if (!isCorrect) return 0
  const base = difficulty === 'easy' ? 100 : difficulty === 'hard' ? 300 : 200
  const timeLimitMs = timeLimitSec * 1000
  const speedBonus = Math.round(150 * Math.max(0, 1 - timeMs / timeLimitMs))
  const streakBonus = Math.min(streak * 25, 200)
  return base + speedBonus + streakBonus
}

/** True if the current round has more questions after currentQuestionIndex */
export function hasNextQuestion(game: LiveGame): boolean {
  const rounds = game.roundsJson as GameRound[]
  const round = rounds[game.currentRound]
  if (!round) return false
  return game.currentQuestionIndex < round.questions.length - 1
}

/** True if there are more rounds after currentRound */
export function hasNextRound(game: LiveGame): boolean {
  const rounds = game.roundsJson as GameRound[]
  return game.currentRound < game.roundCount - 1 && game.currentRound < rounds.length - 1
}

/** Answer seed for a specific question (ensures stable shuffling) */
export function answerSeed(gameId: string, round: number, questionIndex: number): string {
  return `${gameId}:${round}:${questionIndex}`
}

/** Category display name */
export const CATEGORY_NAMES: Record<string, string> = {
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
