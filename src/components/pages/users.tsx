import { User } from '../../types'
import { SearchInput } from '../molecules/search-input'
import { UserCard } from '../organisms/user/user-card'
import styles from './users.module.scss'

const user: User = {
  name: 'hisa',
  image: 'https://source.unsplash.com/MRE-sf3i3PQ',
  email: 'example@gmail.com',
  phone: '080-8888-8888',
  company: {
    name: 'google',
  },
  website: 'https://google.com',
}

const users: User[] = [...Array(10)].map((_, i) => ({
  ...user,
  name: `${user.name}${i + 1}`,
}))

export const Users = () => {
  return (
    <div className={styles.container}>
      <h2>Usersページです</h2>
      <SearchInput></SearchInput>
      <div className={styles.contentArea}>
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
    </div>
  )
}
