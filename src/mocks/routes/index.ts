// @ts-nocheck

import type { Server, Schema } from "~/mocks/@types"
import { Request, Response } from "miragejs"

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

  this.post("replies/create", (schema: Schema, request: Request) => {
    const body = JSON.parse(request?.requestBody)
    const content = body?.content
    const postId = body?.post_id

    if (!content || !postId) return new Response(400, {}, {})

    const post = schema.findBy("post", { id: postId })

    const reply = schema.create("reply", {
      content: content,
      createdAt: new Date().toISOString(),
      authorId: post?.authorId
    })

    return new Response(200, {}, reply)
  })
}
