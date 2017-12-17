import * as React from 'react'
import { SideBarArea } from './sidebarArea'
import { ICommonElementProps } from 'commonTypes'
const wrapper = require('./style.css')['sidebar-wrapper']

export default class SideBar extends React.PureComponent<ICommonElementProps, any> {
  private static defaultProps = {
    className: '',
    style: {},
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
    const { className, style } = this.props
    const listItems = this.state.presets.map(
      (item) =>
      <SideBarArea key={item.title} title={item.title} list={item.list} />)

    return (
      <div className={`${wrapper} ${className}`} style={style}>
        {listItems}
      </div>
    )
  }
}
