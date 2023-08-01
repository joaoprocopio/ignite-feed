import classNames from "classnames"

import styles from "./Skeleton.module.scss"

interface Props {
  customClass?: string
}

export function Skeleton({ customClass }: Props) {
  const classes = classNames({
    [styles.skeleton]: true,
    [`${customClass}`]: !!customClass
  })

  return <div className={classes} />
}
