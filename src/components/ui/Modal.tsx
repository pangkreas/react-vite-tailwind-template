import { useId, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

import { Button } from './Button'

export interface ModalProps {
  open: boolean
  title?: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
  onClose: () => void
}

export function Modal({
  children,
  className,
  description,
  footer,
  onClose,
  open,
  title,
}: ModalProps) {
  const titleId = useId()
  const descriptionId = useId()

  if (!open) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4"
      role="presentation"
    >
      <section
        aria-describedby={description ? descriptionId : undefined}
        aria-labelledby={title ? titleId : undefined}
        aria-modal="true"
        className={cn(
          'w-full max-w-lg rounded-lg border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950',
          className,
        )}
        role="dialog"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="grid gap-1">
            {title ? (
              <h2
                className="text-lg font-semibold text-slate-950 dark:text-slate-50"
                id={titleId}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className="text-sm text-slate-500 dark:text-slate-400"
                id={descriptionId}
              >
                {description}
              </p>
            ) : null}
          </div>
          <Button aria-label="Close modal" size="sm" variant="ghost" onClick={onClose}>
            X
          </Button>
        </div>
        <div>{children}</div>
        {footer ? (
          <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            {footer}
          </div>
        ) : null}
      </section>
    </div>
  )
}

/*
Example:
<Modal open={open} title="Edit profile" onClose={() => setOpen(false)}>
  Content
</Modal>
*/
