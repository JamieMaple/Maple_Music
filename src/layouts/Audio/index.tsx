import * as React from 'react'
import { connect } from 'react-redux'
import { listen, fetch } from 'actions'
import { formatPercentage } from 'utils/stateFormat'
import { IStateTree } from 'commonTypes'

interface IProps {
  dispatch?: any,
  isPlaying?: boolean,
  playing?: any,
  volume?: number,
  changeTime?: number,
  isLoop?: boolean
}

class Audio extends React.Component<IProps, any> {
  public audio: any
  public prevTime: number = 0

  public componentWillReceiveProps(nextProps: IProps) {
    this.prevTime = 0
    const { isPlaying } = nextProps

    this.audio.volume = nextProps.volume

    if (this.audio.src) {
      if (isPlaying) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
    if (nextProps.changeTime) {
      this.audio.currentTime = nextProps.changeTime
      this.props.dispatch(listen.current.change({changeTime: 0}))
    }
  }

  public buffering = () => {
    const { buffered: { length }, duration } = this.audio

    const percent = length ? formatPercentage(this.audio.buffered.end(length - 1) / this.audio.duration) : 0

    this.props.dispatch(listen.buffered({buffered: percent}))
  }

  public timeUpdate = () => {
    const { currentTime, duration } = this.audio

    if (currentTime - this.prevTime >= 0.7) {
      this.prevTime = currentTime
      this.props.dispatch(listen.current.get({currentTime}))
    }
  }

  public next = () => {
    if (this.props.isLoop) {
      this.prevTime = 0
      this.audio.currentTime = 0
      this.audio.play()
    } else {
      this.props.dispatch(listen.next())
    }
  }

  public shouldComponentUpdate(nextProps) {
    if (nextProps.playing.file !== this.props.playing.file) {
      return true
    } else {
      return false
    }
  }

  public render() {
    const { playing, isLoop } = this.props
    console.log('audio rendered!')

    return <audio
      id="audio"
      className="audio-hook"
      onEnded={this.next}
      ref={audio => {this.audio = audio}}
      onProgress={this.buffering}
      onTimeUpdate={this.timeUpdate}
      src={playing.file && playing.file.url}
      autoPlay={playing.file && playing.file.url ? true : false}
    />
  }
}

const mapState = (state: IStateTree): any => {
  if (state.listening) {
    return {
      isPlaying: state.listening.isPlaying,
      playing: state.listening.playing,
      volume: state.listening.volume,
      changeTime: state.listening.changeTime,
      isLoop: state.listening.modes.mode === state.listening.modes.loop,
    }
  } else {
    return {}
  }
}

export default connect(mapState)(Audio)
