import * as React from 'react'
import Search from 'components/Search'
import GoHistory from './GoHistory'
const style = require('./style.css')

interface InterfaceHeader {
  back?: any,
  forward?: any,
}

function LeftHeaderBar({back, forward}: InterfaceHeader) {
  return (
    <div className="left-header">
      <GoHistory back={back} forward={forward} />
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

export default class HeaderBar extends React.PureComponent<{back, forward}, any> {
  public render() {
    return (
      <div className={style['header-bar-wrapper']}>
        <LeftHeaderBar back={this.props.back} forward={this.props.forward} />
        <RightHeaderBar />
      </div>
    )
  }
}
