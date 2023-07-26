import type { Server } from "~/mocks/@types"

export const authorSeeds = 30
export const postSeeds = 50
export const commentSeeds = 70

export function seeds(server: Server) {
  server.createList("author", authorSeeds)
  server.createList("comment", commentSeeds)
  server.createList("post", postSeeds)
}
