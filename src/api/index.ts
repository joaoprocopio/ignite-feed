import { $axios } from "./clients"

import { PostResponse, Reply } from "~/api/models"

export const PostsAPI = {
  getPosts: async () => {
    const response = await $axios.get("/posts")

    return PostResponse.parse(response.data)
  }
}

export const RepliesAPI = {
  createReply: async (postId: number, content: string) => {
    const response = await $axios.post("replies/create", { post_id: postId, content })

    return Reply.parse(response.data)
  }
}
