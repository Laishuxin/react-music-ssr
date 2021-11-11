import React from 'react'
import { RouteConfig } from 'react-router-config'
import App from '../App'
import Rank from '../pages/rank'
import Singers from '../pages/singers'
import Recommend from '../pages/recommend'
import NotFound from '../pages/not-found'
import { Redirect } from 'react-router-dom'
// import Video from '../pages/video'
// import Mv from '../pages/mv'
// import Category from '../pages/category'

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        // eslint-disable-next-line
        render: () => <Redirect to={'/recommend'} />,
      },
      { path: '/singers', component: Singers },
      { path: '/rank', component: Rank },
      { path: '/recommend', component: Recommend },
      { path: '/*', component: NotFound },
      // { path: '/category', exact: true, component: Category },
      // { path: '/video', exact: true, component: Video },
      // { path: '/mv', exact: true, component: Mv },
    ],
  },
]
