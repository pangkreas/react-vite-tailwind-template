export const ROUTES = {
  dashboard: '/dashboard',
  home: '/',
  login: '/login',
} as const

export type AppRouteKey = keyof typeof ROUTES
export type AppRoutePath = (typeof ROUTES)[AppRouteKey]
