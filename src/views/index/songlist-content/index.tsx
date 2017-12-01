import * as React from 'react'
import { InterfaceAlbumProps, InterfaceCommonElementProps } from 'commonTypes'
import Album from 'components/Album'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

export default function SongListView() {
  const albumsData: InterfaceAlbumProps[] = new Array(30).fill(0)
  const tags = new Array(4).fill('标签')
  tags.unshift('全部')

  const Albums = albumsData.map((album, index) =>
    <Album
      key={`album-${index}`}
      className="song-list-item"
      name={album.name}
      image={album.image}
      url={album.url}
      singer={album.singer}
    />)

  return (
    <div className={wrapper}>
      <Filter className="filter" filters={tags} filterTitle="标签:" icon="ion-ios-pricetag-outline" />
      <ul className="albums-wrapper">
        {Albums}
      </ul>
    </div>
  )
}
