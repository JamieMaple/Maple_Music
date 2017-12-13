import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

interface IProps extends ICommonElementProps {
  handleScroll?: (e, ...args) => {},
}

export default class Scroll extends React.Component<IProps, any> {
  public handleScroll(e) {
    console.log(1)
    // if (typeof this.props.handleScroll === 'function') {
    //   this.props.handleScroll(e)
    // }
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  public render() {
    const { className, style, children } = this.props
    return (
      <div className={`${className}`.trim()} style={style}>{children}</div>
    )
  }
}
