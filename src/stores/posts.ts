import type { TPostList, TReply } from "~/api/models"

import { create } from "zustand"

interface State {
  posts: TPostList
}

interface Actions {
  setPosts: (posts: TPostList) => void
  setPostsReply: (postId: number, reply: TReply) => void
  deletePostsReply: (postId: number, replyId: number) => void
}

export const usePostsStore = create<State & Actions>()((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts })),
  setPostsReply: (postId, reply) =>
    set(({ posts }) => ({
      posts: posts.map((post) => {
        if (post.id !== postId) return post

        return {
          ...post,
          reply: [reply, ...post.reply]
        }
      })
    })),
  deletePostsReply: (postId, replyId) =>
    set(({ posts }) => ({
      posts: posts.map((post) => {
        if (post.id !== postId) return post

        return {
          ...post,
          reply: post.reply.filter((reply) => reply.id !== replyId)
        }
      })
    }))
}))
