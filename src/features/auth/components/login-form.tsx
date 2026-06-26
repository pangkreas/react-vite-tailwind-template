import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { useLogin } from '../hooks/use-login'
import { validateLogin } from '../schemas/login-schema'

import './login-form.css'

export function LoginForm() {
  const loginMutation = useLogin()
  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = validateLogin({ email, password })

    if (!result.valid) {
      setError(result.message)
      return
    }

    setError(null)
    loginMutation.mutate({ email, password })
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1>Sign in</h1>
        <p>Use the demo account to enter the modular TypeScript app.</p>
      </div>

      <label>
        Email
        <input
          autoComplete="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          value={email}
        />
      </label>

      <label>
        Password
        <input
          autoComplete="current-password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          value={password}
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <Button disabled={loginMutation.isPending} type="submit">
        {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  )
}
