import { useState, useEffect, useRef, useCallback } from 'react'
import { AppState, type AppStateStatus } from 'react-native'
import { api } from '../lib/api'
import type { LiveGameState } from '../types/api'

const POLL_INTERVAL_MS = 1500

export function useGameState(code: string | null) {
  const [state, setState] = useState<LiveGameState | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const appStateRef = useRef<AppStateStatus>(AppState.currentState)
  const isFinished = state?.status === 'finished'

  const poll = useCallback(async () => {
    if (!code) return
    try {
      const gameState = await api.live.getState(code)
      setState(gameState)
      setError(null)
      setLoading(false)
    } catch {
      setError('Connection error')
      setLoading(false)
    }
  }, [code])

  useEffect(() => {
    if (!code) return

    poll()

    intervalRef.current = setInterval(() => {
      if (appStateRef.current === 'active') {
        poll()
      }
    }, POLL_INTERVAL_MS)

    const subscription = AppState.addEventListener('change', (next: AppStateStatus) => {
      appStateRef.current = next
    })

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      subscription.remove()
    }
  }, [code, poll])

  // Stop polling when game ends
  useEffect(() => {
    if (isFinished && intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [isFinished])

  return { state, error, loading, refetch: poll }
}
