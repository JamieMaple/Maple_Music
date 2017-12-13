import * as React from 'react'
import { formatPercentage } from 'utils/stateFormat'
import { IMusicInfo, ICommonElementProps, IEventHandler } from 'commonTypes'

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

export function PlayBar({
  className = "",
  style = {},
  play = false,
  togglePlay,
}: ICommonElementProps & {play?: boolean, togglePlay?: any}) {
  return (
    <div className={className.trim()} style={style}>
      <span className="ion-ios-skipbackward icon-hook"></span>
      <div onClick={togglePlay ? togglePlay : () => {}} className={`${play ? 'ion-pause' : 'ion-play play'} play-button`}></div>
      <span className="ion-ios-skipforward icon-hook"></span>
    </div>
  )
}

export function AudioPlayerBar({
  className = '',
  style = {},
  duration,
  currentTime,
}: ICommonElementProps & { duration, currentTime }) {
  const classNames = `audio-hook ${className}`.trim()
  const percentage = duration ? formatPercentage(currentTime / duration) : 0
  const progressStyle = {transition: 'transform 0.3s linear', transform: `translate3d(${percentage - 100}%, 0, 0)` }

  return (
    <div className={classNames} style={style}>
      <div style={progressStyle} className="progress"><span className="progress-button"></span></div>
    </div>
  )
}
