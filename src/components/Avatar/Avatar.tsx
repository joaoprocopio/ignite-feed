import classNames from "classnames"

import styles from "./Avatar.module.scss"

interface Props {
  src: string
  outlined?: boolean
  customClass?: string
}

export function Avatar({ src, outlined, customClass }: Props) {
  const classes = classNames({
    [styles.avatar]: true,
    [styles.avatarOutlined]: outlined,
    [`${customClass}`]: !!customClass
  })

  return <img className={classes} src={src} />
}
