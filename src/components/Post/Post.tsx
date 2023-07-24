import styles from "./Post.module.scss"
import { Avatar } from "~/components"

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.postHeaderAuthor}>
          <Avatar src="https://avatars.githubusercontent.com/u/88688324" />

          <div className={styles.postHeaderAuthorInfo}>
            <strong className={styles.postHeaderAuthorInfoName}>João Procópio</strong>
            <span className={styles.postHeaderAuthorInfoOccupation}>Camisa 10 do Botafogo</span>
          </div>
        </div>

        <time
          className={styles.postHeaderPostedAt}
          title="24 de Julho de 2022 às 11:45h"
          dateTime="2022-07-24 11:45:00">
          Publicado há 1h
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

      <form className={styles.postReply}>
        <strong className={styles.postReplyTitle}>Deixe seu feedback</strong>

        <textarea className={styles.postReplyContent} placeholder="Escreva um comentário..." />

        <button className={styles.postReplyButton} type="submit">
          Publicar
        </button>
      </form>
    </article>
  )
}
