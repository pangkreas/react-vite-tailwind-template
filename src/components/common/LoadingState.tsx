import { cn } from '@/lib/cn'

export interface LoadingStateProps {
  label?: string
  className?: string
}

export function LoadingState({ className, label = 'Loading...' }: LoadingStateProps) {
  return (
    <div
      className={cn(
        'flex min-h-40 items-center justify-center gap-3 rounded-lg border border-slate-200 p-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400',
        className,
      )}
      role="status"
    >
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
      {label}
    </div>
  )
}

/*
Example:
<LoadingState label="Loading invoices..." />
*/
