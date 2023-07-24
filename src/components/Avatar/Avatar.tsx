import styles from "./Avatar.module.scss"

export function Avatar({ src }: { src: string }) {
  return <img className={styles.avatar} src={src} />
}
