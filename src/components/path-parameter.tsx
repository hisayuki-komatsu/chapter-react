import { useParams } from 'react-router-dom'

export const PathParameter = () => {
  const { id } = useParams() as { id: string }
  return (
    <div>
      <p>path parameter page</p>
      <p>パラメーターは {id} です</p>
    </div>
  )
}
