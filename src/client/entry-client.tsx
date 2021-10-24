import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app'),
)
