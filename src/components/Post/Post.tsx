import styles from "./Post.module.scss"

import type { TPost } from "~/api/models"

import { Avatar, Reply } from "~/components"
import { formatDateTime, relativeTimeDiff } from "~/utils"

interface Props {
  post: TPost
  onSubmit: React.DOMAttributes<HTMLFormElement>["onSubmit"]
}

export function Post({ post, onSubmit }: Props) {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.postHeaderAuthor}>
          <Avatar outlined src={post.author.avatar_url} />

          <div className={styles.postHeaderAuthorInfo}>
            <strong className={styles.postHeaderAuthorInfoName}>{post.author.full_name}</strong>
            <span className={styles.postHeaderAuthorInfoOccupation}>{post.author.occupation}</span>
          </div>
        </div>

        <time className={styles.postHeaderPostedAt} title={formatDateTime(post.created_at)}>
          Publicado há {relativeTimeDiff(post.created_at)}
        </time>
      </header>

      <section className={styles.postContent}>{post.content}</section>

      <form className={styles.postReply} onSubmit={onSubmit}>
        <strong className={styles.postReplyTitle}>Deixe seu feedback</strong>

        <textarea name="content" className={styles.postReplyText} placeholder="Escreva um comentário..." />

        <button className={styles.postReplyButton} type="submit">
          Publicar
        </button>
      </form>

      {post.reply.map((reply, iter) => {
        return <Reply key={`${post.id}-${reply.id}-${iter}`} reply={reply} />
      })}
    </article>
  )
}
