import * as React from 'react'
import { formatPercentage } from 'utils/stateFormat'
import { IMusicInfo, IEventHandler, ICommonElementProps } from 'commonTypes'

const defaultSong = require('./default-song.svg')

export function MusicInfo({ song, singer, className, style }: IMusicInfo & ICommonElementProps) {
  return (
    <div style={style} className={`${className}`.trim()}>
      <h1 className="song">{song || '未知音乐'}</h1>
      <h2 className="singer">{singer || '未知歌手'}</h2>
    </div>
  )
}

export function MusicPhoto({ image, className = '', onClick }: IMusicInfo & IEventHandler & ICommonElementProps ) {
  return <img className={`${className}`.trim()} onClick={onClick}  src={image || defaultSong} alt=""/>
}
