import time from './time'
import changeSong from './changSong'
import changePlayingList from './changPlayingList'
import togglePlay from './togglePlay'

export default {
  ...time,
  ...changeSong,
  ...changePlayingList,
  ...togglePlay,
}
