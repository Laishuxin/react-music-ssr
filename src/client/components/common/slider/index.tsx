import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export interface SliderProps<D extends { key: any }> {
  dataSource: D[]
  render(data: D): React.ReactNode
  pagination?: boolean
  delay?: number
  disableOnInteraction?: boolean
  loop?: boolean
}

const DEFAULT_PROPS: Required<
  Pick<
    SliderProps<any>,
    'delay' | 'disableOnInteraction' | 'loop' | 'pagination'
  >
> = {
  delay: 3000,
  disableOnInteraction: false,
  loop: true,
  pagination: true,
}

export default function Slider<D extends { key: any }>(props: SliderProps<D>) {
  const [sliderSwiper, setSliderSwiper] = useState<null | Swiper>(null)
  const {
    dataSource,
    render,
    delay,
    disableOnInteraction,
    loop,
    pagination,
    ...restProps
  } = props as Required<SliderProps<D>>

  useEffect(() => {
    if (dataSource.length && !sliderSwiper) {
      const newSliderSwiper = new Swiper('.slider-container', {
        loop,
        autoplay: {
          delay,
          disableOnInteraction,
        },
        pagination: pagination ? { el: '.swiper-pagination' } : undefined,
      })
      setSliderSwiper(newSliderSwiper)
    }
  }, [
    dataSource.length,
    delay,
    disableOnInteraction,
    loop,
    pagination,
    sliderSwiper,
  ])

  return (
    <div
      className='relative flex justify-center box-border w-full h-full bg-white'
      {...restProps}
    >
      <div className='slider-container relative z-10 rounded-lg top-2 w-full mx-4 h-full overflow-hidden'>
        <div className='swiper-wrapper'>
          {dataSource.map(item => (
            <div className='swiper-slide' key={item.key}>
              {render(item)}
            </div>
          ))}
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-extra-semi
;(Slider as React.FC<SliderProps<any>>).displayName = 'slider'
;(Slider as React.FC<SliderProps<any>>).defaultProps = DEFAULT_PROPS
