import classNames from 'classnames'
import React from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'link' | 'primary' | 'default'
}

const buttonDefaultProps: ButtonProps = {
  type: 'default',
}

// TODO(rushui 2021-10-25): make default props require.
export const Button: React.FC<ButtonProps & typeof buttonDefaultProps> = (
  props: ButtonProps & typeof buttonDefaultProps,
) => {
  const { type, className, ...restProps } = props
  const classes = classNames(className, `btn btn-${type}`, {
    'outline-none': type === 'link',
  })
  return <button className={classes} {...restProps}></button>
}

Button.displayName = 'button'
Button.defaultProps = buttonDefaultProps

export const LinkButton = (props: Omit<ButtonProps, 'type'>) => (
  <Button type='link' {...props} />
)
