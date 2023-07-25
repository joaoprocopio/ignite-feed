import { useEffect, useState } from "react"

import styles from "./App.module.scss"

import type { TPostList } from "~/api/models"
import { Header, Sidebar, Post } from "~/components"
import { PostsAPI } from "~/api"

export function App() {
  const [posts, setPosts] = useState<TPostList>([])

  const fetchPosts = async () => {
    try {
      const response = await PostsAPI.getPosts()

      setPosts(response.posts)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />

        <main className={styles.content}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </>
  )
}
