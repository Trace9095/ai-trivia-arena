export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  totalScore: number
  gamesPlayed: number
  streak: number
  longestStreak: number
  lastPlayedAt: Date | null
  createdAt: Date
}

export interface Question {
  id: string
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string | null
  category: string
  difficulty: string
}

export interface GameState {
  gameId: string
  currentQuestion: number
  score: number
  answers: AnswerRecord[]
  startedAt: number
}

export interface AnswerRecord {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
  timeMs: number
  pointsEarned: number
}

export interface LeaderboardEntry {
  rank: number
  userId: string
  name: string | null
  email: string
  score: number
  gamesPlayed: number
}
