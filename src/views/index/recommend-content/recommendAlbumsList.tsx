import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Album from 'components/Album'

import { InterfaceCommonElementProps } from 'commonTypes'

interface InterfacePropsTypes extends InterfaceCommonElementProps {
  recommendedData?: object[],
}

function AlbumsContainer({
  recommendedData = [],
  className = '',
  style = {},
}: InterfacePropsTypes) {
  const classNames = `${className}`.trim()
  const AlbumItems = recommendedData.map((item, index) => <Album className="album-item" key={`album-${index}`} />)

  return (
    <ul className={classNames} style={style}>
      {AlbumItems}
    </ul>
  )
}

export default function RecommendedAlbumList({
  className = '',
}: InterfacePropsTypes) {
  const classNames = `recomened-list-hook ${className}`.trim()

  const data = new Array(10).fill({})

  return (
    <div className={classNames}>
      <TitleBar className="title" text="推荐歌单" />
      <AlbumsContainer className="albums-container" recommendedData={data} />
    </div>
  )
}
