import React from 'react'
import { RecommendItem } from '@/types'
import { formatCount } from '@/client/shared/utils'
import MusicCard from '@/client/components/content/music-card'

export interface ListProps {
  list: RecommendItem[]
}

export default function RecommendList(props: ListProps) {
  const { list } = props
  return (
    <ListContainer>
      <h1 className='title font-bold mt-4 pl-4 text-sm leading-10'>推荐歌单</h1>
      <List>
        {list.map(item => {
          return <ListItem key={item.id} item={item} />
        })}
      </List>
    </ListContainer>
  )
}

function ListItem(props: { item: RecommendItem }) {
  const { item } = props
  return (
    <li
      className='item relative mb-2 w-full'
      // style={{
      //   width: '30%',
      // }}
    >
      <MusicCard
        src={item.picUrl}
        title={item.name}
        playCount={item.playCount}
      />
    </li>
  )
}

function List(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className='list grid justify-between px-4 grid-cols-3 gap-4'
      {...props}
    />
  )
}

function ListContainer(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className='list-container max-w-full' {...props} />
}
