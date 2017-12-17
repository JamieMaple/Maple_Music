import * as React from 'react'
import { IRouteProps } from 'commonTypes'
import List from 'components/AlbumWrapper'

export default function ListsContainer({
  lists = [],
  className = '',
}: { className?: string, lists: any[] }) {
  const listItems = lists.map((list, index) =>
    <List
      key={`album-${index}`}
      className="song-list-item"
      name={list.name}
      picUrl={list.coverImgUrl}
      url={`/playList/${list.id}`}
      singer={list.creator && list.creator.nickname}
      playNum={list.playCount}
    />)

  return (
    <ul className={`${className}`.trim()}>{listItems}</ul>
  )
}
