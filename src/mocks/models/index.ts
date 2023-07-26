import { Model, belongsTo, hasMany } from "miragejs"

export const models = {
  post: Model.extend({
    author: belongsTo(),
    comment: hasMany()
  }),
  comment: Model.extend({
    post: belongsTo()
  }),
  author: Model
}
