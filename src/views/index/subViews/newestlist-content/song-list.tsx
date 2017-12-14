import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'
import ListContainer from 'components/containers/ListContainer'

interface InterfaceSongsProps extends ICommonElementProps {
  songs?: any[]
}

export default function NewestSongList({
  className = '',
  style = {},
  songs = [],
}: InterfaceSongsProps) {
  const classNames = `song-list-hook ${className}`.trim()

  return (
    <div className={classNames}>
      <ListContainer songs={songs} />
    </div>
  )
}
