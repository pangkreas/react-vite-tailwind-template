type StorageValue = boolean | number | string | null | StorageValue[] | {
  [key: string]: StorageValue
}

export function getStorageItem<TValue extends StorageValue>(
  key: string,
  fallback: TValue,
  storage: Storage = window.localStorage,
): TValue {
  const value = storage.getItem(key)

  if (!value) {
    return fallback
  }

  try {
    return JSON.parse(value) as TValue
  } catch {
    return fallback
  }
}

export function setStorageItem<TValue extends StorageValue>(
  key: string,
  value: TValue,
  storage: Storage = window.localStorage,
) {
  storage.setItem(key, JSON.stringify(value))
}

export function removeStorageItem(
  key: string,
  storage: Storage = window.localStorage,
) {
  storage.removeItem(key)
}
