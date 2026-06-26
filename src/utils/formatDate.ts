type FormatDateOptions = Intl.DateTimeFormatOptions & {
  locale?: string
}

export function formatDate(
  value: string | number | Date,
  options: FormatDateOptions = {},
) {
  const { locale = 'en-US', ...dateOptions } = options

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    ...dateOptions,
  }).format(new Date(value))
}
