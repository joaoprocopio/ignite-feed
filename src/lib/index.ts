export const env = {
  get MODE() {
    return import.meta.env.MODE
  },
  get DEV() {
    return env.MODE === "development"
  },
  get MOCK() {
    return import.meta.env._MOCK === "true"
  }
}
