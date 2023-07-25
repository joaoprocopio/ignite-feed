import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "~/assets/styles/main.scss"
import { App } from "~/app"
import { env } from "~/lib"

const rootEl = document.getElementById("__react")!
const root = createRoot(rootEl)

if (env.DEV && env.MOCK) {
  //
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
