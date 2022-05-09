import { Page2 } from '../components/page2'
import { PathParameter } from '../components/path-parameter'

export const page2Routes = [
  {
    path: '/',
    exact: true,
    children: <Page2 />,
  },
  {
    path: '/:id',
    exact: false,
    children: <PathParameter />,
  },
]
