import * as React from 'react'

const style = require('./style.css')

export default class MusicController extends React.Component {
  private static defaultProps = {
    className: '',
  }

  public props: {
    className?: string,
  }

  public render() {
    const { className } = this.props

    return (
      <div className={`${style['music-controller-wrapper']} ${className}`}></div>
    )
  }
}
