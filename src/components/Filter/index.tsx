import * as React from 'react'
import { InterfaceCommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['filter']

interface InterfaceFilter extends InterfaceCommonElementProps {
  tags: string[],
  handleEachClick?: any,
}

interface InterfaceTag extends InterfaceCommonElementProps {
  tag: string,
  handleChoosen?: any,
}

function FilterTag({
  className = '',
  style = {},
  tag = '',
  handleChoosen = () => 0,
}: InterfaceTag) {
  const classNames = `filter-tag ion-ios-pricetag-outline ${className}`
  return (
    <li className={classNames}><a onClick={handleChoosen} href="javascript:;">{tag}</a></li>
  )
}

export default class Filter extends React.Component {
  public props: InterfaceFilter

  public state = {
    choosen: 0,
  }

  public switchTag(index) {
    this.setState((preState: any) => {
      if (preState.choosen !== index) {
        return {choosen: index}
      }
    })
  }

  public componentDidUpdate() {
    const { handleEachClick } = this.props
    if (handleEachClick !== undefined) {
      if (typeof handleEachClick === 'function') {
        handleEachClick()
      } else {
        throw TypeError('handleEachClick must be function')
      }
    }
  }

  public render() {
    const { className, style, tags } = this.props
    const { choosen } = this.state

    const classNames = `${wrapper} ${className}`.trim()
    const tagsLi = tags.map((tag, index) =>
    <FilterTag
      key={`tag-${index}`}
      className={index === choosen ? 'active' : ''}
      handleChoosen={this.switchTag.bind(this, index)}
      tag={tag}
    />)

    return (
      <ul className={classNames} style={style}>
        <li className="filter-title">选取:</li>
        {tagsLi}
      </ul>
    )
  }
}
