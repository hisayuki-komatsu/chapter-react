import styles from './card.module.scss'

export const Card = (props: any) => {
  const { children } = props
  return <div className={styles.container}>{children}</div>
}
