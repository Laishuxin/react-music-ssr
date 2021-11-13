import PageTitle from '@/client/components/common/page-title'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
import { Switch } from 'react-router-dom'
import Header from '@/client/components/content/header'
import Footer from '@/client/components/content/footer'

export interface HomeProps extends RouteConfigComponentProps {}
const Home = (props: HomeProps) => {
  const { route } = props
  return (
    <Fragment>
      <PageTitle title='推荐' />
      <Header className='fixed w-full h-24 z-40' />
      <main className='absolute top-24 left-0 right-0 bottom-0'>
        <Switch>{renderRoutes(route?.routes)}</Switch>
      </main>
    </Fragment>
  )
}
export default React.memo(Home)
