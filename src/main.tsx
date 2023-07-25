import "~/plugins"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "~/assets/styles/main.scss"
import { App } from "~/app"
import { env } from "~/lib"
import { createServer } from "~/mocks"

const rootEl = document.getElementById("__react")!
const root = createRoot(rootEl)

if (env.DEV && env.MOCK) {
  createServer()
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
