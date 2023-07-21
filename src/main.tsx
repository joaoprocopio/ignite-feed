import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

const rootEl = document.getElementById("__react")!
const root = ReactDOM.createRoot(rootEl)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
