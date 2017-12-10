import * as React from 'react'
import Tags from 'components/Tags'
import TitleBar from 'components/TitleBar'
import { formatDateNum } from 'utils/format'
import { ICommonElementProps, IAlbumProps } from 'commonTypes'

const defaultAvatar = require('./defaultAvatar.svg')

export default function TopInfo({
  className = '',
  style = {},
  name = '未知歌单 | 专辑',
  publishDate,
  tags = [],
  intro = '',
  picUrl = '',
  creator = {},
}: IAlbumProps) {
  const  classNames = `${className}`.trim()

  return (
    <div className={classNames}>
      <div className="info-image-wrapper">
        <img className="image" src={picUrl} alt=""/>
      </div>
      <div className="info">
        <TitleBar className="info-title" text={name} />
        <div className="creation">
          <img className="avatar" src={creator.avatarUrl || defaultAvatar} alt=""/>
          <a className="creator">{creator.nickname || '未知创建者'}</a>
          <div className="publish-date">{publishDate && formatDateNum(publishDate)} 创建</div>
        </div>
        <Tags tags={tags} />
        <div className="intro">
          <h3 className="intro-title">介绍:</h3>
          <div className="intro-passage">
            {
              intro.split('\n').map((item, index) =>
                <p className="intro-row" key={`intro-${index}`}>{item}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
