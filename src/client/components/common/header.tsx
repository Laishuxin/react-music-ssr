import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Logo from './logo'
import Input from './input'
import { navigateToOrigin } from '@/shared/utils'

const navList = [
  { name: '首页', key: '/', to: '/', exact: true },
  { name: '歌手', key: '/singer', to: '/singer', exact: true },
  { name: '排名', key: '/rank', to: '/rank', exact: true },
  { name: '分类', key: '/category', to: '/category', exact: true },
  { name: '电台', key: '/video', to: '/video', exact: true },
  { name: 'MV', key: '/mv', to: '/mv', exact: true },
]

export default function Header() {
  const navClassName = classNames(
    'py-2 px-4 border-b-2 border-transparent hover:text-current hover:border-current transition-all',
  )
  const navActiveClassName = classNames('text-current border-current')

  return (
    <header className='flex justify-center items-center px-spacing h-12 bg-white shadow-sm z-40'>
      <div className='logo'>
        <Logo className='h-8 w-10' link onClick={navigateToOrigin} />
      </div>
      <nav className='mx-4'>
        {navList.map(({ key, name, ...rest }) => (
          <NavLink
            className={navClassName}
            activeClassName={navActiveClassName}
            key={key}
            {...rest}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <div className='search'>
        <Input type='text' placeholder='搜索音乐、MV、歌单、用户' />
      </div>
    </header>
  )
}
