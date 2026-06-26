import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { useMutation } from '@/lib/query'

import { login } from '../api/auth-api'
import { useAuthStore } from '../stores/auth-store'
import type { LoginPayload } from '../types'
import { saveAccessToken } from '../utils/auth-token'

export function useLogin() {
  const navigate = useNavigate()
  const setSession = useAuthStore((state) => state.setSession)

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (session) => {
      saveAccessToken(session.accessToken)
      setSession(session)
      navigate(ROUTES.dashboard, { replace: true })
    },
  })
}
