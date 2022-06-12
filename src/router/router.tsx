import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Main } from '../components/pages/main'
import { Top } from '../components/pages/top'
import { Users } from '../components/pages/users'
import { Layout } from '../components/templetes/default-layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Main />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

// ----------------  user管理 app  ----------------
// export const Router = () => {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/">
//           <Layout>
//             <Top />
//           </Layout>
//         </Route>
//         <Route path="/users">
//           <Layout>
//             <Users />
//           </Layout>
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   )
// }
