import React from 'react'
import { RecommendItem } from '@/types'
import { formatCount } from '@/client/shared/utils'
import MusicCard from '@/client/components/content/music-card'

export interface ListProps extends React.HTMLAttributes<any> {
  list: RecommendItem[]
}

export default function RecommendList(props: ListProps) {
  const { list, className, ...restProps } = props
  return (
    <div
      className={
        'list-container max-w-full' + `${className ? ' ' + className : ''}`
      }
      {...restProps}
    >
      <h1 className='title font-bold mt-4 pl-4 text-sm leading-10'>推荐歌单</h1>
      <ul className='list grid justify-between px-4 grid-cols-3 gap-4'>
        {list.map(item => {
          return <ListItem key={item.id} item={item} />
        })}
      </ul>
    </div>
  )
}

function ListItem(props: { item: RecommendItem }) {
  const { item } = props
  return (
    <li className='item relative mb-2 w-full'>
      <MusicCard
        className='w-full'
        src={item.picUrl}
        title={item.name}
        playCount={item.playCount}
      />
    </li>
  )
}
