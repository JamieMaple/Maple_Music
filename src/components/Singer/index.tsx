import * as React from 'react'

const defaultClassName = require('./style.css')

interface InterfaceSinger {
  className?: string,
  style?: object,
  image?: string,
  name?: string,
  url?: string,
}

export default function Singer(
  {
    className = '',
    style = {},
    image = '',
    name = '未知歌手',
    url = '',
  }: InterfaceSinger,
) {
  const classNames = `${defaultClassName['singer-wrapper']} ${className}`.trim()

  return (
    <div className={classNames} style={style}>
      <img className="singer-image" src={image} alt=""/>
      <h3 className="singer-name">{name}</h3>
      <span className="icon-hook ion-ios-arrow-forward"></span>
    </div>
  )
}
