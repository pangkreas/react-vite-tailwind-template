import { Outlet } from 'react-router-dom'

import './auth-layout.css'

export function AuthLayout() {
  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  )
}
