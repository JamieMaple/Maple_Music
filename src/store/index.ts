import { createStore, applyMiddleware } from 'redux'
import createReduxSaga from 'redux-saga'
import rootSaga from './sagas'
import reducer from './reducer'

declare const window: any

const reduxSaga = createReduxSaga()

export default createStore(
  reducer,
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxSaga),
)

reduxSaga.run(rootSaga)
