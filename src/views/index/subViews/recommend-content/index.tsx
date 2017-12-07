import * as React from 'react'
import { connect } from 'react-redux'
import {
  bannerUrl,
  recommendSongsUrl,
  recommendSingersUrl,
  recommendListsUrl,
} from 'API'
import {
  fetchBanner,
  fetchSongs,
  fetchSingers,
  fetchLists,
} from 'actions/creators'
import Banner from 'components/Banner'
import PopularList from './popularList'
import RecommendPlayList from './recommendPlayList'
import { stateTreeTypes } from 'commonTypes'

const style = require('./style.css')

class RecommendView extends React.Component<any, any> {
  public render() {
    const { singers, songs, lists, banners } = this.props

    return (
      <div className={style['recommend-view-wrapper']}>
        <Banner className="banner-wrapper" autoPlaySpeed={2000} data={banners} />
        <PopularList className="popular-list-wrapper" singers={singers} songs={songs} />
        <RecommendPlayList className="recommended-list-wrapper" lists={lists} />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    banners: state.banners,
    songs: state.songs[stateTreeTypes.songs.recommend],
    singers: state.singers[stateTreeTypes.singers.recommend],
    lists: state.lists[stateTreeTypes.lists.recommend],
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
      limit: 30,
      offset: 0,
    },
  }, stateTreeTypes.singers.recommend))
  dispatch(fetchLists({
    url: recommendListsUrl,
  }, stateTreeTypes.lists.recommend))

  return {dispatch}
}

export default connect(mapState, mapDispatch)(RecommendView)
