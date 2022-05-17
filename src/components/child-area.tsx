import { memo } from 'react'

export const ChildArea = memo((props: any) => {
  const { open, onClickClose } = props
  console.log('start rendaling')

  const data = [
    ...Array(500)
      .fill(0)
      .map((_, i) => i),
  ]
  const style = {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  }
  data.forEach(() => console.log('...'))
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  )
})
