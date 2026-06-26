import { useState } from 'react'

export function useDashboardCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount((currentCount) => currentCount + 1)
  }

  return {
    count,
    increment,
  }
}
