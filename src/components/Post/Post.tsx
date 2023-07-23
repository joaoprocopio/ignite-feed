interface Post {
  author: string
  content: string
}

interface Props {
  post: Post
}

export function Post({ post }: Props) {
  return (
    <div className="bg-secondary-600">
      <span>{post.author}</span>
      <span>{post.content}</span>
    </div>
  )
}
