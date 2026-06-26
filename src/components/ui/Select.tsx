import { forwardRef, useId, type SelectHTMLAttributes } from 'react'

import { cn } from '@/lib/cn'

export type SelectOption = {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, error, helperText, id, label, options, placeholder, ...props },
    ref,
  ) => {
    const generatedId = useId()
    const selectId = id ?? props.name ?? generatedId
    const messageId = `${selectId}-message`
    const message = error ?? helperText

    return (
      <div className="grid w-full gap-1.5">
        {label ? (
          <label
            className="text-sm font-medium text-slate-700 dark:text-slate-200"
            htmlFor={selectId}
          >
            {label}
          </label>
        ) : null}
        <select
          ref={ref}
          aria-describedby={message ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          id={selectId}
          className={cn(
            'h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors',
            'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20',
            'disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-70',
            'dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option disabled value="">
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select'

/*
Example:
<Select label="Role" options={[{ label: 'Admin', value: 'admin' }]} />
*/
