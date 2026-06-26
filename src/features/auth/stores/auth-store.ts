import { create } from 'zustand'

import type { AuthUser } from '../types'

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
  logout: () => set({ user: null, accessToken: null }),
}))
