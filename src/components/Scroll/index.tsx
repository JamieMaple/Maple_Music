import * as React from 'react'

export default class Scroll extends React.PureComponent<{id: string, handleScroll?: any}, any> {
  public el: HTMLElement | null

  public handleScroll = this.handleScrollTmpl.bind(this)

  public handleScrollTmpl(e) {
    const range = 500
    if (e.target.scrollHeight < e.target.scrollTop + e.target.clientHeight + range) {
      if (typeof this.props.handleScroll === 'function') {
        this.props.handleScroll()
      }
    }
  }

  public componentWillReceiveProps(nextProps) {
    this.el = document.getElementById(this.props.id) || null
    if (this.el) {
      this.el.addEventListener('scroll', this.handleScroll)
    }
  }

  public componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener('scroll', this.handleScroll)
    }
  }

  public render() {
    return null
  }
}
