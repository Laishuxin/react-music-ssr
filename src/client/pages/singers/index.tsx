import React, { Fragment, useCallback, useRef } from 'react'
import PageTitle from '../../components/common/page-title'
import HorizontalList from '@/client/components/content/horizontal-list'
import { categoryTypes, alphaTypes, getSingerList } from '@/api'
import SingerList, { SingerListRef } from './singer-list'
import { Singer } from '@/types'
import { useSingers } from './common/use-singers'
import Loading from '@/client/components/common/loading'
import { useDebouncedCallback } from 'use-debounce'
import { setSingerList, setStat } from './common/slice'
import { Store } from '@/client/store'

const Singers = () => {
  const {
    singerList,
    setCurrentAlpha,
    setCurrentCategory,
    clear,
    addSingers,
    setSingers,
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

  const handlePullDown = useDebouncedCallback(
    () => {
      console.log('pull down')
      setSingers()
    },
    500,
    { leading: true, trailing: false },
  )

  // TODO: debounce trailing
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

Singers.loadData = function (store: Store) {
  const singerList = getSingerList()
  singerList
    .then(() => store.dispatch(setStat('success')))
    .catch(() => store.dispatch(setStat('error')))
  store.dispatch(setSingerList(singerList))
  return singerList
}

export default Singers
