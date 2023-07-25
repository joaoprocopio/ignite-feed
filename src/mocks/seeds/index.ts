import type { Server } from "~/mocks/utils"

export function seeds(server: Server) {
  server.createList("author", 30)
  server.createList("post", 50)
}
