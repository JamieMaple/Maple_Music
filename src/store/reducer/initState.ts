import { IStateTree } from "commonTypes"

// TODO
// loading localStorage

const albumsAndPlayList = {
  isLoading: false,
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
      // modes: 0 -> order, 1 -> loop, 2 -> random
      modes: {
        mode: 0,
        order: 0,
        loop: 1,
        random: 2,
        length: 3,
      },
      isPlaying: false,
      id: 0,
      index: 0,
      playing: {},
      playingList: [],
      currentTime: 0,
      changeTime: 0,
      duration: 0,
      buffered: 0, // percentage
      volume: 1, // [0, 1]
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
