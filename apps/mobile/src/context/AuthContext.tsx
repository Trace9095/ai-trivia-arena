import React, { createContext } from 'react'
import type { User } from '../types/api'

interface AuthContextValue {
  user: User | null
  isGuest: boolean
  isAuthenticated: boolean
  loading: boolean
  signIn: (sessionToken: string) => Promise<void>
  signOut: () => Promise<void>
  continueAsGuest: () => void
  refreshUser: () => Promise<void>
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  isGuest: false,
  isAuthenticated: false,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
  continueAsGuest: () => {},
  refreshUser: async () => {},
})
