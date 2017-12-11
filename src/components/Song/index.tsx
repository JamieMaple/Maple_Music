import * as React from 'react'
import { ISongProps } from 'commonTypes'
const defaultClassName = require('./style.css')
const defaultSong = require('./default-song.svg')

export default function Song(
  {
    className = '',
    style = {},
    name = '未知歌曲',
    time,
    singer,
    album,
    picUrl,
    popularity = 0,
    index = -1,
  }: ISongProps,
) {
  const classNames = `${defaultClassName['song-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      {/* <img className="song-image" src={picUrl || defaultSong} alt=""/> */}
      <span className="song-index">{index}</span>
      <span className="song-add-icon ion-android-add"></span>
      <span className="song-name">{name}</span>
      {time ? <span className="song-time">{time}</span> : null}
      {singer ? <span className="song-singer">{singer}</span> : null}
      {album ? <span className="song-album">{album}</span> : null}
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
