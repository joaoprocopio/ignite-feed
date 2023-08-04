import { $axios } from "./clients"

import { Author, PostResponse, Reply } from "~/api/models"

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
  },

  deleteReply: async (replyId: number) => {
    const response = await $axios.post("replies/delete", { reply_id: replyId })

    return response.data
  }
}

export const AuthorsAPI = {
  getCurrentAuthor: async () => {
    const response = await $axios.get("/authors/current")

    return Author.parse(response.data)
  }
}
