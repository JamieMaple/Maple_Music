import * as React from 'react'

const defaultClassName = require('./style.css')

interface InterfaceAlbum {
  className?: string,
  style?: object,
  image?: string,
  name?: string,
  singer?: string,
  url?: string,
}

export default function Album(
  {
    className = '',
    style = {},
    image = '',
    name = '未知歌单',
    singer = '',
    url = '',
  }: InterfaceAlbum,
) {
  const classNames = `${defaultClassName['album-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="album-image" src="" alt=""/>
      <div className="album-info">
        <h1 className="album-name">{name}</h1>
        {singer !== '' ? <h2 className="album-singer">{singer}</h2> : null}
      </div>
    </div>
  )
}
