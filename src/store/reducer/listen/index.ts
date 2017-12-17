import time from './time'
import changeSong from './changSong'
import changePlayingList from './changPlayingList'
import togglePlay from './togglePlay'
import changeVolume from './volume'

export default {
  ...time,
  ...changeSong,
  ...changePlayingList,
  ...togglePlay,
  ...changeVolume,
}
