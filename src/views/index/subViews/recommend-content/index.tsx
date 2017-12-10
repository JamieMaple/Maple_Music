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
import { IStateTree } from 'commonTypes'

const style = require('./style.css')

class RecommendView extends React.Component<any, any> {
  public render() {
    const { singers = [], songs = [], lists = [], banners = [] } = this.props

    return (
      <div className={style['recommend-view-wrapper']}>
        <Banner className="banner-wrapper" autoPlaySpeed={2000} data={banners} />
        <PopularList className="popular-list-wrapper" singers={singers} songs={songs} />
        <RecommendPlayList className="recommended-list-wrapper" lists={lists} />
      </div>
    )
  }
}

const dataType = 'recommend'

const mapState = (state: IStateTree) => {
  return {
    banners: state.banners,
    songs: state.songs[dataType],
    singers: state.singers[dataType],
    lists: state.lists[dataType],
  }
}

const mapDispatch = (dispatch) => {
  /* init render */
  dispatch(fetch.banners.pending({
    url: bannerUrl,
  }))
  dispatch(fetch.songs.pending({
    url: recommendSongsUrl,
  }, dataType))
  dispatch(fetch.singers.pending({
    url: recommendSingersUrl,
    params: {
      limit: 30,
      offset: 0,
    },
  }, dataType))
  dispatch(fetch.lists.pending({
    url: recommendListsUrl,
  }, dataType))

  return {dispatch}
}

export default connect(mapState, mapDispatch)(RecommendView)
