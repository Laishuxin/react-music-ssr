import React from 'react'

export interface LinkButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const LinkButton = ({
  className = '',
  ...restProps
}: LinkButtonProps) => {
  return <button className={` ${className}`} {...restProps} />
}
