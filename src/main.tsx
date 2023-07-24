import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "~/assets/styles/main.scss"
import { App } from "~/app"

const rootEl = document.getElementById("__react")!
const root = createRoot(rootEl)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
