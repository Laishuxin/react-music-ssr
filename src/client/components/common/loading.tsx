import { sizeMap } from '@/client/shared/utils'
import { CommonProps, RequiredPick } from '@/types'
import React, { useMemo } from 'react'

export interface LoadingProps extends CommonProps {
  loading?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  unit?: 'px' | 'rem' | 'em' | 'vw' | 'vh'
}
const DEFAULT_PROPS: RequiredPick<LoadingProps, 'loading' | 'size' | 'unit'> = {
  loading: true,
  size: 'sm',
  unit: 'rem',
}
const Loading: React.FC<LoadingProps> = React.memo((props: LoadingProps) => {
  const { loading, size, className, style, unit, ...restProps } =
    props as LoadingProps & typeof DEFAULT_PROPS

  const s = sizeMap[size] + unit
  return (
    <div
      className={`loading ${loading ? '' : 'hidden'} ${className ?? ''}`}
      style={{
        width: s,
        height: s,
        ...style,
      }}
      {...restProps}
    >
      <div
        style={{ borderTopColor: 'transparent' }}
        className={`w-full h-full border-4 border-current border-dashed rounded-full animate-spin`}
      ></div>
    </div>
  )
})

Loading.displayName = 'loading'
Loading.defaultProps = DEFAULT_PROPS
export default Loading
