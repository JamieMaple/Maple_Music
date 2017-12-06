import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Album from 'components/Album'

import { InterfaceCommonElementProps, InterfaceAlbum } from 'commonTypes'

interface InterfacePropsTypes extends InterfaceCommonElementProps {
  albums?: InterfaceAlbum[],
}

function AlbumsContainer({
  albums = [],
  className = '',
  style = {},
}: InterfacePropsTypes) {
  const classNames = `${className}`.trim()
  const AlbumItems = albums.map((item, index) =>
    <Album
      className="album-item"
      key={`album-${index}`}
      name={item.name}
      picUrl={item.picUrl}
      url={item.url}
    />)

  return (
    <ul className={classNames} style={style}>
      {AlbumItems}
    </ul>
  )
}

export default function RecommendedAlbumList({
  className = '',
  albums = [],
}: InterfacePropsTypes) {
  const classNames = `recomened-list-hook ${className}`.trim()

  return (
    <div className={classNames}>
      <TitleBar className="title" text="推荐歌单" />
      <AlbumsContainer className="albums-container" albums={albums} />
    </div>
  )
}
