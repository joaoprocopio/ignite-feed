import { $axios } from "./clients"

import { PostResponse } from "~/api/models"

const getPosts = async () => {
  const response = await $axios.get("/posts")

  return PostResponse.parse(response.data)
}

export const PostsAPI = {
  getPosts
}
