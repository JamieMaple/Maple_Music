import * as React from 'react'
import { InterfaceCommonElementProps, InterfaceSong, InterfaceAlbum } from 'commonTypes'
import Filter from 'components/Filter'
import NewestSongList from './song-list'
import NewestAlbumList from './album-list'

const wrapper = require('./style.css')['newest-list-wrapper']

enum Types {'单曲' = 0, '专辑'}

export default class NewestListView extends React.Component {
  public state = {
    types: [Types[0], Types[1]],
    index: 0,
  }

  public switchType(index) {
    const { types } = this.state
    this.setState((prevState) => {
      return {index}
    })
  }

  public render() {
    const { types, index } = this.state
    const filters2 = new Array(4).fill('地域')
    const albums = new Array(20).fill({})
    const songs = new Array(20).fill({})

    return (
      <div className={wrapper}>
        <Filter
          className="filter-type"
          filterTitle="种类:"
          handleEachClick={this.switchType.bind(this)}
          filters={types}
        />
        <Filter className="filter-region" filterTitle="地域:" filters={filters2} />
        {index === Types['单曲']
        ? <NewestSongList className="newest-song-list" songs={songs} />
        : <NewestAlbumList className="newest-album-list" albums={albums} />
        }
      </div>
    )
  }
}
