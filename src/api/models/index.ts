import { z } from "zod"

export type TAuthor = z.infer<typeof Author>

export type TReply = z.infer<typeof Reply>
export type TReplyList = z.infer<typeof ReplyList>

export type TPost = z.infer<typeof Post>
export type TPostList = z.infer<typeof PostList>
export type TPostResponse = z.infer<typeof PostResponse>

export const Author = z.object({
  id: z.number(),
  full_name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  avatar_url: z.string(),
  occupation: z.string()
})

export const Reply = z.object({
  id: z.number(),
  content: z.string(),
  created_at: z.string().transform((date) => new Date(date)),
  author: Author
})
export const ReplyList = z.array(Reply)

export const Post = z.object({
  id: z.number(),
  content: z.string(),
  created_at: z.string().transform((date) => new Date(date)),
  reply: ReplyList,
  author: Author
})
export const PostList = z.array(Post)
export const PostResponse = z.object({
  posts: PostList
})
