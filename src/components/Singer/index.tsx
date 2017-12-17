import * as React from 'react'
import { ISingerProps} from 'commonTypes'

const defaultSinger = require('./default-singer.svg')

const defaultClassName = require('./style.css')

export default function Singer(
  {
    className = '',
    style = {},
    picUrl,
    name = '未知歌手',
    url = '',
  }: ISingerProps,
) {
  const classNames = `${defaultClassName['singer-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <div className="singer-image-wrapper" style={{backgroundImage: `url(${defaultSinger})`}}>
        <img className="singer-image" src={picUrl} alt=""/>
      </div>
      <h3 className="singer-name">{name}</h3>
      <span className="icon-hook ion-ios-arrow-forward"></span>
    </div>
  )
}
