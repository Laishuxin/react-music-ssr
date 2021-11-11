import React from 'react'
import loadingSrc from '@/assets/loadingSrc.png'
import { formatCount } from '@/client/shared/utils'

export interface MusicCardProps extends React.HTMLAttributes<any> {
  lazy?: boolean
  src: string
  loadingSrc?: string
  errorSrc?: string
  title: string
  playCount: number
}

const DEFAULT_PROPS: Required<
  Pick<MusicCardProps, 'loadingSrc' | 'errorSrc' | 'lazy'>
> = {
  lazy: false,
  loadingSrc,
  errorSrc: loadingSrc,
}

export const MusicCard: React.FC<MusicCardProps> = (props: MusicCardProps) => {
  const {
    lazy,
    src,
    loadingSrc,
    errorSrc,
    title,
    playCount,
    className,
    ...restProps
  } = { ...DEFAULT_PROPS, ...props }

  // TODO(rushui 2021-11-11): lazy load
  // TODO(rushui 2021-11-11): mask
  return (
    <div className={'music-card' + className} {...restProps}>
      <div className='music-card__cover'>
        <img src={src} alt={title} className='w-full h-full rounded-md' />
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
export default React.memo(MusicCard)
