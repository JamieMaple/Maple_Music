import * as React from 'react'
const style = require('./style.css')

interface InterfaceRowItem {
  name: string,
  icon: string,
  url: string,
}

interface InterfaceSidebarList {
  title: string,
  list: InterfaceRowItem[],
}

function EachRowItem({name, icon, url}: InterfaceRowItem) {
  return (
    <div className="each-item">
      <i className={`icon-hook ${icon}`}></i>
      <a>{name}</a>
    </div>
  )
}

function SideBarArea({title, list}: InterfaceSidebarList) {
  const items = list.map((item) =>
  <EachRowItem
    key={item.name}
    name={item.name}
    icon={item.icon}
    url={item.url}
  />)

  return (
    <div className="sidebar-area-wrapper">
      <h3 className="title">{title}</h3>
      <div className="items-wrapper">
        {items}
      </div>
    </div>
  )
}

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
            url: '',
          },
          {
            name: '私人FM',
            icon: 'ion-radio-waves',
            url: '',
          },
          {
            name: 'mv',
            icon: 'ion-ios-videocam',
            url: '',
          },
        ],
      },
      {
        title: '我的',
        list: [
          {
            name: 'Songs',
            icon: 'ion-ios-musical-note',
            url: '',
          },
          {
            name: 'Albums',
            icon: 'ion-ios-albums-outline',
            url: '',
          },
          {
            name: 'Artist',
            icon: 'ion-ios-people',
            url: '',
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
