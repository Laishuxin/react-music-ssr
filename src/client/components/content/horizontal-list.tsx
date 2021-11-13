import { CommonProps, RequiredPick } from '@/types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Scroll, { ScrollRef } from '../common/scroll'
import Capsule from '../common/capsule'

export interface HorizontalListProps extends CommonProps {
  title?: string
  list: { name: string }[]
  defaultIndex?: number
  onChange?(index: number): void
}

const DEFAULT_PROPS: RequiredPick<HorizontalListProps, 'defaultIndex'> = {
  defaultIndex: 0,
}

const HorizontalList: React.FC<HorizontalListProps> = (
  props: HorizontalListProps,
) => {
  const { title, list, defaultIndex, className, onChange } =
    props as HorizontalListProps & typeof DEFAULT_PROPS
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const horizontalListRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<ScrollRef>()

  useEffect(() => {
    const children = horizontalListRef.current?.querySelectorAll('span') || []
    const width = Array.from(children).reduce(
      (prev, curr) => prev + curr.offsetWidth,
      0,
    )
    // horizontalListRef.current?.style.setProperty('width', `${width}px`)
    scrollRef.current
      ?.getScrollContentRef()
      ?.style.setProperty('width', `${width}px`)
  }, [])

  const handleClick = useCallback(
    (index: number) => {
      setCurrentIndex(index)
      onChange?.(index)
    },
    [onChange],
  )
  return (
    <Scroll className={className} direction='horizontal' ref={scrollRef}>
      <div className='horizontal-list flex flex-row' ref={horizontalListRef}>
        {title ? (
          <Capsule
            className='flex-shrink-0 text-sm border-transparent text-default-gray'
            text={title}
          />
        ) : null}
        {list.map((item, index) => (
          <Capsule
            className={
              'flex-shrink-0 text-sm' +
              (index === currentIndex ? '' : ' border-transparent text-black')
            }
            onClick={() => handleClick(index)}
            key={index}
            text={item.name}
          />
        ))}
      </div>
    </Scroll>
  )
}
HorizontalList.displayName = 'horizontal-list'
HorizontalList.defaultProps = DEFAULT_PROPS
export default HorizontalList