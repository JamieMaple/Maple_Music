import { createActions } from 'redux-actions'

interface IFetchStatus {
  pending: any,
  success: any,
}
interface IFetchDetails {
  album: IFetchStatus,
  list: IFetchStatus,
}
interface IFetchComments {
  album: IFetchStatus,
  list: IFetchStatus,
}
interface IFetchNewest {
  songs: IFetchStatus,
  albums: IFetchStatus,
}
interface IFetch {
  recommend: IFetchStatus,
  song: IFetchStatus,
  singers: IFetchStatus,
  albums: IFetchStatus,
  lists: IFetchStatus,
  loading: IFetchStatus,
  // differ
  newest: IFetchNewest,
  details: IFetchDetails,
  comments: IFetchComments,
  error: any,
}

const commonFetch  = (params, ...args) => ({params, others: args})
const commonCommit = data => data
const asyncActions = { PENDING: commonFetch, SUCCESS: commonCommit}
const fetchName = [
  'RECOMMEND',
  'LOADING',
  'SINGERS',
  'SONG',
  'ALBUMS',
  'LISTS',
]
const fetchObject = {}

fetchName.forEach(item => {
  fetchObject[item] = asyncActions
})

let fetch: IFetch
let listen: { toggle, play, pause, duration, change: IFetchStatus, buffered, current }

({ fetch, listen } = createActions({
  FETCH: {
    ...fetchObject,
    NEWEST: {
      ALBUMS: asyncActions,
      SONGS: asyncActions,
    },
    DETAILS: {
      ALBUM: asyncActions,
      LIST: asyncActions,
    },
    COMMENTS: {
      ALBUM: asyncActions,
      LIST: asyncActions,
    },
    ERROR: () => {},
  },
  LISTEN: {
    TOGGLE: () => {},
    PLAY: ()  => {},
    PAUSE: () => {},
    CHANGE: asyncActions,
    DURATION: commonCommit,
    LIST: commonCommit,
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
