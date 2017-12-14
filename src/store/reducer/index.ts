import { handleActions } from 'redux-actions'
import initState from './initState'
import fetchReducer from './fetch'
import listenReducer from './listen'

export default handleActions({
  ...fetchReducer,
  ...listenReducer,
}, initState)
