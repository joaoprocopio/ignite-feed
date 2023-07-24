import styles from "./Sidebar.module.scss"

import { PencilSimpleLine } from "@phosphor-icons/react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.sidebarBackground}
        src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
      />

      <div className={styles.sidebarProfile}>
        <img
          className={styles.sidebarProfileAvatar}
          src="https://avatars.githubusercontent.com/u/88688324"
        />

        <strong className={styles.sidebarProfileName}>João Procópio</strong>
        <span className={styles.sidebarProfileOccupation}>
          Camisa 10 do Botafogo
        </span>
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