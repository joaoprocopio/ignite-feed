export const now = () => new Date()

export const formatter = (options: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat("pt-br", options)
}

export const formatDateTime = (date: Date) => {
  return formatter({
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(date)
}

export const getHourDiff = (past: Date, present: Date = now()) => {
  return Math.ceil(Math.abs(present.getTime() - past.getTime()) / 36e5)
}
