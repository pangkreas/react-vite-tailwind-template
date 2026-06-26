import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { LoginPage } from '@/features/auth'
import { DashboardPage } from '@/features/dashboard'
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
        ],
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
