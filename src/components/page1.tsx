import { Link } from 'react-router-dom'

export const Page1 = () => {
  return (
    <div>
      <p>Page 1</p>
      <Link to="/page1/detailA">DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
    </div>
  )
}
