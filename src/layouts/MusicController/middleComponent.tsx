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

class SoundController extends React.Component<{ volume }, any> {
  public state = {
    isShowSoundIcon: true,
  }

  public toggleShowSoundIcon = () => {
    this.setState(prev => ({isShowSoundIcon: !prev.isShowSoundIcon}))
  }

  public render() {
    const { isShowSoundIcon } = this.state
    const { volume } = this.props

    return (
      <div className="sound-control">
        {
          false
          ? <span onClick={this.toggleShowSoundIcon} className="sound-icon ion-volume-medium"></span>
          : <div onMouseLeave={this.toggleShowSoundIcon} className="volume-bar-wrapper">
              <div onClick={(e: any) => {Object.keys(e).forEach(item => {console.log(item , ' : ', e[item])})}} className="volume-bar">
                <div style={{transition: 'transform 0.3s linear', transform: `translate3d(${(1 - volume) * 100}%, 0, 0)`}} className="volume-fill"></div>
              </div>
            </div>
        }
      </div>
    )
  }
}

export function RightController({
  className,
  volume = 0,
}: ICommonElementProps & { volume } ) {
  return (
    <div className={`${className}`.trim()}>
      <SoundController volume={volume} />
      <span className="play-mode ion-shuffle"></span>
      <span className="playing-list ion-android-list"></span>
    </div>
  )
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
