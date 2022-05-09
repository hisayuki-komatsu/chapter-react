import { Route, Switch } from 'react-router-dom'
import { DetailA } from '../components/detailA'
import { DetailB } from '../components/detailB'
import { Home } from '../components/home'
import { Page1 } from '../components/page1'
import { Page2 } from '../components/page2'
import { page1Routes } from './page1-route'

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
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  )
}
