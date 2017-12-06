import * as React from 'react'
import { connect } from 'react-redux'
import {
  bannerUrl,
  recommendSongsUrl,
  recommendSingersUrl,
  recommendAlbumsUrl,
} from 'API'
import {
  fetchBanner,
  fetchSongs,
  fetchSingers,
  fetchAlbums,
} from 'actions/creators'
import Banner from 'components/Banner'
import PopularList from './popularList'
import RecommendedAlbumsList from './recommendAlbumsList'
import { stateTreeTypes } from 'commonTypes'

const style = require('./style.css')

class RecommendView extends React.Component<any, any> {
  public props: {
    banners: any[],
    songs: any[],
    singers: any[],
    albums: any[],
  }

  public render() {
    const { singers, songs, albums, banners } = this.props

    return (
      <div className={style['recommend-view-wrapper']}>
        <Banner className="banner-wrapper" autoPlaySpeed={5000} data={banners} />
        <PopularList className="popular-list-wrapper" singers={singers} songs={songs} />
        <RecommendedAlbumsList className="recommended-list-wrapper" albums={albums} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    banners: state.banners,
    songs: state.songs[stateTreeTypes.songs.recommend],
    singers: state.singers[stateTreeTypes.singers.recommend],
    albums: state.albums[stateTreeTypes.albums.recommend],
  }
}

const mapDispatch = (dispatch) => {
  /* init render */
  dispatch(fetchBanner({
    url: bannerUrl,
  }))
  dispatch(fetchSongs({
    url: recommendSongsUrl,
  }, stateTreeTypes.songs.recommend))
  dispatch(fetchSingers({
    url: recommendSingersUrl,
    params: {
      limit: 20,
      offset: 0,
    },
  }, stateTreeTypes.singers.recommend))
  dispatch(fetchAlbums({
    url: recommendAlbumsUrl,
  }, stateTreeTypes.albums.recommend))

  return {dispatch}
}

export default connect(mapState, mapDispatch)(RecommendView)
