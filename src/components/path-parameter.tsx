import { useParams, useLocation } from 'react-router-dom'

export const PathParameter = () => {
  const { id } = useParams() as { id: string }
  const { search } = useLocation() as { search: string }
  const query = new URLSearchParams(search).get('name')
  return (
    <div>
      <p>path parameter page</p>
      <p>パラメーターは {id} です</p>
      <p>クエリパラメーターは {query ?? '存在しない'} です</p>
    </div>
  )
}
