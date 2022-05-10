import styles from './primary-button.module.scss'

export const PrimaryButton = (props: any) => {
  const { children } = props
  return <button className={styles.button}>{children}</button>
}
