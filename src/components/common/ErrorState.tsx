import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export interface ErrorStateProps {
  title?: string
  message?: string
  action?: ReactNode
  className?: string
}

export function ErrorState({
  action,
  className,
  message = 'Something went wrong. Please try again.',
  title = 'Unable to load data',
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-red-200 bg-red-50 p-5 text-red-900 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-100',
        className,
      )}
      role="alert"
    >
      <div className="grid gap-2">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-sm">{message}</p>
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
    </div>
  )
}

/*
Example:
<ErrorState action={<Button variant="outline">Retry</Button>} />
*/
