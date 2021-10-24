import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import Home from './pages/Home'
// @ts-ignore
import Rank from './pages/rank'
import Singer from './pages/singer'
import Category from './pages/category'
import Video from './pages/video'
import Mv from './pages/mv'
import NotFound from './pages/not-found'

interface AppProps extends RouteComponentProps {}

const App = (props: AppProps) => {
  return (
    <div className='app'>
      <header>header</header>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/singer' component={Singer} />
        <Route path='/rank' component={Rank} />
        <Route path='/category' component={Category} />
        <Route path='/video' component={Video} />
        <Route path='/mv' component={Mv} />
        <Route path='/*' component={NotFound} />
      </Switch>
      <footer>footer</footer>
    </div>
  )
}

export default App
