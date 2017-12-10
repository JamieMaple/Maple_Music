import * as React from 'react'
import { connect } from 'react-redux'

import { IRouteProps, stateTreeTypes } from 'commonTypes'
import { fetch } from 'actions'
import { playListDetailUrl } from 'API'

import TopInfo from './subComponents/topInfo'
import MiddleList from './subComponents/middleList'
import DownCommentList from './subComponents/downCommentList'

interface IProps extends IRouteProps {
  details?: any,
  dispatch?: any,
}

const wrapper = require('./style.css')['list-wrapper']

class SongsList extends React.Component<IProps, any> {
  public componentDidMount() {
    const { params } = this.props.match
    this.props.dispatch(fetch.details.pending({
      method: 'GET',
      url: playListDetailUrl,
      params,
    }, stateTreeTypes.details))
  }

  public render() {
    const { details = {} } = this.props
    const { playlist = {}, privileges = {} } = details

    return (
      <div className={wrapper}>
        <TopInfo
          className="top-info-wrapper"
          picUrl={playlist.coverImgUrl}
          name={playlist.name}
          tags={playlist.tags}
          intro={playlist.description}
          creator={playlist.creator}
        />
        <MiddleList className="middle-list-wrapper" songs={playlist.tracks} />
        <DownCommentList className="down-comment-list-warpper" />
      </div>
    )
  }
}

const mapState = (state, ownProps: IProps): any => {
  const { id } = ownProps.match.params
  const stateType = stateTreeTypes.details

  return {
     details: state[stateType][`id=${id}`],
  }
}

export default connect(mapState)(SongsList)
