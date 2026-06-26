import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuthStore } from '@/features/auth'

export function ProtectedRoute() {
  const location = useLocation()
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <Outlet />
}
