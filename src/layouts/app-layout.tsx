import { Link, Outlet } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/features/auth'

import './app-layout.css'

export function AppLayout() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Link className="app-brand" to="/dashboard">
          Enterprise UI
        </Link>
        <nav className="app-nav" aria-label="Primary navigation">
          <Link to="/dashboard">Dashboard</Link>
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
