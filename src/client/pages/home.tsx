import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../components/common/page-title'
import MV from '../components/content/mv'
import NewMusic from '../components/content/new-music'
import Rank from '../components/content/rank'
import Recommend from '../components/content/recommend'
import Slide from '../components/content/slide'

const Home = (props: any) => {
  return (
    <Fragment>
      <PageTitle title='首页' />
      <div className='home'>
        <Slide />
        <Recommend />
        <NewMusic />
        <Rank />
        <MV />
      </div>
    </Fragment>
  )
}
export default Home
