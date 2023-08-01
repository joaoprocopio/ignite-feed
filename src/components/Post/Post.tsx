import styles from "./Post.module.scss"

import type { TPost } from "~/api/models"

import { Avatar, Reply } from "~/components"
import { getHourDiff, formatDateTime } from "~/utils"

interface Props {
  post: TPost
}

export function Post({ post }: Props) {
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
          Publicado há {getHourDiff(post.created_at)}h
        </time>
      </header>

      <section className={styles.postContent}>{post.content}</section>

      <form className={styles.postReply} onSubmit={(e) => e.preventDefault()}>
        <strong className={styles.postReplyTitle}>Deixe seu feedback</strong>

        <textarea className={styles.postReplyText} placeholder="Escreva um comentário..." />

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
