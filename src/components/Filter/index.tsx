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

type handleEachClickFunc = (tag: string) => {}

interface IFilterProps extends ICommonElementProps {
  baseUrl: string,
  filters: IFilter[],
  handleEachClick?: any,
}

interface IFilter {
  title: string,
  icon?: string,
  children: string[],
}

class SingleFilter extends React.Component<{ handleClick?, tag?, url?, selectTag?, defaultTag? }, any> {
  // public shouldComponentUpdate(nextProps) {
  //   return nextProps.selectTag === this.props.tag || this.props.tag === this.props.selectTag
  // }

  public render() {
    const { tag, handleClick, url, defaultTag, selectTag } = this.props
    const activeFilter = (match, location) => {
      if (match) {
        return true
      } else if (selectTag === tag && match) {
        return true
      } else if (url === location.pathname + '/' + defaultTag ) {
        return true
      } else {
        return false
      }
    }

    return (
      <li
        className="filter-tag"
      >
        <NavLink
          isActive={activeFilter}
          className="filter-link"
          onClick={handleClick}
          to={url}>
          {tag}
        </NavLink>
      </li>
    )
  }
}

class SingleRowFilter extends React.Component<{ subFilter: IFilter, handleEachClick, baseUrl: string, selectTag: string, defaultTag }, any> {
  public render() {
    const { subFilter, handleEachClick, baseUrl, selectTag, defaultTag } = this.props
    return (
      <li className="filter-item">
        <h3 className={`${subFilter.icon || 'ion-ios-pricetags-outline'} filter-item-title`}>{subFilter.title || '未知:'}</h3>
        <ul className="filter-item-children">
        {
          subFilter.children.map((childTag, colIndex) =>
            <SingleFilter key={childTag} defaultTag={defaultTag} selectTag={selectTag} tag={childTag} url={`${baseUrl}/${childTag}`} handleClick={handleEachClick.bind(null, childTag)} />)
        }
        </ul>
      </li>
    )
  }
}

export default class Filter extends React.Component<IFilterProps, any> {
  public state = {
    selectTag: this.props.filters[0].children ? this.props.filters[0].children[0] : '',
    defaultTag: this.props.filters[0].children ? this.props.filters[0].children[0] : '',
  }

  constructor(props) {
    super(props)
    this.handleEachClick = this.handleEachClick.bind(this)
  }

  public handleEachClick(tag) {
    const { handleEachClick = () => {} } = this.props
    this.setState(() => ({selectTag: tag}))
    handleEachClick(tag)
  }

  public render() {
    const {
      className,
      style,
      filters = [],
      baseUrl,
    } = this.props
    const classNames = `${wrapper} ${className}`.trim()
    const isIndex = (row: number) => (col: number): boolean  => row === 0 && col === 0
    const filterItems = filters.map((subFilter, index) => <SingleRowFilter key={subFilter.title} defaultTag={this.state.defaultTag} selectTag={this.state.selectTag} baseUrl={baseUrl} subFilter={subFilter} handleEachClick={this.handleEachClick} />)

    return (
      <ul className={classNames} style={style}>
        {filterItems}
      </ul>
    )
  }
}
