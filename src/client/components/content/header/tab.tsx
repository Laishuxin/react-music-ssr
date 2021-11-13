import { CommonProps } from '@/types'
import React from 'react'
import { NavLink } from 'react-router-dom'

export interface TabProps extends CommonProps {}

const Tab: React.FC<TabProps> = (props: TabProps) => {
  const { className, ...restProps } = props
  return (
    <div
      className={
        'tab flex justify-around items-center bg-current text-gray-300 border-t-2 border-b-2 border-solid border-current' +
        `${className ? ' ' + className : ''}`
      }
      {...restProps}
    >
      <NavLink
        to='/recommend'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span>推荐</span>
      </NavLink>
      <NavLink
        to='/singers'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span>歌手</span>
      </NavLink>
      <NavLink
        to='/rank'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span>排行榜</span>
      </NavLink>
    </div>
  )
}

export default React.memo(Tab, () => false)
