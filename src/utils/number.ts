export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const range = (start: number, end: number, step: number = 1) => {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)

  while (length--) {
    result[++index] = start
    start += step
  }

  return result
}
