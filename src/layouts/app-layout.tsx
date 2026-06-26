import { Link, Outlet } from 'react-router-dom'

import { Button } from '@/components/ui'
import { APP_NAME } from '@/constants/app'
import { ROUTES } from '@/constants/routes'
import { useAuthStore } from '@/features/auth'

import './app-layout.css'

export function AppLayout() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link className="app-brand" to={ROUTES.dashboard}>
          {APP_NAME}
        </Link>
        <nav className="app-nav" aria-label="Primary navigation">
          <Link to={ROUTES.dashboard}>Dashboard</Link>
        </nav>
      </aside>

      <div className="app-main">
        <header className="app-header">
          <div>
            <p className="eyebrow">Signed in as</p>
            <strong>{user?.name}</strong>
          </div>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
