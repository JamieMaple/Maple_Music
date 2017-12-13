import * as React from 'react'
import Tags from 'components/Tags'
import TitleBar from 'components/TitleBar'
import { formatDateNum } from 'utils/format'
import { IAlbumProps, IPlayListProps, ICommonElementProps } from 'commonTypes'

const defaultAvatar = require('./defaultAvatar.svg')
const wrapper = require('./style.css')['top-wrapper']

function Creation({
  listMaker,
  publishDate,
  className,
}: ICommonElementProps & { listMaker, publishDate }) {
  return (
    <div className="creation">
      <img className="avatar" src={listMaker.image} alt=""/>
      <a className="creator">{listMaker.name}</a>
      <div className="publish-date">{publishDate && formatDateNum(publishDate)} 创建</div>
    </div>
  )
}

function Intro({
  className,
  intro,
}: ICommonElementProps & { intro }) {
  return (
    <div className="intro">
      <h3 className="intro-title">介绍:</h3>
      <div className="intro-passage">
        {
          intro
          ? intro.split('\n').map((item, index) =>
            <p className="intro-row" key={`intro-${index}`}>{item}</p>)
          : <p className="intro-row">暂无介绍</p>
        }
      </div>
    </div>
  )
}

export default function TopInfo({
  style = {},
  className = '',
  name = '未知歌单 | 专辑',
  publishDate,
  tags = [],
  intro = '',
  picUrl = '',
  creator,
  artist,
  artists,
}: IAlbumProps & IPlayListProps) {
  const classNames = `${className} ${wrapper}`.trim()

  const listMaker = {name: '未知创建者', image: defaultAvatar}

  if (artist) {
    listMaker.name = artist.name
    listMaker.image = artist.picUrl
  } else if (artists) {
    listMaker.name = artists.map(item => item.name).join('、')
  } else if (creator) {
    listMaker.name = creator.nickname
    listMaker.image = creator.avatarUrl
  }

  return (
    <div className={classNames}>
      <div className="info-image-wrapper">
        <img className="image" src={picUrl} alt=""/>
      </div>
      <div className="info">
        <TitleBar className="info-title" text={name} />
        <Creation className="creaction" listMaker={listMaker} publishDate={publishDate} />
        <Tags tags={tags} />
        <Intro className="intro" intro={intro} />
      </div>
    </div>
  )
}
