import type { ChangeEvent } from 'react'

import { Input } from '@/components/ui'

export interface SearchInputProps {
  value: string
  ariaLabel?: string
  placeholder?: string
  className?: string
  onChange: (value: string) => void
}

export function SearchInput({
  ariaLabel = 'Search',
  className,
  onChange,
  placeholder = 'Search...',
  value,
}: SearchInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <Input
      aria-label={ariaLabel}
      className={className}
      placeholder={placeholder}
      type="search"
      value={value}
      onChange={handleChange}
    />
  )
}

/*
Example:
<SearchInput value={query} onChange={setQuery} placeholder="Search customers" />
*/
