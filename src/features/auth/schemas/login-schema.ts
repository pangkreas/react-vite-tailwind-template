import type { LoginPayload } from '../types'

type ValidationResult =
  | {
      valid: true
    }
  | {
      valid: false
      message: string
    }

export function validateLogin(payload: LoginPayload): ValidationResult {
  if (!payload.email.includes('@')) {
    return {
      valid: false,
      message: 'Email must be valid.',
    }
  }

  if (payload.password.length < 6) {
    return {
      valid: false,
      message: 'Password must contain at least 6 characters.',
    }
  }

  return { valid: true }
}
