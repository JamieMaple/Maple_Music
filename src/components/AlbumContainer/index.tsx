import * as React from 'react'
import { InterfaceAlbumProps } from 'commonTypes'
import Album from 'components/Album'

const containerClass = require('./style.css')['album-container']

export default function AlbumContainer({
  className = '',
  style = {},
  picUrl,
  name,
  singer,
  url,
}: InterfaceAlbumProps) {
  const classNames = `${containerClass} ${className}`.trim()
  return (
    <div className={classNames} style={style}>
      <Album className="album" picUrl={picUrl} name={name} singer={singer} url={url} />
    </div>
  )
}
