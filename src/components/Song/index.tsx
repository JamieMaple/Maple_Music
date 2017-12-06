import * as React from 'react'
import { InterfaceSongProps } from 'commonTypes'
const defaultClassName = require('./style.css')
const defaultSong = require('./default-song.svg')

export default function Song(
  {
    className = '',
    style = {},
    name = '未知歌曲',
    picUrl = defaultSong,
    popularity = 0,
    index = -1,
  }: InterfaceSongProps,
) {
  const classNames = `${defaultClassName['song-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="song-image" src={picUrl} alt=""/>
      <span className="song-index">{index}</span>
      <span className="song-add-icon ion-android-add"></span>
      <span className="song-name">{name}</span>
      <span className="song-count">{popularity}</span>
    </div>
  )
}
