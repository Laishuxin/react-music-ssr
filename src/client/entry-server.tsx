import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { StaticRouterContext } from 'react-router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { routes } from './routes'
import { getStore } from './store'

export function render(url: string, context: StaticRouterContext) {
  const store = getStore()
  const matchedRoutes = matchRoutes(routes, url)
  const promises: Promise<any>[] = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  const renderAppHTML = () =>
    ReactDOMServer.renderToString(
      <React.StrictMode>
        <Provider store={store}>
          <StaticRouter location={url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      </React.StrictMode>,
    )

  return {
    renderAppHTML,
    promises,
    store,
  }
}
