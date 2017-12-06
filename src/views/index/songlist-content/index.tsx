import * as React from 'react'
import { connect } from 'react-redux'
import {
  InterfaceAlbumProps,
  InterfaceCommonElementProps,
  stateTreeTypes,
} from 'commonTypes'
import { fetchAlbums } from 'actions/creators'
import { playListUrl } from 'API'
import Album from 'components/AlbumContainer'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

interface InterfacePlayListProps {
  albums: InterfaceAlbumProps[],
  dispatch: any,
}

class SongListView extends React.Component<any, any> {
  public props: InterfacePlayListProps

  public state = {
    tags: ['全部', '华语', '欧美', '日语', '古风', '流行'],
    limit: 30,
    offset: 0,
    defaultTag: 0,
  }

  public fetchConfig = {
    method: 'GET',
    url: playListUrl,
  }

  public handleFilter(index) {
    const { tags, limit } = this.state
    this.props.dispatch(fetchAlbums({
      ...this.fetchConfig,
      params: {
        limit,
        cat: tags[index],
      },
    }, stateTreeTypes.albums.playList))
  }

  public componentDidMount() {
    const { tags, limit, defaultTag } = this.state

    this.props.dispatch(fetchAlbums({
      ...this.fetchConfig,
      params: {
        limit,
        cat: tags[defaultTag],
      },
    }, stateTreeTypes.albums.playList))
  }

  public render() {
    const { albums = [] } = this.props
    const { tags } = this.state
    const Albums = albums.map((album, index) =>
      <Album
        key={`album-${index}`}
        className="song-list-item"
        name={album.name}
        picUrl={album.coverImgUrl}
        url={album.url}
        singer={album.creator.nickname}
      />)

    return (
      <div className={wrapper}>
        <Filter className="filter" handleEachClick={this.handleFilter.bind(this)} filters={tags} filterTitle="标签:" icon="ion-ios-pricetag-outline" />
        <ul className="albums-wrapper">
          {Albums}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    albums: state.albums[stateTreeTypes.albums.playList],
  }
}
const mapDispatch = (dispatch) => {
  return {dispatch}
}

export default connect(mapState, mapDispatch)(SongListView)
