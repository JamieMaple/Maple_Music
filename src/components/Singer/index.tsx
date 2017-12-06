import * as React from 'react'
import { InterfaceSingerProps} from 'commonTypes'

const defaultSinger = require('./default-singer.svg')

const defaultClassName = require('./style.css')

export default function Singer(
  {
    className = '',
    style = {},
    picUrl = defaultSinger,
    name = '未知歌手',
    url = '',
  }: InterfaceSingerProps,
) {
  const classNames = `${defaultClassName['singer-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="singer-image" src={picUrl} alt=""/>
      <h3 className="singer-name">{name}</h3>
      <span className="icon-hook ion-ios-arrow-forward"></span>
    </div>
  )
}
