export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  totalScore: number
  gamesPlayed: number
  streak: number
  longestStreak: number
  lastPlayedAt: string | null
  createdAt: string
}

export interface LeaderboardEntry {
  rank: number
  id: string
  name: string | null
  email: string
  totalScore: number
  gamesPlayed: number
  streak: number
}

export interface DailyQuestion {
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string
}

export interface DailyChallenge {
  id: string
  date: string
  category: string
  questions: DailyQuestion[]
  createdAt: string
}

export interface SoloQuestion {
  id: string
  gameId: string
  category: string
  difficulty: string
  questionText: string
  correctAnswer: string
  wrongAnswers: string[]
  explanation: string | null
  createdAt: string
}

export interface SoloGame {
  id: string
  hostUserId: string
  category: string
  difficulty: string
  status: string
  maxPlayers: number
  createdAt: string
}

export interface LivePlayer {
  id: string
  displayName: string
  score: number
}

export interface LeaderboardPlayer {
  rank: number
  id: string
  displayName: string
  score: number
  correctCount: number
  streak: number
}

export interface QuestionData {
  globalIndex: number
  roundIndex: number
  indexInRound: number
  totalInRound: number
  totalQuestions: number
  text: string
  answers: string[]
  correctAnswer?: string
  explanation?: string
}

export type GameStatus =
  | 'waiting'
  | 'picking'
  | 'active'
  | 'showing_answer'
  | 'showing_leaderboard'
  | 'finished'

export interface LiveGameState {
  gameCode: string
  status: GameStatus
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
  players: LivePlayer[]
  leaderboard: LeaderboardPlayer[]
  picker: { id: string; displayName: string } | null
  question: QuestionData | null
  answeredCount: number
  startedAt: string | null
  finishedAt: string | null
}

export interface AnswerSubmitResult {
  isCorrect: boolean
  pointsEarned: number
  correctAnswer: string
  explanation?: string
  newScore: number
  streak: number
}

export interface JoinResult {
  playerId: string
  gameId: string
  gameCode: string
  displayName: string
}
