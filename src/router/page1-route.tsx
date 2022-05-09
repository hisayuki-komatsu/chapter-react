import { DetailA } from '../components/detailA'
import { DetailB } from '../components/detailB'
import { Page1 } from '../components/page1'

export const page1Routes = [
  {
    path: '/',
    exact: true,
    children: <Page1 />,
  },
  {
    path: '/detailA',
    exact: false,
    children: <DetailA />,
  },
  {
    path: '/detailB',
    exact: false,
    children: <DetailB />,
  },
]
