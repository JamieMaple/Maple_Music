import { IStateTree } from '../../commonTypes'

// TODO
// loading localStorage

export const initState: IStateTree = {
  search: {},
  listening: {},
  banners: [],
  albums: {
    newest: [],
  },
  lists: {
    recommend: [],
    playList: [],
  },
  details: {
    album: [],
    playList: [],
  },
  comments: {
    album: [],
    playList: [],
  },
  singers: {
    recommend: [],
  },
  songs: {
    recommend: [],
    newest: [],
  },
}
