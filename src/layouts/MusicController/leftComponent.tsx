import * as React from 'react'
import { formatPercentage } from 'utils/stateFormat'
import { IMusicInfo, IEventHandler } from 'commonTypes'

const defaultSong = require('./default-song.svg')

export function MusicInfo({ song, singer}: IMusicInfo) {
  return (
    <div className="music-info">
      <h1 className="song">{song || '未知音乐'}</h1>
      <h2 className="singer">{singer || '未知歌手'}</h2>
    </div>
  )
}

export function MusicPhoto({ image, onClick }: IMusicInfo & IEventHandler) {
  return <img className="music-photo" onClick={onClick}  src={image || defaultSong} alt=""/>
}
