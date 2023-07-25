import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"

import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true
    })
  ],
  server: {
    port: 3000
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  },
  publicDir: "./src/public",
  envPrefix: "_",
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
