import * as React from 'react'
import { SideBarArea } from './sidebarArea'
import * as types from './types'
const style = require('./style.css')

export default class SideBar extends React.Component {
  private static defaultProps = {
    className: '',
  }

  public props: {
    className?: string,
  }

  public state = {
    presets: [
      {
        title: '日推',
        list: [
          {
            name: '发现',
            icon: 'ion-ios-musical-notes',
            url: '/',
          },
          {
            name: '私人FM',
            icon: 'ion-radio-waves',
            url: '/privatefm',
          },
          {
            name: 'mv',
            icon: 'ion-ios-videocam',
            url: '/mv',
          },
        ],
      },
      {
        title: '我的',
        list: [
          {
            name: 'Songs',
            icon: 'ion-ios-musical-note',
            url: '/',
          },
          {
            name: 'Albums',
            icon: 'ion-ios-albums-outline',
            url: '/',
          },
          {
            name: 'Artist',
            icon: 'ion-ios-people',
            url: '/',
          },
        ],
      },
    ],
  }

  public render() {
    const { className } = this.props
    const listItems = this.state.presets.map(
      (item) =>
      <SideBarArea key={item.title} title={item.title} list={item.list} />)

    return (
      <div className={`${style['sidebar-wrapper']} ${className}`}>
        {listItems}
      </div>
    )
  }
}
