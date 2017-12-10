import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['tags-wrapper']

interface ITags extends ICommonElementProps {
  tags?: string[],
  handleClick?: any,
}

function Tag({
  text = '标签',
  handleClick = () => {},
  className = '',
}) {
  return (
    <li className={`${className}`}><a href="javascript:;">{text}</a></li>
  )
}

export default function Tags({
  className = '',
  style = {},
  tags = [],
  handleClick = () => {},
}: ITags) {
  const classnames = `${className} ${wrapper}`.trim()
  const tagItems = tags.map((tag, index) => <Tag key={`tag-${index}`} className="tag-item" text={tag} handleClick={handleClick} />)

  return (
    <ul className={classnames} style={style}>
      <li className="tag-title">标签：</li>
      {tagItems}
    </ul>
  )
}
