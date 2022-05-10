import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} hisa Inc.
    </footer>
  )
}
