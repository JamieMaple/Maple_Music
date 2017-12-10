import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import { ICommonElementProps, ISong } from 'commonTypes'

interface IProps extends ICommonElementProps {
  songs: ISong[],
}

export default function MiddleList({
  className = '',
  style = {},
  songs = [],
}: IProps) {
  return (
    <div className={className.trim()} style={style}>
      <TitleBar className="title" text="歌单列表" />
      <ul className="songs-wrapper">
        {
          songs.map((song, index) =>
          <Song key={`song-${index}`} name={song.name} index={index + 1}  className="song-item" />)
        }
      </ul>
    </div>
  )
}
