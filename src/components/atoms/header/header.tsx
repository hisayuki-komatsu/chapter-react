import { Link } from 'react-router-dom'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/users">USERS</Link>
        </li>
      </ul>
    </header>
  )
}
