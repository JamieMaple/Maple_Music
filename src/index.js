import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'
import './_reset.scss'

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  )
}

render(App)

/* eslint-disable no-undef */
if (module.hot) {
  // webpack HMR APi
  module.hot.accept('./app', () => {
    render(App)
  })
}
