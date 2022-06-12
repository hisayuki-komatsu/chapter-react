import { useState } from 'react'

export const CountUp = () => {
  const [count, setCount] = useState(0)

  const countUp = () => setCount((prevState) => prevState + 1)
  const countDownn = () => setCount((prevState) => prevState - 1)

  return (
    <div>
      <h3>count up</h3>
      <p>count: {count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDownn}>down</button>
    </div>
  )
}
