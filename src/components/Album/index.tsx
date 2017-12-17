import * as React from 'react'
import { Link } from 'react-router-dom'
import { formatPlayCount } from 'utils/format'
import { IAlbumProps, IPlayListProps } from 'commonTypes'
import { albumWrapper } from './style.css'

const defaultAlbum = require('./defaultAlbum.svg')

export default function Album(
  {
    className = '',
    style = {},
    picUrl,
    name = '未知歌单',
    singer = '',
    url = '/',
    playNum,
  }: IAlbumProps & IPlayListProps,
) {
  const classNames = `${albumWrapper} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <Link to={url}>
        <div style={{background: `url(${defaultAlbum})`}} className="album-wrapper">
          <img className="album-image" src={picUrl} alt=""/>
        </div>
        <div className="album-info">
          <h1 className="album-name">{name}</h1>
          {singer !== '' ? <h2 className="ion-android-person album-singer">{singer}</h2> : null}
        </div>
        {
          playNum
          ? <p className="ion-headphone album-play-num">
            {formatPlayCount(playNum)}
          </p>
          : null
        }
      </Link>
    </div>
  )
}
