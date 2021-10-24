import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { Route, StaticRouterContext } from 'react-router'

export function render(url: string, context: StaticRouterContext) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url} context={context}>
        <Route path='/' component={App} />
      </StaticRouter>
    </React.StrictMode>,
  )
}
