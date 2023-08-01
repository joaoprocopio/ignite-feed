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
  return Math.floor(Math.abs(present.getTime() - past.getTime()) / 36e5)
}

export const getMinutesDiff = (past: Date, present: Date = now()) => {
  return Math.floor(Math.abs(present.getTime() - past.getTime()) / 6e4)
}

export const getSecondsDiff = (past: Date, present: Date = now()) => {
  return Math.floor(Math.abs(present.getTime() - past.getTime()) / 1e3)
}

export const relativeTimeDiff = (past: Date) => {
  const hourDiff = getHourDiff(past)
  const minuteDiff = getMinutesDiff(past)
  const secondsDiff = getSecondsDiff(past)

  return hourDiff >= 1 ? `${hourDiff}h` : minuteDiff >= 1 ? `${minuteDiff}min` : `${secondsDiff}seg`
}
