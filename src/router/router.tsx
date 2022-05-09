import { Route, Switch } from 'react-router-dom'
import { DetailA } from '../components/detailA'
import { DetailB } from '../components/detailB'
import { Home } from '../components/home'
import { Page1 } from '../components/page1'
import { Page2 } from '../components/page2'
import { Page404 } from '../components/page404'
import { page1Routes } from './page1-route'
import { page2Routes } from './page2-route'

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
            {/* <Route exact path={url} component={Page1} />
            <Route path={`${url}/detailA`} component={DetailA} />
            <Route path={`${url}/detailB`} component={DetailB} /> */}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      {/* <Route exact path="/page2">
        <Page2 />
      </Route> */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}
