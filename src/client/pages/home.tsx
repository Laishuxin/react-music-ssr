import React, { Fragment } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import PageTitle from '../components/common/page-title'
import MV from '../components/content/mv'
import NewMusic from '../components/content/new-music'
import Rank from '../components/content/rank'
import Recommend from '../components/content/recommend'
import Slide from '../components/content/slide'
import { getMusic } from '@/api/music'
import { useStore } from 'react-redux'

export interface HomeProps extends RouteConfigComponentProps {}
const Home = (props: HomeProps) => {
  const store = useStore()
  if (props.staticContext) {
    getMusic().then(data => {
      console.log(data.data)
      // console.log(props.staticContext)
    })
  } else {
    console.log(store.getState())
  }
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
