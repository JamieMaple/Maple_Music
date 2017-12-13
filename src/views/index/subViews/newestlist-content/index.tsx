import * as React from 'react'
import { connect } from 'react-redux'
import { IStateTree, IRouteProps } from 'commonTypes'
import { newestAlbumsUrl, newestSongsUrl } from 'API'
import { fetch } from 'actions'
import Filter from 'components/Filter'
import NewestSongList from './song-list'
import NewestAlbumList from './album-list'

const wrapper = require('./style.css')['newest-list-wrapper']

const tags = [{title: '类型：', children: ['单曲', '专辑']}]

interface IProps extends IRouteProps {
  songs: any[],
  albums: any[],
  handleFilterSelect: (type: string) => {},
}

class NewestListView extends React.Component<IProps, any> {
  public isIndexList() {
    const { match: { url }, location: { pathname } } = this.props

    return url === pathname
  }

  public switchFilter(type) {
    this.props.handleFilterSelect(type)
  }

  public componentDidMount() {
    const defaultTag = this.isIndexList() ? tags[0].children[0] : tags[0].children[1]
    this.props.handleFilterSelect(defaultTag)
  }

  public render() {
    const { songs = [], albums = [], match: { url } } = this.props

    return (
      <div className={wrapper}>
        <Filter
          className="filter-type"
          baseUrl={url}
          handleEachClick={this.switchFilter.bind(this)}
          filters={tags}
        />
        {
          this.isIndexList()
          ? <NewestSongList className="newest-song-list" songs={songs} />
          : <NewestAlbumList className="newest-album-list" albums={albums} />
        }
      </div>
    )
  }
}

const dataType = 'newest'

const mapState = (state: IStateTree) => {
  return {
    songs: state.songs[dataType],
    albums: state.albums[dataType],
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleFilterSelect(typeIndex) {
      const fetchConfig = { method: 'GET' }
      switch (typeIndex) {
        case '单曲':
          dispatch(fetch.songs.pending({...fetchConfig, url: newestSongsUrl}, dataType))
          break
        case '专辑':
          dispatch(fetch.albums.pending({...fetchConfig, url: newestAlbumsUrl,
            params: {
              limit: 30,
              offset: 0,
            },
          }, dataType))
          break
        default:
          break
      }
    },
  }
}

export default connect(mapState, mapDispatch)(NewestListView)
