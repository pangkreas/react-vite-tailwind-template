import { Badge, type BadgeVariant } from '@/components/ui'

export type StatusTone = 'active' | 'inactive' | 'pending' | 'success' | 'failed' | 'draft'

export interface StatusBadgeProps {
  status: StatusTone | string
  label?: string
  className?: string
}

const statusVariants: Record<StatusTone, BadgeVariant> = {
  active: 'success',
  inactive: 'neutral',
  pending: 'warning',
  success: 'success',
  failed: 'danger',
  draft: 'info',
}

function getVariant(status: string): BadgeVariant {
  return status in statusVariants
    ? statusVariants[status as StatusTone]
    : 'neutral'
}

export function StatusBadge({ className, label, status }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase()

  return (
    <Badge className={className} variant={getVariant(normalizedStatus)}>
      {label ?? status}
    </Badge>
  )
}

/*
Example:
<StatusBadge status="active" />
*/
