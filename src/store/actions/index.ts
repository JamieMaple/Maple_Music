import { createActions } from 'redux-actions'

interface IFetchStatus {
  pending: any,
  success: any,
}
interface IFetch {
  banners: IFetchStatus,
  songs: IFetchStatus,
  singers: IFetchStatus,
  albums: IFetchStatus,
  lists: IFetchStatus,
  details: IFetchStatus,
  comments: IFetchStatus,
  listening: IFetchStatus,
  error: any,
}

const commonFetch  = (config, dataType, ...args) => ({config, dataType, others: args})
const commonCommit = (data) => ({data})
const fetchName = [
  'BANNERS',
  'LISTENING',
  'SONGS',
  'ALBUMS',
  'SINGERS',
  'LISTS',
  'DETAILS',
  'COMMENTS',
]
const fetchObject = {}

fetchName.forEach(item => {
  fetchObject[item] = {
    PENDING: commonFetch,
    SUCCESS: commonCommit,
  }
})

let fetch: IFetch
let listen: { toggle, play, buffered, current }

({ fetch, listen } = createActions({
  FETCH: {
    ...fetchObject,
    ERROR: () => {},
  },
  LISTEN: {
    TOGGLE: () => {},
    PLAY: () => {},
    BUFFERED: commonCommit,
    CURRENT: commonCommit,
  },
}, { namespace: '_' }))

function getTypeName(func) {
  if (typeof func !== 'function') {
    throw TypeError('params must be function')
  }
  return func.toString()
}

export { fetch, listen, getTypeName }
