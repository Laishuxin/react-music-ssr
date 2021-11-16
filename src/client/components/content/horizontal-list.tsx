import { CommonProps, RequiredPick } from '@/types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Scroll, { ScrollRef } from '../common/scroll'
import Capsule from '../common/capsule'

type Data = {
  name: string
  key: any
}

export interface HorizontalListProps<D extends Data> extends CommonProps {
  title?: string
  list: D[]
  defaultIndex?: number
  onChange?(item: D | undefined): void
}

const DEFAULT_PROPS: RequiredPick<HorizontalListProps<any>, 'defaultIndex'> = {
  defaultIndex: -1,
}

/**
 * @default {props.defaultIndex=-1} select nothing
 */
const HorizontalList = <D extends Data>(props: HorizontalListProps<D>) => {
  const { title, list, defaultIndex, className, onChange, ...restProps } =
    props as HorizontalListProps<D> & typeof DEFAULT_PROPS
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
      ?.getScrollContentEl()
      ?.style.setProperty('width', `${width}px`)
  }, [])

  const handleClick = useCallback(
    (index: number, item: D) => {
      if (currentIndex === index) {
        setCurrentIndex(-1)
        onChange?.(undefined)
        return
      }
      setCurrentIndex(index)
      onChange?.(item)
    },
    [currentIndex, onChange],
  )
  return (
    <Scroll
      className={className}
      direction='horizontal'
      ref={scrollRef}
      {...restProps}
    >
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
              'horizontal-list-item flex-shrink-0 text-sm cursor-pointer' +
              (index === currentIndex
                ? ' active'
                : ' border-transparent text-black')
            }
            onClick={() => handleClick(index, item)}
            key={item.key}
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
