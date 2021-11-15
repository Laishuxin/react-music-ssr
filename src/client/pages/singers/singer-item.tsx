import LazyImage from '@/client/components/common/lazy-image'
import { CommonProps, Singer } from '@/types'
import React, { useCallback } from 'react'

export interface SingerItemProps extends React.HTMLAttributes<HTMLLIElement> {
  data: Singer
}

const SingerItem: React.FC<SingerItemProps> = React.memo(
  (props: SingerItemProps) => {
    const { data: singer, className, ...restProps } = props
    return (
      <li
        className={
          'singer-list-item flex py-2 h-22 items-center border-b-2 border-solid border-gray-200 cursor-pointer hover:bg-gray-200' +
          `${className ? ' ' + className : ''}`
        }
        {...restProps}
      >
        <LazyImage
          width='5rem'
          height='5rem'
          src={singer.picUrl}
          alt={singer.name}
        />
        <span className='singer-name ml-4'>{singer.name}</span>
      </li>
    )
  },
)

SingerItem.displayName = 'singer-item'
export default SingerItem
