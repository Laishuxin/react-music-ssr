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
      <Top />
      <Tab />
      <main>
        <Switch>{renderRoutes(route?.routes)}</Switch>
      </main>
    </div>
  )
}
export default React.memo(Home)
