import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

export interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({
  actions,
  className,
  description,
  eyebrow,
  title,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between dark:border-slate-800',
        className,
      )}
    >
      <div className="grid gap-1">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl dark:text-slate-50">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  )
}

/*
Example:
<PageHeader title="Users" description="Manage user access" actions={<Button>Add</Button>} />
*/
