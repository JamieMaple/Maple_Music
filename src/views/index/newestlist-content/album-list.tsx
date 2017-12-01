import * as React from 'react'
import { InterfaceCommonElementProps, InterfaceAlbum } from 'commonTypes'
import Album from 'components/Album'

interface InterfaceAlbumsProps extends InterfaceCommonElementProps {
  albums?: InterfaceAlbum[]
}

export default function NewestAlbumList({
  className = '',
  style = {},
  albums = [],
}: InterfaceAlbumsProps) {
  const classNames = `album-list-hook ${className}`.trim()
  const albumItems = albums.map((album, index) =>
    <Album key={`album-${index}`} image={album.image} url={album.url} name={album.url} singer={album.singer} />)

  return (
    <div className={classNames}>
      {albumItems}
    </div>
  )
}