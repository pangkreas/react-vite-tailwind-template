import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { ROUTES } from '@/constants/routes'
import { useAuthStore } from '@/features/auth'

export function ProtectedRoute() {
  const location = useLocation()
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return <Navigate to={ROUTES.login} replace state={{ from: location }} />
  }

  return <Outlet />
}
