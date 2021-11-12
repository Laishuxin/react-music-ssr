import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export interface SliderProps {
  list: { picUrl: string }[]
}

export default function Slider(props: SliderProps) {
  const [sliderSwiper, setSliderSwiper] = useState<null | Swiper>(null)
  const { list } = props

  useEffect(() => {
    if (list.length && !sliderSwiper) {
      const newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [list.length, sliderSwiper])

  return (
    <div className='relative flex justify-center box-border w-full h-full bg-white'>
      <div className='slider-container relative rounded-lg top-2 w-full mx-4 h-56 overflow-hidden'>
        <div className='swiper-wrapper'>
          {list.map((item, index) => {
            return (
              <div className='swiper-slide' key={index}>
                <div className='slider-nav'>
                  <img
                    src={item.picUrl}
                    className='w-full h-56'
                    alt='recommend'
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  )
}
