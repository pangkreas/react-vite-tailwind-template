import { AUTH_STORAGE_KEY } from '../constants/auth-constants'

export function saveAccessToken(accessToken: string) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, accessToken)
}

export function clearAccessToken() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY)
}
