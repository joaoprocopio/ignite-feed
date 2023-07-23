import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#00875F",
          400: "#00B37E"
        },
        secondary: {
          700: "#121214",
          600: "#202024",
          500: "#323238",
          400: "#7C7C8A",
          300: "#8D8D99",
          200: "#C4C4CC",
          100: "#E1E1E6"
        },
        danger: "#F75A68"
      },
      fontFamily: {
        sans: ["Roboto", ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
