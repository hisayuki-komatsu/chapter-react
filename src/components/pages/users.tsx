import axios from 'axios'
import { useState } from 'react'
import { User } from '../../types/api/user'
import { UserProfile } from '../../types/user'
import { SearchInput } from '../molecules/search-input'
import { NewUserCard } from '../new-user-card/new-user-card'
import { UserCard } from '../organisms/user/user-card'
import styles from './users.module.scss'

export const Users = () => {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onClickFetchUser = () => {
    setLoading(true)
    setError(false)
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }))
        setUserProfiles(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <div className={styles.container}>
      <h2>Usersページです</h2>
      <SearchInput></SearchInput>
      <div className={styles.contentArea}>
        <button onClick={onClickFetchUser}>データ取得</button>
        <br />
        {error ? (
          <p>データの取得に失敗しました</p>
        ) : loading ? (
          <p>データを取得中です</p>
        ) : (
          <div>
            {userProfiles.map((user) => (
              <NewUserCard key={user.id} user={user} />
            ))}
          </div>
        )}

        {/* {users.map((user) => (
            <UserCard key={user.name} user={user} />
          ))} */}
        {/* {users.map((user) => (
          <NewUserCard user={sampleUser} />
        ))} */}
      </div>
    </div>
  )
}
