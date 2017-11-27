import * as React from 'react'
import Search from '../Search'
import GoHistory from '../GoHistory'
const style = require('./style.css')

function LeftHeaderBar() {
  return (
    <div className="left-header">
      <GoHistory />
      <Search />
    </div>
  )
}

function RightHeaderBar() {
  return (
    <div className="right-header">
    </div>
  )
}

export default function HeaderBar() {
  return (
    <div className={style['header-bar-wrapper']}>
      <LeftHeaderBar />
      <RightHeaderBar />
    </div>
  )
}
