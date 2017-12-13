import { handleActions } from 'redux-actions'
import initState from './initState'
import fetchReducer from './fetch'
import playReducer from './play'

export default handleActions({
  ...fetchReducer,
  ...playReducer,
}, initState)
