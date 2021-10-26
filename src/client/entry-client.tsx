import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { routes } from './routes'
import { getStore } from './store'

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={getStore()}>
      <BrowserRouter>
        {/* <Route path='/' component={App} /> */}
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app'),
)
