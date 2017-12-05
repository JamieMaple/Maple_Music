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

const style = require('./style.css')

interface InterfaceProps {
  banners: any[],
  songs: any[],
  singers: any[],
  albums: any[]
}

function RecommendView({
  banners = [],
  songs = [],
  singers = [],
  albums = [],
}: InterfaceProps) {
  return (
    <div className={style['recommend-view-wrapper']}>
      <Banner className="banner-wrapper" data={banners} />
      <PopularList className="popular-list-wrapper" singers={singers} songs={songs} />
      <RecommendedAlbumsList className="recommended-list-wrapper" albums={albums} />
    </div>
  )
}

const mapState = (state): InterfaceProps => {
  return {
    banners: state.banners,
    songs: state.songs,
    singers: state.singers,
    albums: state.albums,
  }
}

const mapDispatch = (dispatch) => {
  /* init fetch */
  dispatch(fetchBanner({
    method: 'GET',
    url: bannerUrl,
  }))
  dispatch(fetchSongs({
    method: 'GET',
    url: recommendSongsUrl,
  }))
  dispatch(fetchSingers({
    method: 'GET',
    url: recommendSingersUrl,
    params: {
      limit: 20,
      offset: 0,
    },
  }))
  dispatch(fetchAlbums({
    method: 'GET',
    url: recommendAlbumsUrl,
  }))

  return {

  }
}

export default connect(mapState, mapDispatch)(RecommendView)
