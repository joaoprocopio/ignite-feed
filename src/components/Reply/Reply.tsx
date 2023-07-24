import { ThumbsUp, Trash } from "@phosphor-icons/react"

import styles from "./Reply.module.scss"
import { Avatar } from "~/components"

export function Reply() {
  return (
    <div className={styles.reply}>
      <Avatar src="https://github.com/joaoprocopio.png" />

      <div className={styles.replyContainer}>
        <div className={styles.replyContainerBox}>
          <header className={styles.replyContainerBoxMeta}>
            <div>
              <div className={styles.replyContainerBoxMetaAuthor}>Devon Lane</div>
              <time
                className={styles.replyContainerBoxMetaPostedAt}
                title="24 de Julho de 2022 às 11:45h"
                dateTime="2022-07-24 11:45:00">
                Cerca de 1h
              </time>
            </div>

            <button className={styles.replyContainerBoxMetaDelete}>
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.replyContainerBoxContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et doloribus ut veritatis mollitia consectetur
            nam quidem. A maiores facere iste illum fugit? Rerum sequi commodi exercitationem, illum maxime odio.
          </p>
        </div>

        <footer className={styles.replyContainerActions}>
          <button className={styles.replyContainerActionsLike}>
            <ThumbsUp size={20} weight="bold" />
            <span>Aplaudir • 33</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
