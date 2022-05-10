import { memo } from 'react'
import styles from './input.module.scss'

export const Input = memo((props: any) => {
  const { placeholder = '' } = props
  return (
    <input type="text" placeholder={placeholder} className={styles.input} />
  )
})
