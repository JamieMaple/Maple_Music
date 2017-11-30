import * as React from 'react'
import Search from '../Search'
import GoHistory from './GoHistory'
const style = require('./style.css')

interface InterfaceHeader {
  history?: object,
}

function LeftHeaderBar({history}: InterfaceHeader) {
  return (
    <div className="left-header">
      <GoHistory history={history} />
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

export default function HeaderBar({history}: InterfaceHeader) {
  return (
    <div className={style['header-bar-wrapper']}>
      <LeftHeaderBar history={history} />
      <RightHeaderBar />
    </div>
  )
}
