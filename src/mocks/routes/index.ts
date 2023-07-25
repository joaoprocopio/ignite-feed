import type { Server, Schema } from "~/mocks/utils"
import { Response } from "miragejs"

export function routes(this: Server) {
  this.get("/posts", function (schema: Schema) {
    let posts = schema.all("post")

    // @ts-ignore
    posts = this.serialize(posts)

    return new Response(200, {}, { posts })
  })
}
