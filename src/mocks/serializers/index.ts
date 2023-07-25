import { ActiveModelSerializer as BaseSerializer } from "miragejs"

const Serializer = (toSerialize: string[] = []) =>
  BaseSerializer.extend({
    root: false,
    embed: true,
    include: toSerialize
  })

export const serializers = {
  post: Serializer(["author"]),
  author: Serializer()
}
