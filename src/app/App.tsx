import { useEffect, useState } from "react"

import styles from "./App.module.scss"

import { usePostsStore, useAuthorStore } from "~/stores"
import { Header, Sidebar, Post, Skeleton } from "~/components"
import { PostsAPI, RepliesAPI, AuthorsAPI } from "~/api"

export function App() {
  const skeletons: null[] = new Array(3).fill(null)

  const [fetchingAuthor, setFetchingAuthor] = useState<boolean>(true)
  const [fetchingPosts, setFetchingPosts] = useState<boolean>(true)

  const { author, setAuthor } = useAuthorStore()
  const { posts, setPosts, setPostsReply } = usePostsStore()

  const handleCreateReply = async (e: React.FormEvent<HTMLFormElement>, postId: number) => {
    e.preventDefault()

    const content = (e.target as HTMLFormElement).content.value
    const reply = await RepliesAPI.createReply(postId, content)

    setPostsReply(postId, reply)
  }

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await AuthorsAPI.getCurrentAuthor()

        setAuthor(response)
      } finally {
        setFetchingAuthor(false)
      }
    }

    fetchAuthor()
  }, [setAuthor])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await PostsAPI.getPosts()

        setPosts(response.posts)
      } finally {
        setFetchingPosts(false)
      }
    }

    fetchPosts()
  }, [setPosts])

  return (
    <>
      <Header />

      <div className={styles.container}>
        {fetchingAuthor ? <Skeleton customClass="h-72 bg-secondary-600" /> : <Sidebar author={author} />}

        <main className={styles.content}>
          {fetchingPosts
            ? skeletons.map((_, id) => {
                return (
                  <Skeleton
                    key={id}
                    customClass="h-96 bg-secondary-600"
                  />
                )
              })
            : posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                    currentAuthor={author}
                    handleCreateReply={(event) => handleCreateReply(event, post.id)}
                  />
                )
              })}
        </main>
      </div>
    </>
  )
}
