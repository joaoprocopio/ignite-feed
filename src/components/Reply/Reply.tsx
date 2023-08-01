import { ThumbsUp, Trash } from "@phosphor-icons/react"

import type { TReply } from "~/api/models"

import styles from "./Reply.module.scss"
import { Avatar } from "~/components"
import { formatDateTime, relativeTimeDiff } from "~/utils"

interface Props {
  reply: TReply
}

export function Reply({ reply }: Props) {
  return (
    <div className={styles.reply}>
      <Avatar src={reply.author.avatar_url} />

      <div className={styles.replyContainer}>
        <div className={styles.replyContainerBox}>
          <header className={styles.replyContainerBoxMeta}>
            <div>
              <div className={styles.replyContainerBoxMetaAuthor}>{reply.author.full_name}</div>
              <time className={styles.replyContainerBoxMetaPostedAt} title={formatDateTime(reply.created_at)}>
                Cerca de {relativeTimeDiff(reply.created_at)}
              </time>
            </div>

            <button className={styles.replyContainerBoxMetaDelete}>
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.replyContainerBoxContent}>{reply.content}</p>
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
