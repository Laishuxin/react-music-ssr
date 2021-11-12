import React, { useEffect, useState } from 'react'
import { formatCount } from '@/client/shared/utils'
import LazyImage from '../common/lazy-image'

export interface MusicCardProps extends React.HTMLAttributes<any> {
  lazy?: boolean
  src: string
  placeholder?: string
  alt?: string
  title: string
  playCount: number
}

const DEFAULT_PROPS: Required<
  Pick<MusicCardProps, 'placeholder' | 'lazy' | 'alt'>
> = {
  lazy: false,
  placeholder: 'lightgray',
  alt: 'img not found',
} as const

export const MusicCard: React.FC<MusicCardProps> = (props: MusicCardProps) => {
  const {
    lazy,
    src,
    placeholder,
    title,
    alt,
    playCount,
    className,
    ...restProps
  } = props as MusicCardProps & typeof DEFAULT_PROPS

  // TODO(rushui 2021-11-11): mask
  return (
    <div
      className={'music-card' + `${className ? ' ' + className : ''}`}
      {...restProps}
    >
      <div className='music-card__cover'>
        <div className='img-wrapper'>
          <LazyImage
            src={src}
            height={'100%'}
            width={'100%'}
            placeholder={placeholder}
            className='w-full rounded-md'
          />
        </div>
      </div>

      <h4 className='music-card__title mt-2 text-xs'>{title}</h4>
      <span className='music-card__play-count text-xs text-gray-300'>
        播放量：{formatCount(playCount)}
      </span>
    </div>
  )
}

// MusicCard.defaultProps = DEFAULT_PROPS
MusicCard.displayName = 'music-card'
MusicCard.defaultProps = DEFAULT_PROPS
export default React.memo(MusicCard)
