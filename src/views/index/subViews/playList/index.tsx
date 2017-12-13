import * as React from 'react'
import { connect } from 'react-redux'
import { IRouteProps, IStateTree } from 'commonTypes'
import { fetch } from 'actions'
import { playListDetailUrl, albumDetailUrl, albumCommentsUrl, listCommentsUrl } from 'API'
import { stateIdPrifex } from 'utils/stateFormat'
import TopComponent from './subComponents/TopComponent'
import MiddleComponent from './subComponents/MiddleComponent'
import DownComponent from './subComponents/DownComponent'

interface IProps extends IRouteProps {
  details?: any,
  comments?: any,
  dispatch?: any,
  fetchList?: any,
  fetchComments?: any,
}

const wrapper = require('./style.css')['list-wrapper']

const routeRegs = {
  playlist: /^\/playList\/[0-9]{7,10}$/,
  albumlist: /^\/album\/[0-9]{4,10}$/,
}

class SongsList extends React.Component<IProps, any> {
  public dataType = {
    album: 'album',
    playList: 'playList',
  }

  public isPlayList() {
    const { match: { url } } = this.props
    if (routeRegs.playlist.test(url)) {
      return true
    } else {
      return false
    }
  }

  public componentDidMount() {
    const { fetchList, fetchComments } = this.props
    if (this.isPlayList()) {
      const type = this.dataType.playList
      fetchList(playListDetailUrl, type)
      fetchComments(listCommentsUrl, type)
    } else {
      const type = this.dataType.album
      fetchList(albumDetailUrl, type)
      fetchComments(albumCommentsUrl, type)
    }
  }

  public render() {
    const { details = {}, comments = {all: [], top: [], hot: []} } = this.props
    const { info = {}, songs = [] } = details

    return (
      <div className={wrapper}>
        <TopComponent
          className="top-info-wrapper"
          picUrl={info.coverImgUrl || info.picUrl}
          name={info.name}
          publishDate={info.createTime || info.publishTime}
          tags={info.tags}
          intro={info.description}
          creator={info.creator}
          artist={info.artist}
        />
        <MiddleComponent className="middle-list-wrapper" songs={info.tracks || songs} isPlayList={this.isPlayList()} playCount={info.playCount} />
        <DownComponent className="down-comment-list-warpper" comments={comments} />
      </div>
    )
  }
}

const mapState = (state: IStateTree & any, ownProps: IProps): any => {
  const { params: {id: formatId}, url } = ownProps.match
  const { details: { playList: detailsPlayList, album: detailsAlbum },
    comments: { playList: commentsPlayList, album: comemntsAlbum } } = state
  const id = stateIdPrifex(formatId)

  if (routeRegs.playlist.test(url)) {
    return {
      details: detailsPlayList[id],
      comments: commentsPlayList[id],
    }
  } else if (routeRegs.albumlist.test(url)) {
    return {
      details: detailsAlbum[id],
      comments: comemntsAlbum[id],
    }
  }
}

const mapDispatch = (dispatch, ownProps: IProps) => {
  const { id } = ownProps.match.params
  const commonConfig = { method: 'GET', params: { id } }

  return{
    fetchList(url, type) {
      dispatch(fetch.details.pending({ ...commonConfig, url }, type))
    },
    fetchComments(url, type) {
      dispatch(fetch.comments.pending({...commonConfig, url}, type))
    },
  }
}

export default connect(mapState, mapDispatch)(SongsList)
