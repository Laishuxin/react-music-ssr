import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Tab() {
  return (
    <div className='tab flex justify-around items-center bg-current text-gray-300 h-11'>
      <NavLink
        to='/recommend'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span> 推荐 </span>
      </NavLink>
      <NavLink
        to='/singers'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span> 歌手 </span>
      </NavLink>
      <NavLink
        to='/rank'
        className='text-sm py-1 border-b-2 border-solid border-transparent'
        activeClassName='selected text-white border-white'
      >
        <span> 排行榜 </span>
      </NavLink>
    </div>
  )
}
