import { RouteProps } from 'react-router'
import { RouteConfig } from 'react-router-config'
import App from '../App'
import Category from '../pages/category'
import Home from '../pages/home'
import Mv from '../pages/mv'
import NotFound from '../pages/not-found'
import Rank from '../pages/rank'
import Singer from '../pages/singer'
import Video from '../pages/video'

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/singer', exact: true, component: Singer },
      { path: '/rank', exact: true, component: Rank },
      { path: '/category', exact: true, component: Category },
      { path: '/video', exact: true, component: Video },
      { path: '/mv', exact: true, component: Mv },
      { path: '/*', component: NotFound },
    ],
    key: '/',
  },
]
