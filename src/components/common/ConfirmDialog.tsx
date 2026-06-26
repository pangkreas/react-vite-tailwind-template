import type { ReactNode } from 'react'

import { Button, Modal } from '@/components/ui'

export interface ConfirmDialogProps {
  open: boolean
  title: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
  isLoading?: boolean
  children?: ReactNode
  onCancel: () => void
  onConfirm: () => void
}

export function ConfirmDialog({
  cancelLabel = 'Cancel',
  children,
  confirmLabel = 'Confirm',
  description,
  isLoading = false,
  onCancel,
  onConfirm,
  open,
  title,
}: ConfirmDialogProps) {
  return (
    <Modal
      footer={
        <>
          <Button variant="outline" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button isLoading={isLoading} variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </>
      }
      open={open}
      title={title}
      description={description}
      onClose={onCancel}
    >
      {children}
    </Modal>
  )
}

/*
Example:
<ConfirmDialog open={open} title="Delete user?" onCancel={close} onConfirm={removeUser} />
*/
