import { z } from "zod"

export type TAuthor = z.infer<typeof Author>

export const Author = z.object({
  id: z.string(),
  full_name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  avatar_url: z.string(),
  occupation: z.string()
})

export type TPost = z.infer<typeof Post>
export type TPostList = z.infer<typeof PostList>
export type TPostResponse = z.infer<typeof PostResponse>

export const Post = z.object({
  id: z.string(),
  content: z.string(),
  created_at: z.string(),
  author: Author
})
export const PostList = z.array(Post)
export const PostResponse = z.object({
  posts: PostList
})
