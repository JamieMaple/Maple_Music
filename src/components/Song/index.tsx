import * as React from 'react'
import { ISongProps, IEventHandler } from 'commonTypes'
import { fetch, listen } from 'actions'
import { connect } from 'react-redux'
import { formatMusicTime } from 'utils/format'
const defaultClassName = require('./style.css')
const defaultSong = require('./default-song.svg')

export function Song({
    className = '',
    style = {},
    name = '未知歌曲',
    time,
    singer,
    icon = 'ion-android-add',
    album,
    picUrl,
    popularity = 0,
    index,
    onDoubleClick = () => {},
  }: ISongProps & IEventHandler,
) {
  const classNames = `${defaultClassName['song-wrapper']} ${className}`.trim()

  return (
    <div onDoubleClick={onDoubleClick} className={classNames} style={style}>
      {/* <img className="song-image" src={picUrl || defaultSong} alt=""/> */}
      <span className="song-index">{index}</span>
      <span className={`song-add-icon ${icon}`.trim()}></span>
      <span className="song-name">{name}</span>
      {singer ? <span className="song-singer">{singer}</span> : null}
      {album ? <span className="song-album">{album}</span> : null}
      {
        time ?
        <span className="song-time">
          {typeof time === 'number' ? formatMusicTime(time) : time }
        </span> : null
      }
      {
        popularity
        ? <div className="hot-num">
            <span className="icon-hook ion-flame"></span>
            <span className="song-count">{popularity}</span>
          </div>
        : null
      }
    </div>
  )
}
const mapState = () => ({})
const mapDispatch = (dispatch): any => ({
  onDoubleClick: (id) => {
    dispatch(fetch.listening.pending({id}))
    dispatch(listen.play())
  },
})

function SongContainer({onDoubleClick = () => {}, ...args}: ISongProps & IEventHandler) {
  return <Song {...args} onDoubleClick={onDoubleClick.bind(null, args.id)} />
}

export default connect(mapState, mapDispatch)(SongContainer)
