import { Server } from "miragejs"

import { models } from "./models"
import { routes } from "./routes"
import { seeds } from "./seeds"
import { serializers } from "./serializers"
import { factories } from "./factories"

export const createServer = ({ environment = "development" } = {}) =>
  new Server({
    urlPrefix: "/api",
    timing: 3000,
    environment,
    models,
    serializers,
    factories,
    routes,
    seeds
  })
