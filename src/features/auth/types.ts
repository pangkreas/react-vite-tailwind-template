export type AuthUser = {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'staff'
}

export type LoginPayload = {
  email: string
  password: string
}
