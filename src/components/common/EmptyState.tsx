import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export interface EmptyStateProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
  className?: string
}

export function EmptyState({
  action,
  className,
  description,
  icon,
  title,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'grid place-items-center rounded-lg border border-dashed border-slate-300 p-8 text-center dark:border-slate-700',
        className,
      )}
    >
      <div className="grid max-w-sm gap-3">
        {icon ? <div className="mx-auto text-slate-400">{icon}</div> : null}
        <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">
          {title}
        </h2>
        {description ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
        ) : null}
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
    </div>
  )
}

/*
Example:
<EmptyState title="No projects" action={<Button>Create project</Button>} />
*/
