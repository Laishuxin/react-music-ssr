import React, { Fragment, useCallback, useEffect, useRef } from 'react'
import PageTitle from '../../components/common/page-title'
import HorizontalList from '@/client/components/content/horizontal-list'
import { categoryTypes, alphaTypes } from '@/api'
import SingerList, { SingerListRef } from './singer-list'
import { Singer } from '@/types'
import { useAppSelector, useAppDispatch } from '@/client/store'
import { selectSingerList, setOffset } from './common/slice'
import { useSingers } from './common/use-singers'
import Loading from '@/client/components/common/loading'

const Singers = () => {
  const {
    singerList,
    setCurrentAlpha,
    setCurrentCategory,
    clear,
    addSingers,
    isLoading,
  } = useSingers()

  const singerListRef = useRef<SingerListRef>()

  const handleClick = (singer: Singer) => {
    console.log(singer)
  }

  const handleCategoryChange = useCallback(
    (item: typeof categoryTypes[number] | undefined) => {
      clear()
      setCurrentCategory(item?.key)
      singerListRef.current?.scrollToTop()
    },
    [clear, setCurrentCategory],
  )

  const handleAlphaChange = useCallback(
    (item: typeof alphaTypes[number] | undefined) => {
      clear()
      setCurrentAlpha(item?.key)
      singerListRef.current?.scrollToTop()
    },
    [clear, setCurrentAlpha],
  )

  const handlePullDown = () => {
    console.log('pull down')
    clear()
    addSingers(0)
  }

  const handlePullUp = () => {
    addSingers(singerList.length)
  }

  return (
    <Fragment>
      <PageTitle title='歌手' />
      <Loading
        loading={isLoading}
        className='absolute top-0 bottom-0 left-0 right-0 m-auto'
      />
      <div className='singers flex flex-col relative h-full overflow-hidden'>
        <div className='nav-container h-24 py-2 bg-gray-200 box-border fixed z-40 w-full overflow-hidden'>
          <HorizontalList
            className='h-1/2'
            list={categoryTypes}
            title='分类：'
            onChange={handleCategoryChange}
          />
          <HorizontalList
            className='h-1/2'
            list={alphaTypes}
            title='首字母：'
            onChange={handleAlphaChange}
          />
        </div>
        <SingerList
          onPullDown={handlePullDown}
          onPullUp={handlePullUp}
          ref={singerListRef}
          onClick={handleClick}
          list={singerList}
        />
      </div>
    </Fragment>
  )
}

export default Singers
