import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { routes } from './routes'
import { getStore } from './store'

export function render(url: string, context: StaticRouterContext) {
  const store = getStore()
  const appHTML = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
  )

  return {
    appHTML,
    initState: store.getState(),
  }
}
