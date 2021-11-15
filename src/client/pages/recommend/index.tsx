import Slider from '@/client/components/common/slider'
import React, { useEffect, useMemo, useRef } from 'react'
import RecommendList from './list'
import Scroll, { ScrollRef } from '@/client/components/common/scroll'
import { getBanner, getRecommendList } from '@/api/recommend'
import { useAppDispatch, useAppSelector } from '@/client/store'
import {
  selectBannerList,
  selectRecommendList,
  setBannerList,
  setRecommendList,
} from './slice'
import PreloadImage from '@/client/components/common/preload-image'

function Recommend() {
  const scrollRef = useRef<ScrollRef>()
  const dispatch = useAppDispatch()
  const _bannerList = useAppSelector(selectBannerList)
  const recommendList = useAppSelector(selectRecommendList)

  // adapt
  const bannerList = useMemo(
    () =>
      _bannerList.map(item => ({
        key: item.bannerId,
        src: item.pic,
        targetId: item.targetId,
      })),
    [_bannerList],
  )

  useEffect(() => {
    _bannerList.length === 0 && dispatch(setBannerList(getBanner()))
    recommendList.length === 0 && dispatch(setRecommendList(getRecommendList()))
    // scrollRef.current?.refresh()
  }, [_bannerList.length, dispatch, recommendList.length])

  return (
    <Scroll className='fixed top-20 mt-2 bottom-0 w-full' ref={scrollRef}>
      <div className='before absolute bg-current w-full h-56 -top-36  z-1'></div>
      <Slider
        dataSource={bannerList}
        render={item => (
          <PreloadImage
            src={item.src}
            className='w-full h-80'
            alt='recommend'
          />
        )}
      />
      <RecommendList list={recommendList} />
    </Scroll>
  )
}

export default Recommend
