import * as React from 'react'
import { InterfaceCommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['filter']

interface InterfaceFilter extends InterfaceCommonElementProps {
  filters?: string[],
  filterTitle?: string,
  icon?: string,
  handleEachClick?: any,
}

interface InterfaceTag extends InterfaceCommonElementProps {
  filter: string,
  icon?: string,
  handleChoosen?: any,
}

function FilterTag({
  className = '',
  style = {},
  filter = '',
  handleChoosen = () => 0,
  icon = '',
}: InterfaceTag) {
  const classNames = `filter-tag ${icon} ${className}`
  return (
    <li className={classNames}><a onClick={handleChoosen} href="javascript:;">{filter}</a></li>
  )
}

export default class Filter extends React.Component<InterfaceFilter, any> {
  public state = {
    choosen: 0,
  }

  public switchTag(index) {
    const { handleEachClick } = this.props
    this.setState((preState: any) => {
      if (preState.choosen !== index) {
        if (handleEachClick !== undefined) {
          try {
            handleEachClick(index)
          } catch (e) {
            throw TypeError('handleEachClick must be function')
          }
        }
        return {choosen: index}
      }
    })
  }

  public render() {
    const { className, style, filters = [], filterTitle = '选取:', icon } = this.props
    const { choosen } = this.state

    const classNames = `${wrapper} ${className}`.trim()
    const filtersLi = filters.map((filter, index) =>
    <FilterTag
      key={`filter-${index}`}
      className={index === choosen ? 'active' : ''}
      handleChoosen={this.switchTag.bind(this, index)}
      filter={filter}
      icon={icon}
    />)

    return (
      <ul className={classNames} style={style}>
        <li className="filter-title">{filterTitle}</li>
        {filtersLi}
      </ul>
    )
  }
}
