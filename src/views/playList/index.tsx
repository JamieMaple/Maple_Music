import * as React from 'react'

import { IRouteProps } from 'commonTypes'

import TopInfo from './subComponents/topInfo'
import MiddleList from './subComponents/middleList'
import DownCommentList from './subComponents/downCommentList'

const wrapper = require('./style.css')['list-wrapper']

export default function SongsList({
  match,
}: IRouteProps) {
  return (
    <div className={wrapper}>
      <TopInfo className="top-info-wrapper" />
      <MiddleList />
      <DownCommentList />
    </div>
  )
}
