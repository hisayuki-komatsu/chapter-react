import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Top } from '../components/pages/top'
import { Users } from '../components/pages/users'
import { Layout } from '../components/templetes/default-layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Top />
          </Layout>
        </Route>
        <Route path="/users">
          <Layout>
            <Users />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

// export const Router = () => {
//   return (
//     <Switch>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route
//         path="/page1"
//         render={({ match: { url } }) => (
//           <Switch>
//             {page1Routes.map((route) => (
//               <Route exact={route.exact} path={`${url}${route.path}`}>
//                 {route.children}
//               </Route>
//             ))}
//             {/* <Route exact path={url} component={Page1} />
//             <Route path={`${url}/detailA`} component={DetailA} />
//             <Route path={`${url}/detailB`} component={DetailB} /> */}
//           </Switch>
//         )}
//       />
//       <Route
//         path="/page2"
//         render={({ match: { url } }) => (
//           <Switch>
//             {page2Routes.map((route) => (
//               <Route exact={route.exact} path={`${url}${route.path}`}>
//                 {route.children}
//               </Route>
//             ))}
//           </Switch>
//         )}
//       ></Route>
//       {/* <Route exact path="/page2">
//         <Page2 />
//       </Route> */}
//       <Route path="*">
//         <Page404 />
//       </Route>
//     </Switch>
//   )
// }
