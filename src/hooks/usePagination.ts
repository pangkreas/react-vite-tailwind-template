import { useMemo, useState } from 'react'

type UsePaginationOptions = {
  initialPage?: number
  pageSize?: number
  totalItems: number
}

type UsePaginationReturn = {
  canGoNext: boolean
  canGoPrevious: boolean
  endItem: number
  goNext: () => void
  goPrevious: () => void
  page: number
  pageSize: number
  setPage: (page: number) => void
  startItem: number
  totalItems: number
  totalPages: number
}

function clampPage(page: number, totalPages: number) {
  return Math.min(Math.max(page, 1), totalPages)
}

export function usePagination({
  initialPage = 1,
  pageSize = 10,
  totalItems,
}: UsePaginationOptions): UsePaginationReturn {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const [page, setInternalPage] = useState(() => clampPage(initialPage, totalPages))

  const safePage = clampPage(page, totalPages)

  return useMemo(() => {
    const startItem = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1
    const endItem = Math.min(safePage * pageSize, totalItems)

    function setPage(nextPage: number) {
      setInternalPage(clampPage(nextPage, totalPages))
    }

    return {
      canGoNext: safePage < totalPages,
      canGoPrevious: safePage > 1,
      endItem,
      goNext: () => setPage(safePage + 1),
      goPrevious: () => setPage(safePage - 1),
      page: safePage,
      pageSize,
      setPage,
      startItem,
      totalItems,
      totalPages,
    }
  }, [pageSize, safePage, totalItems, totalPages])
}
