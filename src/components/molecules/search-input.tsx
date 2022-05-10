import { PrimaryButton } from '../atoms/buttons/primary-button'
import { Input } from '../atoms/input/input'
import styles from './search-input.module.scss'

export const SearchInput = () => {
  return (
    <div className={styles.container}>
      <Input placeholder="検索条件を入力" />
      <div className={styles.button}>
        <PrimaryButton>検索</PrimaryButton>
      </div>
    </div>
  )
}
