import { Model, belongsTo, hasMany } from "miragejs"

export const models = {
  post: Model.extend({
    author: belongsTo(),
    reply: hasMany()
  }),
  reply: Model.extend({
    post: belongsTo(),
    author: belongsTo()
  }),
  author: Model
}
