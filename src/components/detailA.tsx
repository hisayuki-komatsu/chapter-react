import { useLocation } from 'react-router-dom'

export const DetailA = () => {
  const { state } = useLocation() as { state: string }

  return (
    <div>
      <p>DetailA</p>
      <p>親コンポーネントは {state} </p>
    </div>
  )
}
