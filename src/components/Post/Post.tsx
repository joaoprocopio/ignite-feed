import styles from "./Post.module.scss"

import type { TPost } from "~/api/models"

import { Avatar, Reply } from "~/components"
import { now } from "~/utils"

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

        <time
          className={styles.postHeaderPostedAt}
          title={post.created_at.format("DD [de] MMMM [de] YYYY [às] HH:mm[h]")}>
          Publicado há {Math.ceil(now().diff(post.created_at, "hours", true))}h
        </time>
      </header>

      <section className={styles.postContent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "}
          <a href="#" className="font-bold text-primary-400">
            jane.design/doctorcare
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a>
        </p>
      </section>

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
