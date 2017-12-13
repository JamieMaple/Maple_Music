import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song, { Song as SongHeader } from 'components/Song'
import { ICommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['middle-wrapper']

interface IProps extends ICommonElementProps {
  songs: any[],
  playCount?: number,
  isPlayList?: boolean,
}

export default function MiddleList({
  className = '',
  style = {},
  songs = [],
  playCount = 0,
  isPlayList = true,
}: IProps) {
  const classNames = `${className} ${wrapper}`.trim()

  return (
    <div className={classNames} style={style}>
      <TitleBar className="title" text="歌单列表">
        <span className="list-num">{songs.length} 首</span>
        <div className="play-count">播放: <span className="count-num">{playCount}</span> 次</div>
      </TitleBar>
      <ul className="songs-wrapper">
        <SongHeader icon="ion-music-note" id={0} name="歌名" singer="歌手" album={isPlayList ? '专辑' : ''} time="时间" />
        {
          songs.map((song, index) =>
          <Song
            key={`song-${index}`}
            id={song.id}
            name={song.name}
            index={index + 1}
            time={song.dt}
            singer={song.ar.map(item => item.name).join('/')}
            album={isPlayList ? song.al.name : ''}
            className="song-item" />)
        }
      </ul>
    </div>
  )
}
