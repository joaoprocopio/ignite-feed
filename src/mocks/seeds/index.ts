import type { Server } from "~/mocks/@types"

export const authorSeeds = 5
export const postSeeds = 5
export const replySeeds = 25

export function seeds(server: Server) {
  server.createList("author", authorSeeds)
  server.createList("reply", replySeeds)
  server.createList("post", postSeeds)
}
