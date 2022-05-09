import { Link, useHistory } from 'react-router-dom'

export const Page1 = () => {
  const state = 'Page1 Component'
  const history = useHistory()

  const onClickDetailB = () => history.push('/page1/detailB')

  return (
    <div>
      <p>Page 1</p>
      <Link to={{ pathname: '/page1/detailA', state }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailB}>DetailB</button>
    </div>
  )
}
