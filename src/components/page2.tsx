import { Link } from 'react-router-dom'

export const Page2 = () => {
  return (
    <div>
      <p>Page 2</p>
      <Link to="/page2/63">Path parameter</Link>
      <br />
      <Link to="/page2/63?name=hoge">Query parameter</Link>
    </div>
  )
}
