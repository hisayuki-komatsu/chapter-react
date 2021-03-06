import { memo, useContext } from 'react'
import { UserContext } from '../../../providers/user-provider'
import { User } from '../../../types'
import { Card } from '../../atoms/card/card'
import styles from './user-card.module.scss'

export const UserCard = memo((props: { user: User }) => {
  const { user } = props
  const { userInfo } = useContext(UserContext) as any
  return (
    <Card>
      <div className={styles.topContainer}>
        <img height={160} width={160} src={user.image} alt="プロフィール" />
        <p>{user.name}</p>
      </div>
      <dl className={styles.content}>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </dl>
    </Card>
  )
})
