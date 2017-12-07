import * as React from 'react'
import { IAlbumProps } from 'commonTypes'
import Album from 'components/Album'

const containerClass = require('./style.css')['album-container']

export default function AlbumContainer({
  className = '',
  style = {},
  ...args,
}: IAlbumProps) {
  const classNames = `${containerClass} ${className}`.trim()
  return (
    <div className={classNames} style={style}>
      <Album className="album" {...args} />
    </div>
  )
}
