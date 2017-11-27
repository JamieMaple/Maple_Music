import * as React from 'react'
const style = require('./style.css')

export default class SideBar extends React.Component {
  private static defaultProps = {
    className: '',
  }

  public props: {
    className?: string,
  }

  public render() {
    const { className } = this.props
    return (
      <div className={`${style['sidebar-wrapper']} ${className}`}>
        sidebar
      </div>
    )
  }
}
