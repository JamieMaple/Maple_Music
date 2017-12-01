import * as React from 'react'
import { InterfaceAlbumProps } from 'commonTypes'

const defaultClassName = require('./style.css')
const defaultAlbum = require('./defaultAlbum.svg')

export default function Album(
  {
    className = '',
    style = {},
    image = defaultAlbum,
    name = '未知歌单',
    singer = '',
    url = '',
  }: InterfaceAlbumProps,
) {
  const classNames = `${defaultClassName['album-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="album-image" src={image} alt=""/>
      <div className="album-info">
        <h1 className="album-name">{name}</h1>
        {singer !== '' ? <h2 className="album-singer">{singer}</h2> : null}
      </div>
    </div>
  )
}
