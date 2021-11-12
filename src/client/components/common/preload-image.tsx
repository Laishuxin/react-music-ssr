import React, { HTMLAttributes, useEffect, useState } from 'react'
import preloadSrc from '@/assets/loading-src.png'

export interface PreloadImageProps extends HTMLAttributes<HTMLImageElement> {
  preloadSrc?: string
  errorSrc?: string
  alt?: string
  src: string
}

const DEFAULT_PROPS = {
  preloadSrc,
  errorSrc: preloadSrc,
}

const PreloadImage: React.FC<PreloadImageProps> = (
  props: PreloadImageProps,
) => {
  const { src, preloadSrc, errorSrc, ...restProps } =
    props as PreloadImageProps & typeof DEFAULT_PROPS
  const [currentSrc, setCurrentSrc] = useState(preloadSrc)

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
  return <img src={currentSrc} {...restProps} />
}

PreloadImage.defaultProps = DEFAULT_PROPS
PreloadImage.displayName = 'preload-image'
export default PreloadImage
