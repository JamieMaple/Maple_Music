import * as React from 'react'
import { connect } from 'react-redux'
import { stateTreeTypes } from 'commonTypes'
import { newestAlbumsUrl, newestSongsUrl } from 'API'
import { fetch } from 'actions'
import Filter from 'components/Filter'
import NewestSongList from './song-list'
import NewestAlbumList from './album-list'

const wrapper = require('./style.css')['newest-list-wrapper']

const songFlag = '单曲'
const albumFlag = '专辑'

enum Types {'单曲' = 0, '专辑'}

class NewestListView extends React.Component<any, any> {
  public state = {
    types: [{title: '类型：', children: [Types[0], Types[1]]}],
    index: 0,
  }

  public switchFilter(type) {
    this.setState(() => ({index: Types[type]}))
    this.props.handleFilterSelect(type)
  }

  public componentDidMount() {
    this.props.handleFilterSelect(Types[this.state.index])
  }

  public render() {
    const { types, index } = this.state
    const { songs = [], albums = [] } = this.props

    return (
      <div className={wrapper}>
        <Filter
          className="filter-type"
          handleEachClick={this.switchFilter.bind(this)}
          filters={types}
        />
        {
          index === Types[songFlag] ?
          <NewestSongList className="newest-song-list" songs={songs} /> : <NewestAlbumList className="newest-album-list" albums={albums} />
        }
      </div>
    )
  }
}

const newestSongsDataType = stateTreeTypes.songs.newest
const newestAlbumsDataType = stateTreeTypes.albums.newest

const mapState = (state) => {
  return {
    songs: state.songs[newestSongsDataType],
    albums: state.albums[newestAlbumsDataType],
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleFilterSelect(typeIndex) {
      const fetchConfig = { method: 'GET' }
      switch (typeIndex) {
        case songFlag:
          dispatch(fetch.songs.pending({...fetchConfig, url: newestSongsUrl}, newestSongsDataType))
          break
        case albumFlag:
          dispatch(fetch.albums.pending({...fetchConfig, url: newestAlbumsUrl,
            params: {
              limit: 30,
              offset: 0,
            },
          }, newestAlbumsDataType))
          break
        default:
          break
      }
    },
  }
}

export default connect(mapState, mapDispatch)(NewestListView)
