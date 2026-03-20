import { useState, useEffect, useCallback } from 'react'
import { getToken, setToken, clearToken } from '../lib/auth'
import { api } from '../lib/api'
import type { User } from '../types/api'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isGuest, setIsGuest] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = useCallback(async () => {
    try {
      const token = await getToken()
      if (!token) {
        setLoading(false)
        return
      }
      const profile = await api.profile.get()
      setUser(profile)
    } catch {
      // Token expired or invalid — clear it
      await clearToken()
    } finally {
      setLoading(false)
    }
  }, [])

  const signIn = useCallback(async (sessionToken: string) => {
    await setToken(sessionToken)
    const profile = await api.profile.get()
    setUser(profile)
    setIsGuest(false)
  }, [])

  const signOut = useCallback(async () => {
    await api.auth.logout()
    await clearToken()
    setUser(null)
    setIsGuest(false)
  }, [])

  const continueAsGuest = useCallback(() => {
    setIsGuest(true)
    setLoading(false)
  }, [])

  return {
    user,
    isGuest,
    loading,
    isAuthenticated: !!user,
    signIn,
    signOut,
    continueAsGuest,
    refreshUser: checkAuth,
  }
}
