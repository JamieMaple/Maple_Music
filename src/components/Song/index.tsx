import * as React from 'react'
import { ISongProps, IEventHandler } from 'commonTypes'
import { formatMusicTime } from 'utils/format'
const defaultClassName = require('./style.css')
const defaultSong = require('./default-song.svg')

export default function Song({
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
    onClick = () => {},
  }: ISongProps & IEventHandler,
) {
  const classNames = `${defaultClassName['song-wrapper']} ${className}`.trim()

  return (
    <div onClick={onClick} onDoubleClick={onDoubleClick} className={classNames} style={style}>
      {/* <img className="song-image" src={picUrl || defaultSong} alt=""/> */}
      <span className="song-index">{index}</span>
      <span className={`song-add-icon ${icon}`.trim()}></span>
      <span className="song-name">{name}</span>
      {singer ? <span className="song-singer">{Array.isArray(singer) ? singer.map(item => item.name).join('、') : singer }</span> : null}
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
