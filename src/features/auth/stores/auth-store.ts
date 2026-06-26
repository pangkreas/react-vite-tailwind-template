import { create } from 'zustand'

import type { AuthUser } from '../types'
import { clearAccessToken } from '../utils/auth-token'

type AuthSession = {
  user: AuthUser
  accessToken: string
}

type AuthState = {
  user: AuthUser | null
  accessToken: string | null
  setSession: (session: AuthSession) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  setSession: (session) => set(session),
  logout: () => {
    clearAccessToken()
    set({ user: null, accessToken: null })
  },
}))
