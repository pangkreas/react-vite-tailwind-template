type FormatCurrencyOptions = {
  currency?: string
  locale?: string
  maximumFractionDigits?: number
  minimumFractionDigits?: number
}

export function formatCurrency(
  value: number,
  options: FormatCurrencyOptions = {},
) {
  const {
    currency = 'USD',
    locale = 'en-US',
    maximumFractionDigits,
    minimumFractionDigits,
  } = options

  return new Intl.NumberFormat(locale, {
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
    style: 'currency',
  }).format(value)
}
