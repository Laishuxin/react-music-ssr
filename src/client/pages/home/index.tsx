import React, { Fragment } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { Switch } from 'react-router-dom'
import Tab from './tab'
import Top from './top'

export interface HomeProps extends RouteConfigComponentProps {}
const Home = (props: HomeProps) => {
  const { route } = props
  return (
    <div className='home'>
      <header className='header fixed z-10 w-full'>
        <Top />
        <Tab />
      </header>
      <main>
        <Switch>{renderRoutes(route?.routes)}</Switch>
      </main>
    </div>
  )
}
export default React.memo(Home)
