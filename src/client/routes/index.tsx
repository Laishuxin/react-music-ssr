import { RouteProps } from 'react-router'
import { RouteConfig } from 'react-router-config'
import App from '../App'
import Home from '../pages/home'
import Rank from '../pages/rank'
import Singers from '../pages/singers'
import Recommend from '../pages/recommend'
import NotFound from '../pages/not-found'
// import Video from '../pages/video'
// import Mv from '../pages/mv'
// import Category from '../pages/category'

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/singers', exact: true, component: Singers },
      { path: '/rank', exact: true, component: Rank },
      { path: '/recommend', exact: true, component: Recommend },
      { path: '/*', component: NotFound },
      // { path: '/category', exact: true, component: Category },
      // { path: '/video', exact: true, component: Video },
      // { path: '/mv', exact: true, component: Mv },
    ],
    key: '/',
  },
]
