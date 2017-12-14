import * as React from 'react'
import TitleBar from 'components/TitleBar'
import List from 'components/AlbumWrapper'

import { ICommonElementProps } from 'commonTypes'

interface InterfacePropsTypes extends ICommonElementProps {
  lists?: any[],
}

function PlayListsContainer({
  lists = [],
  className = '',
  style = {},
}: InterfacePropsTypes) {
  const classNames = `${className}`.trim()
  const ListsItems = lists.map((item, index) =>
    <List
      className="album-item"
      key={`album-${index}`}
      name={item.name}
      picUrl={item.picUrl}
      url={`/playList/${item.id}`}
    />)

  return (
    <ul className={classNames} style={style}>
      {ListsItems}
    </ul>
  )
}

export default function RecommendedPlayList({
  className = '',
  lists = [],
}: InterfacePropsTypes) {
  const classNames = `recomened-list-hook ${className}`.trim()

  return (
    <div className={classNames}>
      <TitleBar className="title" text="推荐歌单" />
      <PlayListsContainer className="albums-container" lists={lists} />
    </div>
  )
}
