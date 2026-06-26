import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { LoginPage } from '@/features/auth'
import { DashboardPage } from '@/features/dashboard'
import { AppLayout } from '@/layouts/app-layout'
import { AuthLayout } from '@/layouts/auth-layout'

import { ProtectedRoute } from './routes/protected-route'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
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
            path: '/dashboard',
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
