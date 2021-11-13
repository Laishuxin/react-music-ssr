import { CommonProps } from '@/types'
import React, { Fragment } from 'react'
import Tab from './tab'
import Top from './top'

export interface HeaderProps extends CommonProps {}
const Header = (props: HeaderProps) => {
  const { className, ...restProps } = props
  return (
    <header
      className={'header' + `${className ? ' ' + className : ''}`}
      {...restProps}
    >
      <Top className='h-1/2' />
      <Tab className='h-1/2' />
    </header>
  )
}
export default React.memo(Header, () => false)
