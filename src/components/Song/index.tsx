import * as React from 'react'
import { InterfaceSongProps } from 'commonTypes'
const defaultClassName = require('./style.css')

export default function Song(
  {
    className = '',
    style = {},
    name = '未知歌曲',
    image = '',
    count = 9999,
    index = -1,
  }: InterfaceSongProps,
) {
  const classNames = `${defaultClassName['song-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="song-image" src={image} alt=""/>
      <span className="song-index">{index}</span>
      <span className="song-add-icon ion-android-add"></span>
      <span className="song-name">{name}</span>
      <span className="song-count">{count}</span>
    </div>
  )
}
