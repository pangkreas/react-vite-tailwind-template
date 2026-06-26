export function getStorageItem<T>(key: string, fallback: T): T {
  const value = window.localStorage.getItem(key)

  if (!value) {
    return fallback
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export function setStorageItem<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
