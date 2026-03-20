import axios, { type AxiosError } from 'axios'
import { API_BASE_URL } from '../config'
import { getToken } from './auth'
import type {
  User,
  LeaderboardEntry,
  DailyChallenge,
  LiveGameState,
  SoloGame,
  SoloQuestion,
  AnswerSubmitResult,
  JoinResult,
} from '../types/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use(async (config) => {
  const token = await getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

function extractMessage(err: unknown): string {
  const axiosErr = err as AxiosError<{ error?: string }>
  return axiosErr.response?.data?.error ?? 'Something went wrong'
}

export const api = {
  auth: {
    sendMagicLink: async (email: string): Promise<{ success: boolean }> => {
      const { data } = await apiClient.post<{ success: boolean }>('/auth/magic-link', {
        email,
        platform: 'mobile',
      })
      return data
    },
    verifyToken: async (
      token: string
    ): Promise<{ sessionToken: string; user: User }> => {
      const { data } = await apiClient.get<{ sessionToken: string; user: User }>(
        `/auth/verify?token=${encodeURIComponent(token)}&platform=mobile`
      )
      return data
    },
    logout: async (): Promise<void> => {
      await apiClient.post('/auth/logout').catch(() => {})
    },
  },

  profile: {
    get: async (): Promise<User> => {
      const { data } = await apiClient.get<{ user: User }>('/profile')
      return data.user
    },
    update: async (payload: { name?: string; avatarUrl?: string }): Promise<User> => {
      const { data } = await apiClient.put<{ user: User }>('/profile', payload)
      return data.user
    },
  },

  leaderboard: {
    get: async (
      period: 'today' | 'week' | 'alltime' = 'alltime'
    ): Promise<{ leaderboard: LeaderboardEntry[]; period: string }> => {
      const { data } = await apiClient.get<{
        leaderboard: LeaderboardEntry[]
        period: string
      }>(`/leaderboard?period=${period}`)
      return data
    },
  },

  games: {
    getDaily: async (): Promise<DailyChallenge> => {
      const { data } = await apiClient.get<{ challenge: DailyChallenge }>('/games/daily')
      return data.challenge
    },
    createSolo: async (payload: {
      category: string
      difficulty: string
    }): Promise<{ game: SoloGame; questions: SoloQuestion[] }> => {
      const { data } = await apiClient.post<{ game: SoloGame }>('/games', {
        ...payload,
        maxPlayers: 1,
      })
      // Fetch questions separately
      const details = await apiClient.get<{
        game: SoloGame
        questions: SoloQuestion[]
      }>(`/games/${data.game.id}`)
      return { game: data.game, questions: details.data.questions }
    },
    submitAnswer: async (
      gameId: string,
      payload: { questionId: string; selectedAnswer: string; timeMs: number }
    ): Promise<{ isCorrect: boolean; correctAnswer: string; explanation?: string; pointsEarned: number }> => {
      const { data } = await apiClient.post<{
        isCorrect: boolean
        correctAnswer: string
        explanation?: string
        pointsEarned: number
      }>(`/games/${gameId}/answer`, payload)
      return data
    },
  },

  live: {
    join: async (code: string, displayName: string): Promise<JoinResult> => {
      const { data } = await apiClient.post<JoinResult>(
        `/games/live/${code.toUpperCase()}/join`,
        { displayName }
      )
      return data
    },
    getState: async (code: string): Promise<LiveGameState> => {
      const { data } = await apiClient.get<LiveGameState>(
        `/games/live/${code.toUpperCase()}/state`
      )
      return data
    },
    submitAnswer: async (
      code: string,
      payload: { playerId: string; selectedAnswer: string; timeMs: number }
    ): Promise<AnswerSubmitResult> => {
      const { data } = await apiClient.post<AnswerSubmitResult>(
        `/games/live/${code.toUpperCase()}/answer`,
        payload
      )
      return data
    },
    pickCategory: async (
      code: string,
      payload: { playerId: string; category: string }
    ): Promise<{ ok: boolean; category: string }> => {
      const { data } = await apiClient.post<{ ok: boolean; category: string }>(
        `/games/live/${code.toUpperCase()}/pick`,
        payload
      )
      return data
    },
  },
}

export { extractMessage }
