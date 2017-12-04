import * as React from 'react'
import DefaultSvg from './defaultSvg'
import { InterfaceCommonElementProps } from 'commonTypes'

const wrapper = require('./style.css')['song-info-wrapper']

interface InterfaceProps extends InterfaceCommonElementProps {
  handleClick: any,
}

export default class SongInfoView extends React.Component {
  public static defaultProps = {
    className: '',
    style: {},
  }

  public props: InterfaceProps

  public render() {
    const { className, handleClick, style } = this.props
    const classNames = `${wrapper} ${className}`.trim()

    return (
      <div
        className={classNames}
        onClick={handleClick}
        style={style}
      >
        <div className="close" onClick={handleClick}></div>
      </div>
    )
  }
}
