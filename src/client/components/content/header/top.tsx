import Logo from '@/client/components/common/logo'
import { navigateToOrigin } from '@/shared/utils'
import { CommonProps } from '@/types'
import React from 'react'

export interface TopProps extends CommonProps {}
const Top: React.FC<TopProps> = (props: TopProps) => {
  const { className, ...restProps } = props
  const handleClick = navigateToOrigin
  return (
    <div
      className={
        'top flex justify-between bg-current py-1 px-2' +
        `${className ? ' ' + className : ''}`
      }
      {...restProps}
    >
      <span className='cursor-pointer leading-10 text-white iconfont menu'>
        &#xe65c;
      </span>
      <div
        className='title flex-1 flex justify-center items-center cursor-pointer'
        onClick={handleClick}
      >
        <Logo className='w-6 h-6 mx-2' />
        <span className='leading-10 text-white title'>React Music</span>
      </div>
      <span className='cursor-pointer leading-10 text-white iconfont search'>
        &#xe62b;
      </span>
    </div>
  )
}

Top.displayName = 'top'
export default React.memo(Top, () => false)
