import styles from './input.module.scss'

export const Input = (props: any) => {
  const { placeholder = '' } = props
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  )
}
