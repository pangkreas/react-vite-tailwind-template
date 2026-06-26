export type ApiError = {
  code?: string
  message: string
  status?: number
}

export type ApiResponse<TData> = {
  data: TData
  message?: string
  success: boolean
}

export type PaginatedResponse<TData> = {
  data: TData[]
  meta: PaginationMeta
}

export type PaginationMeta = {
  page: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export type SortDirection = 'asc' | 'desc'
