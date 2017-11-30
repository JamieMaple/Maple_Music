import * as React from 'react'
const style = require('./style.css')

import Banner from './banner'
import PopularList from './popularList'
import RecommendedList from './recommendList'

export default function IndexPage() {
  return (
    <div className={style['index-wrapper']}>
      <Banner className="banner-wrapper" />
      <PopularList className="popular-list-wrapper" />
      <RecommendedList className="recommended-list-wrapper" />
    </div>
  )
}
