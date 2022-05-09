import { Link } from 'react-router-dom'

export const Page1 = () => {
  const state = 'Page1だよ'

  return (
    <div>
      <p>Page 1</p>
      <Link to={{ pathname: '/page1/detailA', state }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  )
}
