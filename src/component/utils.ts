export { default as dayjs } from 'dayjs'

export const defaultWindow =
  typeof window !== 'undefined' && typeof document !== 'undefined'
    ? window
    : undefined

export const getWeekDaysNames = (locale: string, firstDayOfWeek: 0 | 1) => {
  const baseDate = new Date(Date.UTC(2017, 0, 2))
  const weekDays = []

  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'short' }))
    baseDate.setDate(baseDate.getDate() + 1)
  }

  if (!firstDayOfWeek) {
    weekDays.unshift(weekDays.pop() as string)
  }

  return weekDays
}
