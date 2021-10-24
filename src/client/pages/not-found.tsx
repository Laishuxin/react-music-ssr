import React, { useCallback } from 'react'
import { RouteComponentProps } from 'react-router'

interface NotFoundProps extends RouteComponentProps {}
export default function NotFound({ history }: NotFoundProps) {
  const handleClick = useCallback(
    (toHome = false) => (toHome ? history.push('/') : history.goBack()),
    [history],
  )
  return (
    <div>
      <h1>404 not found</h1>
      <button onClick={handleClick}>go back</button>
      <button onClick={() => handleClick(true)}>go to home</button>
    </div>
  )
}
