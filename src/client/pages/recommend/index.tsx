import Slider from '@/client/components/common/slider'
import React, { useEffect, useRef } from 'react'
import RecommendList from './list'
import Scroll, { ScrollRef } from '@/client/components/common/scroll'

function Recommend() {
  const scrollRef = useRef<ScrollRef>()
  useEffect(() => {
    scrollRef.current?.refresh()
  }, [])
  // mock
  const bannerList = [1, 2, 3, 4].map(item => {
    return {
      picUrl:
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
    }
  })

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
    return {
      id: item,
      picUrl:
        'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
      playCount: 17171122,
      name: '朴树、许巍、李健、郑钧、老狼、赵雷',
    }
  })

  return (
    // @ts-ignore
    <Scroll className='fixed top-20 mt-2 bottom-0 w-full' ref={scrollRef}>
      <div className='before absolute bg-current w-full h-44 -top-24 z-1'></div>
      <Slider list={bannerList} />
      <RecommendList list={recommendList} />
    </Scroll>
  )
}

export default Recommend
