import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { LoginPage } from '@/features/auth'
// PANGKREAS_PUBLIC_ROUTE_IMPORTS
import { DashboardPage } from '@/features/dashboard'
// PANGKREAS_PROTECTED_ROUTE_IMPORTS
import { AppLayout } from '@/layouts/app-layout'
import { AuthLayout } from '@/layouts/auth-layout'
import { ROUTES } from '@/constants/routes'

import { ProtectedRoute } from './routes/protected-route'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Navigate to={ROUTES.dashboard} replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
      // PANGKREAS_PUBLIC_ROUTES
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTES.dashboard,
            element: <DashboardPage />,
          },
          // PANGKREAS_PROTECTED_ROUTES
        ],
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
