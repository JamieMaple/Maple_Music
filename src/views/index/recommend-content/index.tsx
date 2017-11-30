import * as React from 'react'
import Banner from 'components/Banner'
import PopularList from './popularList'
import RecommendedAlbumsList from './recommendAlbumsList'

const style = require('./style.css')

export default function RecommendView() {
  return (
    <div className={style['recommend-view-wrapper']}>
      <Banner className="banner-wrapper" />
      <PopularList className="popular-list-wrapper" />
      <RecommendedAlbumsList className="recommended-list-wrapper" />
    </div>
  )
}
