import styles from "./Post.module.scss"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div>
          <img src="https://avatars.githubusercontent.com/u/88688324" />
          <div>
            <strong>João Procópio</strong>
            <span>Camisa 10 do Botafogo</span>
          </div>
        </div>

        <time
          title="24 de Julho de 2022 às 11:45h"
          dateTime="2022-07-24 11:45:00">
          Publicado há 1h
        </time>
      </header>

      <section className={styles.postContent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "}
          <a href="#" className="font-bold text-primary-400">
            jane.design/doctorcare
          </a>
        </p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </section>
    </article>
  )
}
