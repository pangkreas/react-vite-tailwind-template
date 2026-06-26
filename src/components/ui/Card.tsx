import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: CardSectionProps) {
  return (
    <div className={cn('grid gap-1.5 p-5 sm:p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...props }: CardSectionProps) {
  return (
    <div
      className={cn('text-lg font-semibold leading-none tracking-normal', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }: CardSectionProps) {
  return (
    <div className={cn('p-5 pt-0 sm:p-6 sm:pt-0', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className, ...props }: CardSectionProps) {
  return (
    <div
      className={cn('flex items-center gap-3 p-5 pt-0 sm:p-6 sm:pt-0', className)}
      {...props}
    >
      {children}
    </div>
  )
}

/*
Example:
<Card>
  <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
  <CardContent>$12,400</CardContent>
</Card>
*/
