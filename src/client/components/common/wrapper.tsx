import React, { HTMLAttributes, PropsWithChildren } from 'react'
export default function Wrapper(props: PropsWithChildren<HTMLAttributes<any>>) {
  return <div className='wrapper px-lg-spacing' {...props} />
}
