import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Album from 'components/Album'

interface InterfacePropsTypes {
  className?: string,
  recommendedData?: object[],
}

function AlbumsContainer({recommendedData = [], className = ''}: InterfacePropsTypes) {
  const classNames = `${className}`.trim()
  const AlbumItems = recommendedData.map((item, index) => <Album className="album-item" key={`album-${index}`} />)

  return (
    <ul className={classNames}>
      {AlbumItems}
    </ul>
  )
}

export default function RecommendedList({className}: InterfacePropsTypes) {
  const classNames = `recomened-list-hook ${className}`.trim()

  const data = new Array(10).fill({})

  return (
    <div className={classNames}>
      <TitleBar className="title" text="推荐歌单" />
      <AlbumsContainer className="albums-container" recommendedData={data} />
    </div>
  )
}
