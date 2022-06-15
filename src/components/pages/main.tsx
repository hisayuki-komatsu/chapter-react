import { CountUp } from '../molecules/count-up'
import { Toggle } from '../molecules/toggle'
import { UserSearch } from '../molecules/user-search'

export const Main = () => {
  return (
    <>
      {/* <div>
        <p>メインページ</p>
        <CountUp />
        <Toggle />
      </div> */}
      <div>
        <UserSearch />
      </div>
    </>
  )
}
