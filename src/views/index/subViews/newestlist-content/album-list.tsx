import * as React from 'react'
import { ICommonElementProps, IAlbum } from 'commonTypes'
import Album from 'components/AlbumContainer'

interface InterfaceAlbumsProps extends ICommonElementProps {
  albums?: any[]
}

export default function NewestAlbumList({
  className = '',
  style = {},
  albums = [],
}: InterfaceAlbumsProps) {
  const classNames = `album-list-hook ${className}`.trim()
  const albumItems = albums.map((album, index) =>
    <Album key={`album-${index}`} picUrl={album.picUrl} url={`/album/${album.id}`} name={album.name} singer={album.singer} />)

  return (
    <div className={classNames}>
      {albumItems}
    </div>
  )
}
