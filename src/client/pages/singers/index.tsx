import Scroll from '@/client/components/common/scroll'
import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PageTitle from '../../components/common/page-title'
import HorizontalList from '@/client/components/content/horizontal-list'
import { categoryTypes, alphaTypes } from '@/api'

const Singers = () => {
  return (
    <Fragment>
      <PageTitle title='歌手' />
      <div className='nav-container py-2 bg-gray-200 box-border fixed w-full overflow-hidden'>
        <HorizontalList list={categoryTypes} title='分类：' />
        <HorizontalList className='mt-2' list={alphaTypes} title='首字母：' />
      </div>
    </Fragment>
  )
}

export default Singers
