interface Post {
  author: string
  content: string
}

interface Props {
  post: Post
}

export function Post({ post }: Props) {
  return (
    <>
      <div>{post.author}</div>
      <div>{post.content}</div>
    </>
  )
}
