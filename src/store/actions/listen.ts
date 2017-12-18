import { commonCommit, asyncActions } from './common'
export default {
  TOGGLE: () => {},
  PLAY: ()  => {},
  PAUSE: () => {},
  PREV: () => {},
  NEXT: () => {},
  VOLUME: commonCommit,
  CHANGE: {
    SONG: asyncActions,
    PLAYINGLIST: commonCommit,
  },
  BUFFERED: commonCommit,
  MODE: commonCommit,
  CURRENT: {
    GET: commonCommit,
    CHANGE: commonCommit,
  },
}
