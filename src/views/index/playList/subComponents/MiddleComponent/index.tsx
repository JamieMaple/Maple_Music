import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Loader from 'components/Loader'
import Song from 'components/Song'
import ListContainer from 'components/Containers/ListContainer'
import { ICommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['middle-wrapper']

interface IProps extends ICommonElementProps {
  songs: any[],
  playCount?: number,
  isLoadingDetails?: boolean,
  showAlbumName?: boolean,
}

export default function MiddleList({
  className = '',
  style = {},
  songs = [],
  playCount = 0,
  showAlbumName,
  isLoadingDetails,
}: IProps) {
  const classNames = `${className} ${wrapper}`.trim()

  return (
    <div className={classNames} style={style}>
      <TitleBar className="title" text="歌单列表">
        <span className="list-num">{songs.length} 首</span>
        <div className="play-count">播放: <span className="count-num">{playCount}</span> 次</div>
      </TitleBar>
      <ul className="songs-wrapper">
        <Song icon="ion-music-note" id={0} name="歌名" singer="歌手" album={showAlbumName ? '专辑' : ''} time="时间" />
        { isLoadingDetails ? <Loader /> : <ListContainer songs={songs} /> }
      </ul>
    </div>
  )
}
