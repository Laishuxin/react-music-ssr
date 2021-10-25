import React from 'react'

import { ReactComponent } from '@/assets/logo.svg'
import { LinkButton } from '.'

export default function Logo(
  props: React.SVGProps<SVGSVGElement> & { title?: string; link?: boolean },
) {
  const { link, ...restProps } = props
  if (!link) return <ReactComponent {...restProps} />
  return (
    <LinkButton className='outline-none'>
      <Logo {...restProps} />
    </LinkButton>
  )
}
