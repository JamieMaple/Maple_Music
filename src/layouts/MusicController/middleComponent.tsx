import * as React from 'react'
import { formatPercentage } from 'utils/stateFormat'
import { ICommonElementProps } from 'commonTypes'

export function PlayControlBar({
  className = "",
  style = {},
  play = false,
  togglePlay,
  next = () => {},
  prev = () => {},
}: ICommonElementProps & {play?: boolean, togglePlay?: any, next?: any, prev?: any}) {
  return (
    <div className={className.trim()} style={style}>
      <span onClick={prev} className="ion-ios-skipbackward icon-hook"></span>
      <div onClick={togglePlay ? togglePlay : () => {}} className={`${play ? 'ion-pause' : 'ion-play play'} play-button`}></div>
      <span onClick={next} className="ion-ios-skipforward icon-hook"></span>
    </div>
  )
}

export class RightController extends React.Component<ICommonElementProps, any> {
  public render() {
    const { className } = this.props
    return (
      <div className={`${className}`.trim()}>
        <span className="volume ion-volume-medium"></span>
        <span className="play-mode ion-shuffle"></span>
        <span className="playing-list ion-android-list"></span>
      </div>
    )
  }
}

export function AudioPlayerBar({
  className = '',
  style = {},
  duration,
  currentTime,
}: ICommonElementProps & { duration, currentTime }) {
  const classNames = `audio-hook ${className}`.trim()
  const percentage = duration ? formatPercentage(currentTime / duration) : 0
  const progressStyle = {transition: 'transform 0.8s linear', transform: `translate3d(${percentage - 100}%, 0, 0)` }

  return (
    <div className={classNames} style={style}>
      <div style={progressStyle} className="progress"><span className="progress-button"></span></div>
    </div>
  )
}
