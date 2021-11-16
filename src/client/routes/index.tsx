import React from 'react'
import { RouteConfig } from 'react-router-config'
import App from '../App'
import Rank from '../pages/rank'
import Singers from '../pages/singers'
import Recommend from '../pages/recommend'
import NotFound from '../pages/not-found'
import { Redirect } from 'react-router-dom'

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
      { path: '/recommend', component: Recommend },
      { path: '/singers', component: Singers, loadData: Singers.loadData },
      { path: '/rank', component: Rank },
      { path: '/*', component: NotFound },
      // { path: '/category', exact: true, component: Category },
      // { path: '/video', exact: true, component: Video },
      // { path: '/mv', exact: true, component: Mv },
    ],
  },
]
