import type { ReactNode } from 'react'

export type BaseEntity = {
  id: string
  createdAt?: string
  updatedAt?: string
}

export type Option<TValue extends string = string> = {
  label: string
  value: TValue
  disabled?: boolean
}

export type WithChildren = {
  children: ReactNode
}

export type Nullable<TValue> = TValue | null
