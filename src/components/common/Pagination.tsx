import { Button } from '@/components/ui'
import { cn } from '@/lib/cn'

export interface PaginationProps {
  page: number
  pageSize: number
  totalItems: number
  className?: string
  onPageChange: (page: number) => void
}

export function Pagination({
  className,
  onPageChange,
  page,
  pageSize,
  totalItems,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const canGoPrevious = page > 1
  const canGoNext = page < totalPages

  return (
    <nav
      aria-label="Pagination"
      className={cn(
        'flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400',
        className,
      )}
    >
      <span>
        Page {page} of {totalPages}
      </span>
      <div className="flex gap-2">
        <Button
          disabled={!canGoPrevious}
          size="sm"
          variant="outline"
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={!canGoNext}
          size="sm"
          variant="outline"
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </Button>
      </div>
    </nav>
  )
}

/*
Example:
<Pagination page={page} pageSize={10} totalItems={87} onPageChange={setPage} />
*/
