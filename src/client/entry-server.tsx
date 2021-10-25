import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'

export function render(url: string, context: StaticRouterContext) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </React.StrictMode>,
  )
}
