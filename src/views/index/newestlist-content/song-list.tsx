import * as React from 'react'
import { InterfaceCommonElementProps, InterfaceSong } from 'commonTypes'
import Song from 'components/Song'

interface InterfaceSongsProps extends InterfaceCommonElementProps {
  songs?: InterfaceSong[]
}

export default function NewestSongList({
  className = '',
  style = {},
  songs = [],
}: InterfaceSongsProps) {
  const classNames = `song-list-hook ${className}`.trim()
  const songItems = songs.map((song, index) =>
    <Song key={`song-${index}`} index={index + 1} name={song.name} picUrl={song.picUrl} />)

  return (
    <div className={classNames}>
      <ul>
        {songItems}
      </ul>
    </div>
  )
}
