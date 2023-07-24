import classNames from "classnames"

import styles from "./Avatar.module.scss"

console.log(styles)

export function Avatar({ src, outlined, customClass }: { src: string; outlined?: boolean; customClass?: string }) {
  const classes = classNames({
    [styles.avatar]: true,
    [styles.avatarOutlined]: outlined,
    [`${customClass}`]: !!customClass
  })

  return <img className={classes} src={src} />
}
