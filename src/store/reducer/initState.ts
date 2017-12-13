// TODO
// loading localStorage

const albumsAndPlayList = {
  album: {},
  playList: {},
}

export default {
  search: {},
  listening: {
      // cache ['id_2041421']: { musicUrl, ...info }
      mode: '',
      isPlaying: false,
      playing: {},
      // percentage
      currentTime: 0,
      duration: 0,
      buffered: 0,
  },
  banners: [],
  albums: {
    // newest: [],
  },
  lists: {
    // recommend: [],
    // playList: [],
  },
  details: albumsAndPlayList,
  comments: albumsAndPlayList,
  singers: {
    // recommend: [],
  },
  songs: {
    // recommend: [],
    // newest: [],
  },
}
