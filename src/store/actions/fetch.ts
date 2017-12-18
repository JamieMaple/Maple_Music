import { IFetchStatus, asyncActions } from './common'

const fetchName = [
  'RECOMMEND',
  'SINGERS',
  'SONG',
  'ALBUMS',
  'LISTS',
]
const fetchObject = {}

fetchName.forEach(item => {
  fetchObject[item] = asyncActions
})

const albumsAndSongs = {
  ALBUMS: asyncActions,
  SONGS: asyncActions,
}
const albumAndList = {
  ALBUM: asyncActions,
  LIST: asyncActions,
}

export default {
  ...fetchObject,
  NEWEST: albumsAndSongs,
  COMMENTS: albumAndList,
  DETAILS: albumAndList,
  ERROR: () => {},
}
