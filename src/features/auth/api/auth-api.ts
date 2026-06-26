import type { AuthUser, LoginPayload } from '../types'

type LoginResponse = {
  user: AuthUser
  accessToken: string
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, 300)
  })

  return {
    accessToken: 'demo-access-token',
    user: {
      id: 'usr_demo',
      name: payload.email.split('@')[0] || 'Demo User',
      email: payload.email,
      role: 'admin',
    },
  }
}
