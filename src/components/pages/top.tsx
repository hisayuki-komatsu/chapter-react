import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../providers/user-provider'
import { PrimaryButton } from '../atoms/buttons/primary-button'
import styles from './top.module.scss'

export const Top = () => {
  const history = useHistory()
  const { setUserInfo } = useContext(UserContext) as any

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    history.push('/users')
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    history.push('/users')
  }

  return (
    <div className={styles.container}>
      <h2>TOPページ</h2>
      <PrimaryButton onClick={onClickAdmin}>管理者ユーザー</PrimaryButton>
      <br />
      <br />
      <PrimaryButton onClick={onClickGeneral}>一般ユーザー</PrimaryButton>
    </div>
  )
}
