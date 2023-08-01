import type { TAuthor } from "~/api/models"
import { create } from "zustand"

interface State {
  author: TAuthor
}

interface Actions {
  setAuthor: (author: TAuthor) => void
}

export const useAuthorStore = create<State & Actions>()((set) => ({
  author: {
    id: 0,
    avatar_url: "",
    cover_image_url: "",
    first_name: "",
    full_name: "",
    last_name: "",
    username: "",
    occupation: ""
  },
  setAuthor: (author) => set(() => ({ author }))
}))
