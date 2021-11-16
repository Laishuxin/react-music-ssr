import Scroll, { ScrollRef } from '@/client/components/common/scroll'
import { CommonProps, Singer } from '@/types'
import React, {
  PropsWithChildren,
  Ref,
  useImperativeHandle,
  useRef,
} from 'react'
import SingerListItem from './singer-list-item'

export interface SingerListProps extends CommonProps {
  list: Singer[]
  onClick?(singer: Singer): void
  onPullUp?(): void
  onPullDown?(): void
}

export interface SingerListRef {
  scrollToTop(): void
}

const SingerList = React.forwardRef(
  (
    props: PropsWithChildren<SingerListProps>,
    ref: Ref<SingerListRef | undefined>,
  ) => {
    const { list, className, onClick, onPullDown, onPullUp, ...restProps } =
      props
    const scrollRef = useRef<ScrollRef>()
    const handleClick = (singer: Singer) => {
      onClick?.(singer)
    }

    useImperativeHandle(ref, () => ({
      scrollToTop() {
        scrollRef.current?.refresh()
      },
    }))

    return (
      <Scroll
        className='absolute top-24 bottom-0 left-0 right-0 pl-2'
        ref={scrollRef}
        onPulldown={onPullDown}
        onPullup={onPullUp}
      >
        <ul
          className={'singer-list' + `${className ? ' ' + className : ''}`}
          {...restProps}
        >
          {list.map(singer => (
            <SingerListItem
              data={singer}
              onClick={() => handleClick(singer)}
              key={singer.id}
            />
          ))}
        </ul>
      </Scroll>
    )
  },
)

SingerList.displayName = 'singer-list'
export default SingerList
