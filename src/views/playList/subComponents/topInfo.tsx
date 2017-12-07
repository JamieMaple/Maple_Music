import * as React from 'react'
import { ICommonElementProps, IAlbumProps } from 'commonTypes'

export default function TopInfo({
  className = '',
  style = {},
  name = '未知歌单|专辑',
  tags = ['tag', 'tag', 'tag'],
  listIntro = '歌单介绍',
  albumIntro = '专辑介绍',
  creator = {},
}: IAlbumProps) {
  const  classNames = `${className}`.trim()
  return (
    <div className={classNames}>
      <div className="info-image"></div>
      <div className="info">
        <h3>{name}</h3>
        <div className="creator-info">创建人</div>
        <div className="list-intro"></div>
      </div>
    </div>
  )
}
