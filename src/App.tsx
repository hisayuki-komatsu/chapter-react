import { useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import { Router } from './router/router'
import { SearchInput } from './components/molecules/search-input'
import { UserCard } from './components/organisms/user/user-card'
import { User } from './types'
import { Layout } from './components/templetes/default-layout'

const user: User = {
  name: 'hisa',
  image: 'https://source.unsplash.com/MRE-sf3i3PQ',
  email: 'example@gmail.com',
  phone: '080-8888-8888',
  company: {
    name: 'google',
  },
  website: 'https://google.com',
}

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SearchInput></SearchInput>
        <UserCard user={user} />
      </Layout>
    </BrowserRouter>
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
