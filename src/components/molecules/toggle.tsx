import { useEffect, useState } from 'react'

export const Toggle = () => {
  const [open, setOpen] = useState(false)

  const clickToggle = () => setOpen((prev) => !prev)

  useEffect(() => {
    if (open) {
      console.log('Subscribe databese...')
    }
    return () => {
      console.log('Unsubscribe datebase!')
    }
  })

  return (
    <div>
      <p>state: {open ? 'OPEN' : 'CLOSE'}</p>
      <button onClick={clickToggle}>{open ? 'CLOSE' : 'OPEN'}</button>
    </div>
  )
}
