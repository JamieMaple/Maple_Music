import { createActions } from 'redux-actions'

const commonFetch  = (config, dataType, ...args) => ({config, dataType, others: args})
const commonCommit = (data) => ({data})
const commonFetchName = ['BANNERS', 'SONGS', 'ALBUMS', 'SINGERS', 'LISTS', 'DETAILS']
const commonFetchObject = {}

commonFetchName.forEach(item => {
  commonFetchObject[item] = {
    PENDING: commonFetch,
    SUCCESS: commonCommit,
  }
})

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
  error: any,
}

let fetch: IFetch

({ fetch } = createActions({
  FETCH: {
    ...commonFetchObject,
    ERROR: () => {},
  },
}, { namespace: '_' }))

function getTypeName(func) {
  if (typeof func !== 'function') {
    throw TypeError('params must be function')
  }
  return func.toString()
}

export { fetch, getTypeName }
