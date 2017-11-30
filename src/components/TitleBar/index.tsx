import * as React from 'react'

const defaultClassName = require('./style.css')

interface InterfaceTitle {
  text: string,
  className?: string,
  style?: object,
}

export default function TitleBar({text, className = '', style = {}}: InterfaceTitle) {
  const classNames = `${defaultClassName.default} ${className}`.trim()
  return (
    <h1 className={classNames} style={style}>{text}</h1>
  )
}
