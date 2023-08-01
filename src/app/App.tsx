import { useEffect, useState } from "react"

import styles from "./App.module.scss"

import { usePostsStore } from "~/stores"
import { Header, Sidebar, Post } from "~/components"
import { PostsAPI } from "~/api"

export function App() {
  const skeletons: null[] = new Array(3).fill(null)
  const [fetching, setFetching] = useState<boolean>(true)
  const { posts, setPosts } = usePostsStore()

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
                return <Post key={post.id} post={post} />
              })}
        </main>
      </div>
    </>
  )
}
