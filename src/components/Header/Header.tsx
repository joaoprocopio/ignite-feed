import styles from "./Header.module.scss"

import Logo from "~/assets/icons/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerLogo}>
        <Logo />
      </span>
    </header>
  )
}
