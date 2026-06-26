import { forwardRef, useId, type InputHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, id, label, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? props.name ?? generatedId
    const messageId = `${inputId}-message`
    const message = error ?? helperText

    return (
      <div className="grid w-full gap-1.5">
        {label ? (
          <label
            className="text-sm font-medium text-slate-700 dark:text-slate-200"
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          aria-describedby={message ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          id={inputId}
          className={cn(
            'h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors',
            'placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70',
            'dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className,
          )}
          {...props}
        />
        {message ? (
          <p
            className={cn('text-sm', error ? 'text-red-600' : 'text-slate-500')}
            id={messageId}
          >
            {message}
          </p>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

/*
Example:
<Input label="Email" type="email" placeholder="you@example.com" />
*/
