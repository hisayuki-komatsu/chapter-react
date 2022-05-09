import { useHistory } from 'react-router-dom'

export const DetailB = () => {
  const history = useHistory()
  const onClickBack = () => history.goBack()
  return (
    <div>
      <p>detailB</p>
      <button onClick={onClickBack}>Go Back</button>
    </div>
  )
}
