import * as React from 'react'
import TopComponent from './subComponents/TopComponent'
import MiddleComponent from './subComponents/MiddleComponent'
import DownComponent from './subComponents/DownComponent'

const wrapper = require('./style.css')['list-wrapper']

export default function SongsList({
  details = {},
  songs = [],
  showAlbumName,
  comments = {},
  isLoadingDetails,
}: any) {
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
      <MiddleComponent className="middle-list-wrapper" isLoadingDetails={isLoadingDetails} showAlbumName={showAlbumName} songs={songs} playCount={details.playCount} />
      <DownComponent className="down-comment-list-warpper" isLoadingDetails={isLoadingDetails} comments={comments} />
    </div>
  )
}
