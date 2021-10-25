import React from 'react'
import { Helmet } from 'react-helmet'

export interface PageTitleProps {
  prefix?: string
  title: string
}
export default function PageTitle({
  prefix = 'react music - ',
  title,
}: PageTitleProps) {
  return (
    <Helmet>
      <title>
        {prefix}
        {title}
      </title>
    </Helmet>
  )
}
