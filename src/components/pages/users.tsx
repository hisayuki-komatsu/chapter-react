import { useAllUsers } from '../../hooks/use-all-users'
import { SearchInput } from '../molecules/search-input'
import { NewUserCard } from '../new-user-card/new-user-card'
import styles from './users.module.scss'

export const Users = () => {
  const { getUsers, userProfiles, loading, error } = useAllUsers()

  const onClickFetchUser = () => getUsers()
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
