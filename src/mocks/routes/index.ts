// @ts-nocheck

import type { Server, Schema } from "~/mocks/@types"
import { Response } from "miragejs"

export function routes(this: Server) {
  this.get("/posts", function (schema: Schema) {
    return new Response(200, {}, { posts: this.serialize(schema.all("post")) })
  })
}
