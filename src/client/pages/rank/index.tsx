import React, { Fragment } from 'react'
import PageTitle from '@/client/components/common/page-title'
import Loading from '@/client/components/common/loading'
export default function Rank() {
  return (
    <Fragment>
      <PageTitle title='排名' />
      <div>
        <h1>Rank</h1>
        <Loading
          className='absolute top-0 left-0 right-0 bottom-0 m-auto'
          size='sm'
        />
      </div>
    </Fragment>
  )
}
