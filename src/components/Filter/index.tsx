import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['filter']

/*
** Structure of filters prop
** @param {filters} render filters' name etc
** {
**   [
**      title: string,
**      icon: string,
**      children: string[],
**    ],
** }
*/

interface IFilterProps extends ICommonElementProps {
  filters?: IFilter[],
  handleEachClick?: any,
}

interface IFilter {
  title: string,
  icon?: string,
  children: string[],
}

export default class Filter extends React.Component<IFilterProps, any> {
  public state = {
    filterRowIndex: 0,
    filterColIndex: 0,
  }

  public switchTag(row, col) {
    const { handleEachClick, filters = [] } = this.props
    this.setState((preState: any) => {
      if (preState.filterRowIndex !== row || preState.filterColIndex !== col) {
        if (handleEachClick !== undefined) {
          try {
            handleEachClick(filters[row].children[col])
          } catch (e) {
            throw TypeError('handleEachClick must be function')
          }
        }
        return {filterRowIndex: row, filterColIndex: col}
      }
    })
  }

  public render() {
    const { className, style, filters = [] } = this.props
    const { filterRowIndex, filterColIndex } = this.state
    const classNames = `${wrapper} ${className}`.trim()
    const filterItems = filters.map((subFilter, rowIndex) =>
      <li key={`filter-${rowIndex}`} className="filter-item">
        <h3 className={`${subFilter.icon || 'ion-ios-pricetags-outline'} filter-item-title`}>{subFilter.title || '未知:'}</h3>
        <ul className="filter-item-children">
        {
          subFilter.children.map((child, colIndex) =>
          <li
            key={`subFilter-${colIndex}`}
            className={`filter-tag ${filterRowIndex === rowIndex && filterColIndex === colIndex ? 'active' : ''}`.trim()}
          ><a onClick={this.switchTag.bind(this, rowIndex, colIndex)} href="javascript:;">{child}</a></li>)
        }
        </ul>
      </li>)

    return (
      <ul className={classNames} style={style}>{filterItems}</ul>
    )
  }
}
