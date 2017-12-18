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
export interface IFetch {
  recommend: IFetchStatus,
  song: IFetchStatus,
  singers: IFetchStatus,
  albums: IFetchStatus,
  lists: IFetchStatus,
  // differ
  newest: IFetchNewest,
  details: IFetchDetails,
  comments: IFetchComments,
  error: any,
}
export interface IListen {
  toggle: any,
  play: any,
  pause: any,
  prev: any,
  next: any,
  volume: any,
  mode: any,
  change: {
    song: IFetchStatus,
    playinglist: any,
  },
  buffered: any,
  current: {
    get: any,
    change: any,
  },
}

export interface IFetchStatus {
  pending: any,
  success: any,
}

export const commonFetch  = (params, ...args) => ({params, others: args})
export const commonCommit = data => data
export const asyncActions = { PENDING: commonFetch, SUCCESS: commonCommit}
