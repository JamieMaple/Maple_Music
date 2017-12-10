import * as React from 'react'
import { Link } from 'react-router-dom'
import { IAlbumProps } from 'commonTypes'
import { albumWrapper } from './style.css'

const defaultAlbum = require('./defaultAlbum.svg')

export default function Album(
  {
    className = '',
    style = {},
    picUrl = defaultAlbum,
    name = '未知歌单',
    singer = '',
    url = '/',
    playNum,
  }: IAlbumProps,
) {
  const classNames = `${albumWrapper} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <Link to={url}>
        <img className="album-image" src={picUrl} alt=""/>
        <div className="album-info">
          <h1 className="album-name">{name}</h1>
          {singer !== '' ? <h2 className="ion-android-person album-singer">{singer}</h2> : null}
        </div>
        {
          playNum
          ? <p className="ion-headphone album-play-num">
            {playNum.toString().length > 8 ? '99999999+' : playNum}
          </p>
          : null
        }
      </Link>
    </div>
  )
}
