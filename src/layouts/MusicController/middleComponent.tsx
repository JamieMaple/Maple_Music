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

class SoundController extends React.PureComponent<{ volume, changeVolume }, any> {
  public state = {
    isShowSoundIcon: true,
  }

  public changeVolume = (e) => {
    if (e.nativeEvent) {
      const volume = Math.min(1, e.nativeEvent.offsetX / e.currentTarget.offsetWidth)
      this.props.changeVolume(Math.max(0, volume))
    }
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
          isShowSoundIcon
          ? <span onClick={this.toggleShowSoundIcon} className="sound-icon ion-volume-medium"></span>
          : <div onMouseLeave={this.toggleShowSoundIcon} className="volume-bar-wrapper">
              <div onClick={this.changeVolume} className="volume-bar">
                <svg className="volume-fill">
                  <line x1="" x2={volume * 100 + '%'} y1="2" y2="2" stroke="red" strokeWidth="4"/>
                </svg>
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
  changeVolume,
  changeMode,
  mode = 0,
}: ICommonElementProps & { volume, changeVolume, changeMode, mode } ) {
  return (
    <div className={`${className}`.trim()}>
      <SoundController volume={volume} changeVolume={changeVolume} />
      <span
        onClick={changeMode}
        className={`play-mode ${mode ? mode === 2 ? 'ion-ios-shuffle' : 'ion-ios-reload' : 'ion-ios-loop-strong'}`.trim()}
      ></span>
      <span className="playing-list ion-android-list"></span>
    </div>
  )
}

export function AudioPlayerBar({
  className = '',
  style = {},
  duration,
  currentTime,
  changeTime: changeTimeTmpl,
}: ICommonElementProps & { duration, currentTime, changeTime }) {
  const classNames = `audio-hook ${className}`.trim()
  const percentage = duration ? formatPercentage(currentTime / duration) : 0
  const progressStyle = {
    transition: 'transform 0.5s linear',
    transform: `translate3d(${percentage - 100}%, 0, 0)`,
  }

  const changeTime = (e) => {
    if (e.nativeEvent.layerX >= 0) {
      const time = Math.round(e.nativeEvent.layerX / e.target.offsetWidth * duration)
      changeTimeTmpl(time)
    }
  }

  return (
    <div className={classNames} style={style} onClick={changeTime}>
      <div style={progressStyle} className="progress"><span className="progress-button"></span></div>
    </div>
  )
}
