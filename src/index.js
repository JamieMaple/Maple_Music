import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'
import './_reset.scss'

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component history={history} location={location} />
        </Router>
      </Provider>
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
