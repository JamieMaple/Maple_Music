import { IStateTree } from "commonTypes"

// TODO
// loading localStorage

const albumsAndPlayList = {
  album: {
    // cache ['id_2041421']: [...any]
  },
  list: {
    // cache ['id_2041421']: [...any]
  },
}

const initState: IStateTree = {
  search: {
    // [keywords]: [...any]
  },
  listening: {
      mode: '',
      isPlaying: false,
      playing: {},
      playingList: [],
      currentTime: 0,
      duration: 0,
      buffered: 0, // percentage
      volume: 0,
  },
  albums: {
    // newest: []
    // cache ['id_2041421']: [...any]
  },
  lists: {
    // cache [tag]: [...any]
  },
  details: albumsAndPlayList,
  comments: albumsAndPlayList,
  singers: [
    // cache ['id_2041421']: { ...info }
  ],
  songs: {
    // newest
    // cache ['id_2041421']: { musicUrl, ...info }
  },
  recommend: {
    banners: [],
    songs: [],
    singers: [],
    lists: [],
  },
}

export default initState
