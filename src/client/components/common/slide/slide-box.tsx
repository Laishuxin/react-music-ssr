import React from 'react'

export interface SlideBoxProps {
  title?: string
}
export default function SlideBox(props: SlideBoxProps) {
  const { title } = props
  return (
    <section className='slide-box'>
      {title && <h2 className='slide-box__title text-lg'></h2>}
    </section>
  )
}
