import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import { formatMusicTime } from 'utils/format'
import { ICommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['middle-wrapper']

interface IProps extends ICommonElementProps {
  songs: any[],
  playCount?: number,
}

export default function MiddleList({
  className = '',
  style = {},
  songs = [],
  playCount = 0,
}: IProps) {
  const classNames = `${className} ${wrapper}`.trim()

  return (
    <div className={classNames} style={style}>
      <TitleBar className="title" text="歌单列表">
        <span className="list-num">{songs.length}首</span>
        <div className="play-count">播放：<span className="count-num">{playCount}</span>次</div>
      </TitleBar>
      <ul className="songs-wrapper">
        {
          songs.map((song, index) =>
          <Song
            key={`song-${index}`}
            name={song.name}
            index={index + 1}
            time={formatMusicTime(song.dt)}
            singer={song.ar.map(item => item.name).join('/')}
            album={song.al.name}
            className="song-item" />)
        }
      </ul>
    </div>
  )
}
