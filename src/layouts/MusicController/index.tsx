import * as React from 'react'
import {  findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { ICommonElementProps, IStateTree, IListening } from 'commonTypes'
import { listen } from 'actions'
import Portal from 'components/Portal'
import { MusicInfo, MusicPhoto } from './leftComponent'
import { PlayControlBar, AudioPlayerBar, RightController } from './middleComponent'
import Audio from '../Audio'
import SongInfoView from '../../views/SongInfo'

const style = require('./style.css')

interface IProps {
  dispatch?: any,
}

class MusicController extends React.PureComponent<ICommonElementProps & IListening & IProps , any> {
  public state = {
    isShowInfo: false,
    play: false,
    enableChange: true,
  }

  public timeoutDefault = 100

  public toggleShowInfo = () => {
    const { isShowInfo } = this.state
    this.setState((prevState: any) => ({isShowInfo: !isShowInfo}))
  }

  public togglePlay = () => {
    const { isPlaying, playing } = this.props

    this.props.dispatch(listen.toggle())
  }

  public changeTime = (time) => {
    this.props.dispatch(listen.current.change({changeTime: time}))
  }

  public next = () => {
    if (this.state.enableChange) {
      this.setState(prev => ({...prev, enableChange: false}))
      this.props.dispatch(listen.next())
      setTimeout(() => {
        this.setState(prev => ({...prev, enableChange: true}))
      }, this.timeoutDefault)
    }
  }

  public prev = () => {
    if (this.state.enableChange) {
      this.setState(prev => ({...prev, enableChange: false}))
      this.props.dispatch(listen.prev())
      setTimeout(() => {
        this.setState(prev => ({...prev, enableChange: true}))
      }, this.timeoutDefault)
    }
  }

  public changeVolume = (num) => {
    if (typeof num === 'number') {
      this.props.dispatch(listen.volume({volume: num}))
    }
  }

  public switchMode = () => {
    this.props.dispatch(listen.mode())
  }

  public render() {
    const { className = '', playing = {}, isPlaying, duration, currentTime, volume, mode } = this.props
    const classNames = `${style['music-controller-wrapper']} ${className}`.trim()
    const { isShowInfo } = this.state
    const singer = playing.ar && playing.ar.map(item => item.name).join('、')
    const song = playing.name
    const image = playing.al && playing.al.picUrl

    return (
      <div className={classNames}>
        <Audio />
        <MusicPhoto className="music-photo" image={image} onClick={this.toggleShowInfo} />
        <MusicInfo className="music-info" song={song} singer={singer} />
        {
          duration
          ? <AudioPlayerBar className="audio-bar-wrapper" duration={duration} changeTime={this.changeTime} currentTime={currentTime} />
          : null
        }
        <PlayControlBar className="music-bar-wrapper"
          prev={this.prev}
          next={this.next}
          play={isPlaying}
          togglePlay={this.togglePlay}
        />
        <RightController className="music-right-controller" changeVolume={this.changeVolume}  volume={volume} changeMode={this.switchMode} mode={mode} />
        {
          isShowInfo
          ? <Portal id="main-container">
              <SongInfoView handleClick={this.toggleShowInfo} />
            </Portal>
          : null
        }
      </div>
    )
  }
}

const mapState = (state: IStateTree): any => {
  if (state.listening) {
    return {
      currentTime: state.listening.currentTime,
      duration: state.listening.duration,
      volume: state.listening.volume,
      mode: state.listening.modes.mode,
      playing: state.listening.playing,
      isPlaying: state.listening.isPlaying,
    }
  } else {
    return {}
  }
}

export default connect(mapState)(MusicController)
