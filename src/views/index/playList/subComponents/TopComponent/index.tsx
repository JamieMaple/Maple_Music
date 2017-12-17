import * as React from 'react'
import Tags from 'components/Tags'
import TitleBar from 'components/TitleBar'
import { formatDateNum } from 'utils/format'
import { IAlbumProps, IPlayListProps, ICommonElementProps } from 'commonTypes'

const defaultAvatar = require('./defaultAvatar.svg')
const defaultList = require('./defaultList.svg')
const wrapper = require('./style.css')['top-wrapper']

function Creation({
  listMaker,
  publishDate,
  className,
}: ICommonElementProps & { listMaker, publishDate }) {
  return (
    <div className="creation">
      <div className="avatar-wrapper" style={{backgroundImage: `url(${defaultAvatar})`}}>
        <img className="avatar" src={listMaker.image} alt=""/>
      </div>
      <a className="creator">{listMaker.name}</a>
      <div className="publish-date">{publishDate && formatDateNum(publishDate)} 创建</div>
    </div>
  )
}

class Intro extends React.Component<ICommonElementProps & { intro }, any> {
  public limit = 10

  public state = {
    limit: this.limit,
    maxLimit: 100,
    isHasMore: false,
    isExtend: false,
  }

  public componentWillReceiveProps(nextProps) {
    const { intro } = nextProps
    if (intro && intro.split('\n').length > this.state.limit) {
      this.setState((prev) => ({...prev, isHasMore: true}))
    }
  }

  public toggleExtend = () => {
    this.setState((prev) => ({
      ...prev,
      limit: prev.limit >= prev.maxLimit ? this.limit : prev.maxLimit,
      isExtend: !prev.isExtend,
    }))
  }

  public render() {
    const introArr = this.props.intro && this.props.intro.split('\n')
    const { isHasMore, isExtend, limit } = this.state

    return (
      <div className="intro">
        <h3 className="intro-title">介绍:</h3>
        <div className="intro-passage">
          {
            introArr
            ? introArr.slice(0, limit).map((item, index) =>
              <p className="intro-row" key={`intro-${index}`}>
                {item}
                { isHasMore && index + 1 >= limit && !isExtend && '......' }
              </p>)
            : <p className="intro-row">暂无介绍</p>
          }
        </div>
        {
          isHasMore
          ? <div className="more-wrapper" onClick={this.toggleExtend}>
              <a className={`more ${isExtend ? 'ion-chevron-up' : 'ion-chevron-down' }`.trim()} href="javascript:;">{ isExtend ? '收起' : '展开' }</a>
            </div>
          : null
        }
      </div>
    )
  }
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
      <div className="info-image-wrapper" style={{backgroundImage: `url(${defaultList})`}} >
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
