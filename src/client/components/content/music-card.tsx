import React, { useEffect, useState } from 'react'
import loadingSrc from '@/assets/loadingSrc.png'
import { formatCount } from '@/client/shared/utils'

export interface MusicCardProps extends React.HTMLAttributes<any> {
  lazy?: boolean
  src: string
  loadingSrc?: string
  errorSrc?: string
  alt?: string
  title: string
  playCount: number
}

const DEFAULT_PROPS: Required<
  Pick<MusicCardProps, 'loadingSrc' | 'errorSrc' | 'lazy' | 'alt'>
> = {
  lazy: false,
  loadingSrc,
  alt: 'img not found',
  errorSrc: loadingSrc,
} as const

export const MusicCard: React.FC<MusicCardProps> = (props: MusicCardProps) => {
  const {
    lazy,
    src,
    loadingSrc,
    errorSrc,
    title,
    alt,
    playCount,
    className,
    ...restProps
  } = props as MusicCardProps & typeof DEFAULT_PROPS

  const [currentSrc, setCurrentSrc] = useState(loadingSrc)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = function () {
      setCurrentSrc(src)
    }
    img.onerror = function () {
      setCurrentSrc(errorSrc)
    }
  }, [errorSrc, src])

  // TODO(rushui 2021-11-11): lazy load
  // TODO(rushui 2021-11-11): mask
  return (
    <div
      className={'music-card' + `${className ? ' ' + className : ''}`}
      {...restProps}
    >
      <div className='music-card__cover'>
        <div className='img-wrapper'>
          <img src={currentSrc} alt={alt} className='w-full rounded-md' />
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
