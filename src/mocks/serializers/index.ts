import { ActiveModelSerializer as BaseSerializer } from "miragejs"

// TODO: refatorar isso
const convertIdsToNumbers = (o) => {
  Object.keys(o).forEach((k) => {
    const v = o[k]
    if (Array.isArray(v) || v instanceof Object) convertIdsToNumbers(v)
    if (k === "id" || /.*Id$/.test(k)) {
      o[k] = Number(v)
    }
  })
}

const Serializer = (toSerialize: string[] = []) =>
  BaseSerializer.extend({
    root: false,
    embed: true,
    include: toSerialize,
    serialize(...args) {
      const json = BaseSerializer.prototype.serialize.apply(this, args)

      convertIdsToNumbers(json)

      return json
    }
  })

export const serializers = {
  author: Serializer(),
  post: Serializer(["author", "reply"]),
  reply: Serializer(["author"])
}
