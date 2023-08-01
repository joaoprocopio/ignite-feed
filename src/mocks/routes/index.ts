// @ts-nocheck

import type { Server, Schema } from "~/mocks/@types"
import { Response } from "miragejs"

export function routes(this: Server) {
  this.get("/posts", function (schema: Schema) {
    let posts = schema.all("post")
    posts = posts.sort((prev, next) => new Date(next.createdAt) - new Date(prev.createdAt))
    posts = this.serialize(posts)
    posts = posts.map((post) => ({
      ...post,
      reply: post.reply.sort((prev, next) => new Date(next.created_at) - new Date(prev.created_at))
    }))

    return new Response(200, {}, { posts })
  })
}
