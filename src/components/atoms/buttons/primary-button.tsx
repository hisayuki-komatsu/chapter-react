import styles from './primary-button.module.scss'

export const PrimaryButton = (props: any) => {
  const { children, onClick } = props
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
