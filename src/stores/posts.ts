import type { TPostList } from "~/api/models"

import { create } from "zustand"

interface Store {
  posts: TPostList
  setPosts: (posts: TPostList) => void
}

export const usePostsStore = create<Store>()((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts }))
}))
