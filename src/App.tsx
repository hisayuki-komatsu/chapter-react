import { useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from './router/router'
import { PrimaryButton } from './components/atoms/buttons/primary-button'
import { SearchInput } from './components/molecules/search-input'

const App = () => {
  return (
    <div className="app">
      <SearchInput></SearchInput>
    </div>
  )
}

export default App

// ---------- section 5 ----------
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Hello World!!</h1>
//         <Link to="/">Home</Link>
//         <br />
//         <Link to="/page1">Page1</Link>
//         <br />
//         <Link to="/page2">Page2</Link>
//       </div>
//       <Router />
//     </BrowserRouter>
//   )
// }

// -------- section 3 - 4 --------

// const App = () => {
//   const [text, setText] = useState('')
//   const [open, setOpen] = useState(false)

//   const onChangeText = (e: any) => setText(e.target.value)
//   const onClickOpen = () => setOpen(!open)
//   const onClickClose = useCallback(() => setOpen(false), [])

//   return (
//     <div className="App">
//       <h1>Hello World!!</h1>
//       <input value={text} onChange={onChangeText} />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//     </div>
//   )
// }
