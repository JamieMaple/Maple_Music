import * as React from 'react'
import { connect } from 'react-redux'
import {
  bannerUrl,
  recommendSongsUrl,
  recommendSingersUrl,
  recommendListsUrl,
} from 'API'
import { fetch } from 'actions'
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
  dispatch(fetch.banners.pending({
    url: bannerUrl,
  }))
  dispatch(fetch.songs.pending({
    url: recommendSongsUrl,
  }, stateTreeTypes.songs.recommend))
  dispatch(fetch.singers.pending({
    url: recommendSingersUrl,
    params: {
      limit: 30,
      offset: 0,
    },
  }, stateTreeTypes.singers.recommend))
  dispatch(fetch.lists.pending({
    url: recommendListsUrl,
  }, stateTreeTypes.lists.recommend))

  return {dispatch}
}

export default connect(mapState, mapDispatch)(RecommendView)
