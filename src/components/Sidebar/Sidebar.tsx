import { PencilSimpleLine } from "@phosphor-icons/react"

import styles from "./Sidebar.module.scss"
import { Avatar } from "~/components"
import { TAuthor } from "~/api/models"

interface Props {
  author: TAuthor
}

export function Sidebar({ author }: Props) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.sidebarBackground} src={author.cover_image_url} />

      <div className={styles.sidebarProfile}>
        <Avatar outlined customClass={styles.sidebarProfileAvatar} src={author.avatar_url} />

        <strong className={styles.sidebarProfileName}>{author.full_name}</strong>
        <span className={styles.sidebarProfileOccupation}>{author.occupation}</span>
      </div>

      <footer className={styles.sidebarActions}>
        <a href="#" className={styles.sidebarActionsEdit}>
          <PencilSimpleLine size="20px" weight="bold" />
          <span>Editar seu perfil</span>
        </a>
      </footer>
    </aside>
  )
}
