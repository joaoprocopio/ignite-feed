import classNames from "classnames"

import styles from "./Avatar.module.scss"

export function Avatar({ src, customClass }: { src: string; customClass?: string }) {
  const classes = classNames({
    [styles.avatar]: true,
    [`${customClass}`]: !!customClass
  })

  return <img className={classes} src={src} />
}
