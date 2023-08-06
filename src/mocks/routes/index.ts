// @ts-nocheck

import { Request, Response } from "miragejs"
import Cookies from "js-cookie"
import { HttpStatusCode } from "axios"

import type { Server, Schema } from "~/mocks/@types"

export function routes(this: Server) {
  this.get("/posts", function (schema: Schema) {
    let posts = schema.all("post")
    posts = posts.sort((prev, next) => new Date(next.createdAt) - new Date(prev.createdAt))
    posts = this.serialize(posts)
    posts = posts.map((post) => ({
      ...post,
      reply: post.reply.sort((prev, next) => new Date(next.created_at) - new Date(prev.created_at))
    }))

    return new Response(HttpStatusCode.Ok, {}, { posts })
  })

  this.post("replies/create", (schema: Schema, request: Request) => {
    const body = JSON.parse(request?.requestBody)

    if (!body) return new Response(HttpStatusCode.BadRequest, {}, {})

    const content = body?.content
    const postId = body?.post_id

    if (!content || !postId) return new Response(HttpStatusCode.BadRequest, {}, {})

    const post = schema.findBy("post", { id: postId })

    const reply = schema.create("reply", {
      content: content,
      createdAt: new Date().toISOString(),
      authorId: post?.authorId
    })

    return new Response(HttpStatusCode.Ok, {}, reply)
  })

  this.post("replies/delete", (schema: Schema, request: Request) => {
    const body = JSON.parse(request?.requestBody)

    if (!body) return new Response(HttpStatusCode.BadRequest, {}, {})

    const replyId = parseInt(body?.reply_id)

    if (!replyId) return new Response(HttpStatusCode.BadRequest, {}, {})

    const reply = schema.findBy("reply", { id: replyId })
    const authorId = parseInt(Cookies.get("authorid"))

    if (!authorId || reply?.authorId !== authorId) return new Response(HttpStatusCode.BadRequest, {}, {}) // TODO: tem bug aqui

    reply.destroy()

    return new Response(HttpStatusCode.Ok, {}, {})
  })

  this.get("authors/current", (schema: Schema) => {
    const author = schema.findBy("author", { id: 1 })

    if (!author?.id) return new Response(HttpStatusCode.NotFound, {}, {})

    Cookies.set("authorid", author.id)

    return new Response(HttpStatusCode.Ok, {}, author)
  })
}
