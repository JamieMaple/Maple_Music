import * as React from 'react'
import TopComponent from './subComponents/TopComponent'
import MiddleComponent from './subComponents/MiddleComponent'
import DownComponent from './subComponents/DownComponent'

const wrapper = require('./style.css')['list-wrapper']

class SongsList extends React.Component<any, any> {
  public render() {
    const { details = {}, songs = [], showAlbumName, comments = {all: [], top: [], hot: []} } = this.props

    return (
      <div className={wrapper}>
        <TopComponent
          className="top-info-wrapper"
          picUrl={details.coverImgUrl || details.picUrl}
          name={details.name}
          publishDate={details.createTime || details.publishTime}
          tags={details.tags}
          intro={details.description}
          creator={details.creator}
          artist={details.artist}
        />
        <MiddleComponent className="middle-list-wrapper" showAlbumName={showAlbumName} songs={songs} playCount={details.playCount} />
        <DownComponent className="down-comment-list-warpper" comments={comments} />
      </div>
    )
  }
}

export default SongsList
