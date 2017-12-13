import * as React from 'react'
import { Link } from 'react-router-dom'
import TitleBar from 'components/TitleBar'

interface InterfaceRowItem {
  name: string,
  icon: string,
  url: string,
}

interface InterfaceSidebarList {
  title: string,
  list: InterfaceRowItem[],
}

export function EachRowItem({name, icon, url}: InterfaceRowItem) {
  return (
    <div className="each-item">
      <i className={`icon-hook ${icon}`}></i>
      <Link to={url}>{name}</Link>
    </div>
  )
}

export function SideBarArea({title, list}: InterfaceSidebarList) {
  const items = list.map((item) =>
  <EachRowItem
    key={item.name}
    name={item.name}
    icon={item.icon}
    url={item.url}
  />)

  return (
    <div className="sidebar-area-wrapper">
      <TitleBar className="title" text={title} />
      <div className="items-wrapper">
        {items}
      </div>
    </div>
  )
}
