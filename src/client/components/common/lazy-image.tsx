import React from 'react'
import { SimpleImg as LazyLoad, Props } from 'react-simple-img'

export interface LazyImageProps extends Props {}
const LazyImage = (props: LazyImageProps) => {
  return <LazyLoad height='100%' placeholder='lightgray' {...props} />
}

LazyImage.displayName = 'lazy-image'
export default LazyImage
