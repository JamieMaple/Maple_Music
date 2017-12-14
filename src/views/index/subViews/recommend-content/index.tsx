import * as React from 'react'
import { connect } from 'react-redux'
import { fetch } from 'actions'
import Banner from 'components/Banner'
import PopularList from './popularList'
import RecommendPlayList from './recommendPlayList'
import { IStateTree, ISong } from 'commonTypes'

const style = require('./style.css')

class RecommendView extends React.Component<any, any> {
  public componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetch.recommend.pending())
  }

  public render() {
    const { singers = [], songs = [], lists = [], banners = [] } = this.props
    const songItems = songs.map((song, index): ISong => ({
      id: song.id,
      index: index + 1,
      name: song.name,
      time: song.song.duration,
    }))

    return (
      <div className={style['recommend-view-wrapper']}>
        <Banner className="banner-wrapper" autoPlaySpeed={2000} data={banners} />
        <PopularList className="popular-list-wrapper" singers={singers} songs={songItems} />
        <RecommendPlayList className="recommended-list-wrapper" lists={lists} />
      </div>
    )
  }
}

const dataType = 'recommend'

const mapState = (state: IStateTree) => {
  if (state.recommend) {
    return {
      banners: state.recommend.banners,
      songs: state.recommend.songs,
      singers: state.recommend.singers,
      lists: state.recommend.lists,
    }
  } else {
    return {}
  }
}

export default connect(mapState)(RecommendView)
