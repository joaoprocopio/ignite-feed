import type { Server } from "~/mocks/@types"

export const authorSeeds = 30
export const postSeeds = 50
export const replySeeds = 100

export function seeds(server: Server) {
  server.createList("author", authorSeeds)
  server.createList("reply", replySeeds)
  server.createList("post", postSeeds)
}
