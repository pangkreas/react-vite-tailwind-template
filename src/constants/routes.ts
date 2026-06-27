export const ROUTES = {
  dashboard: '/dashboard',
  home: '/',
  login: '/login',
  // PANGKREAS_ROUTE_CONSTANTS
} as const

export type AppRouteKey = keyof typeof ROUTES
export type AppRoutePath = (typeof ROUTES)[AppRouteKey]
