import { useEffect, useState } from "react"

import styles from "./App.module.scss"

import { usePostsStore } from "~/stores"
import { Header, Sidebar, Post } from "~/components"
import { PostsAPI, RepliesAPI } from "~/api"

export function App() {
  const skeletons: null[] = new Array(3).fill(null)
  const [fetching, setFetching] = useState<boolean>(true)
  const { posts, setPosts, setPostsReply } = usePostsStore()

  const handleCreateComment = async (e: React.FormEvent<HTMLFormElement>, postId: number) => {
    e.preventDefault()

    const content = (e.target as HTMLFormElement).content.value
    const reply = await RepliesAPI.createReply(postId, content)

    setPostsReply(postId, reply)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostsAPI.getPosts()

        setPosts(response.posts)
      } finally {
        setFetching(false)
      }
    }

    fetchPosts()
  }, [setPosts])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />

        <main className={styles.content}>
          {fetching
            ? skeletons.map((_, id) => {
                return <div key={id} className="h-96 w-full animate-pulse rounded-lg bg-secondary-600" />
              })
            : posts.map((post) => {
                return <Post key={post.id} post={post} onSubmit={(e) => handleCreateComment(e, post.id)} />
              })}
        </main>
      </div>
    </>
  )
}
