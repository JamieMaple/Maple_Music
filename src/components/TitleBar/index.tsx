import * as React from 'react'
import { InterfaceTitleBar } from 'commonTypes'

const defaultClassName = require('./style.css')

export default function TitleBar({
  text,
  className = '',
  style = {}}: InterfaceTitleBar,
) {
  const classNames = `${defaultClassName.default} ${className}`.trim()
  return (
    <h1 className={classNames} style={style}>{text}</h1>
  )
}
