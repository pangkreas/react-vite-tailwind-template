import { useCallback, useState } from 'react'

type UseDisclosureOptions = {
  defaultOpen?: boolean
}

type UseDisclosureReturn = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  setIsOpen: (isOpen: boolean) => void
}

export function useDisclosure(
  options: UseDisclosureOptions = {},
): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(options.defaultOpen ?? false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((current) => !current), [])

  return {
    close,
    isOpen,
    open,
    setIsOpen,
    toggle,
  }
}
