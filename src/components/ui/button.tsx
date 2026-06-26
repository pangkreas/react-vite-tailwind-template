import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'outline' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const variants: Record<ButtonVariant, string> = {
  default: 'btn btn-default',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
}

export function Button({
  className,
  variant = 'default',
  type = 'button',
  ...props
}: ButtonProps) {
  return <button className={cn(variants[variant], className)} type={type} {...props} />
}
