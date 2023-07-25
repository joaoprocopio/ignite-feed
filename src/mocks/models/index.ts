import { Model, belongsTo } from "miragejs"

export const models = {
  post: Model.extend({
    author: belongsTo()
  }),
  author: Model
}
