import { createActions } from 'redux-actions'
import { IFetch, IListen } from './common'
import FETCH from './fetch'
import LISTEN from './listen'

function getTypeName(func) {
  if (typeof func !== 'function') {
    throw TypeError('params must be function')
  }
  return func.toString()
}

let fetch: IFetch
let listen: IListen

({ fetch, listen } = createActions({
  FETCH,
  LISTEN,
}, { namespace: '_' }))

export { fetch, listen, getTypeName }
