import { CommonProps, RequiredPick } from '@/types'
import React from 'react'

export interface CapsuleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  text: string
  tagName?: keyof React.ReactHTML
}

const DEFAULT_PROPS: RequiredPick<CapsuleProps, 'tagName'> = {
  tagName: 'span',
}

// @ts-ignore
// unable to fix it.
const Capsule: React.FC<CapsuleProps> = React.memo((props: CapsuleProps) => {
  const { text, className, tagName, ...restProps } = props as CapsuleProps &
    typeof DEFAULT_PROPS
  return React.createElement(
    tagName,
    {
      className:
        'capsule rounded-lg p-1 text-current border-2 border-current border-solid' +
        `${className ? ' ' + className : ''}`,
      ...restProps,
    },
    text,
  )
})

Capsule.displayName = 'capsule'
Capsule.defaultProps = DEFAULT_PROPS
export default Capsule
