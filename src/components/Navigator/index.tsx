import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { INavigatorProps, ICommonElementProps } from 'commonTypes'

const style = require('./style.css')

interface InterfaceProps extends ICommonElementProps {
  dataItems?: INavigatorProps[],
}

function HeaderItem({
  text,
  url,
  exactUrl = '/',
}) {
  return (
    <li className="header-item">
      <NavLink className="item-link" exact={url === exactUrl} to={url}>{text}</NavLink>
    </li>
  )
}

export default function Header({
  className = '',
  dataItems = [],
}: InterfaceProps) {
  const classNames = `${style['header-wrapper']} ${className}`.trim()
  const dataItemsRoutes = dataItems.map(route =>
    <HeaderItem key={route.url} text={route.text} exactUrl={dataItems[0].url} url={route.url} />)

  return (
    <ul className={classNames}>
      {dataItemsRoutes}
    </ul>
  )
}
