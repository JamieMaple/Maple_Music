import * as React from 'react'
import { ITitleBar } from 'commonTypes'

const defaultClassName = require('./style.css')

export default function TitleBar({
  text,
  className = '',
  style = {},
  children = [],
}: ITitleBar) {
  const classNames = `${defaultClassName.default} ${className}`.trim()
  return (
    <h1 className={classNames} style={style}>{text}{children}</h1>
  )
}
