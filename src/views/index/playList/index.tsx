import * as React from 'react'
import { connect } from 'react-redux'
import { IRouteProps, IStateTree, ISong } from 'commonTypes'
import { fetch } from 'actions'
import { stateIdPrifex } from 'utils/stateFormat'
import SongsList from './entry'

interface IHOCProps extends IRouteProps {
  isLoadingDetails?: boolean,
  dispatch?: any,
  details?: any,
  comments?: any,
  songs?: any[],
}

const routeRegs = {
  playlist: /^\/playList\/[0-9]{7,10}$/,
  albumlist: /^\/album\/[0-9]{4,10}$/,
}

const mapState = (state: IStateTree & any, ownProps: IRouteProps): any => {
  const { params: { id: formatId }, url } = ownProps.match
  const { details: { list: detailsPlayList, album: detailsAlbum, isLoading: isLoadingDetails },
    comments: { list: commentsPlayList, album: comemntsAlbum } } = state
  const id = stateIdPrifex(formatId)

  if (routeRegs.playlist.test(url)) {
    return {
      isLoadingDetails,
      details: detailsPlayList[id],
      songs: detailsPlayList[id] ? detailsPlayList[id]['tracks'] : [],
      comments: commentsPlayList[id],
    }
  } else if (routeRegs.albumlist.test(url)) {
    return {
      isLoadingDetails,
      details: detailsAlbum[id],
      songs: detailsAlbum[id] ? detailsAlbum[id]['songs'] : [],
      comments: comemntsAlbum[id],
    }
  }
}

const HOCContainer = Component => class WrappedComponent extends React.Component<IHOCProps, any> {
  public showAlbumName = this.isPlayList()
  public isPlayList() {
    const {match: { url }} = this.props
    return routeRegs.playlist.test(url)
  }

  public componentDidMount() {
    const { match: { params, url }, dispatch } = this.props
    if (routeRegs.playlist.test(url)) {
      dispatch(fetch.details.list.pending(params))
      dispatch(fetch.comments.list.pending(params))
    } else {
      dispatch(fetch.details.album.pending(params))
      dispatch(fetch.comments.album.pending(params))
    }
  }

  public render() {
    const songItems = this.props.songs && this.props.songs.map((song, index): ISong => ({
      id: song.id,
      index: index + 1,
      name: song.name,
      time: song.dt,
      album: this.showAlbumName && song.al && song.al.name,
      singer: song.artists || song.ar,
    }))
    return <Component isLoadingDetails={this.props.isLoadingDetails} details={this.props.details} songs={songItems} showAlbumName={this.showAlbumName} comments={this.props.comments} />
  }
}

export default connect(mapState)(HOCContainer(SongsList))
