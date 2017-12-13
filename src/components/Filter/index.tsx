import * as React from 'react'
import { ICommonElementProps, ILocation, IMatch } from 'commonTypes'
import { NavLink } from 'react-router-dom'

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
  baseUrl: string,
  filters?: IFilter[],
  handleEachClick?: any,
}

interface IFilter {
  title: string,
  icon?: string,
  children: string[],
}

export default class Filter extends React.Component<IFilterProps, any> {
  public ifIndex(row: number, col: number): boolean {
    return row === 0 && col === 0
  }

  public render() {
    const { className, style, filters = [], baseUrl, handleEachClick } = this.props
    const classNames = `${wrapper} ${className}`.trim()
    const filterItems = filters.map((subFilter, rowIndex) =>
      <li key={`filter-${rowIndex}`} className="filter-item">
        <h3 className={`${subFilter.icon || 'ion-ios-pricetags-outline'} filter-item-title`}>{subFilter.title || '未知:'}</h3>
        <ul className="filter-item-children">
        {
          subFilter.children.map((childTag, colIndex) =>
          <li
            key={`subFilter-${colIndex}`}
            className="filter-tag"
          >
            <NavLink
              exact
              className="filter-link"
              onClick={handleEachClick.bind(null, childTag)}
              to={`${baseUrl}${this.ifIndex(rowIndex, colIndex) ? '' : '/' + childTag}`}>
              {childTag}
            </NavLink>
          </li>)
        }
        </ul>
      </li>)

    return (
      <ul className={classNames} style={style}>{filterItems}</ul>
    )
  }
}
