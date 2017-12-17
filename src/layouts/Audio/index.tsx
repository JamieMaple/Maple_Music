import * as React from 'react'
import { connect } from 'react-redux'
import { listen, fetch } from 'actions'
import { formatPercentage } from 'utils/stateFormat'
import { IStateTree } from 'commonTypes'

class Audio extends React.Component<{dispatch?, isPlaying?, playing?, volume?}, any> {
  public audio: any
  public prevTime: number = 0

  public componentWillReceiveProps(nextProps) {
    const { isPlaying } = nextProps

    this.audio.volume = nextProps.volume

    if (this.audio.src) {
      if (isPlaying) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
  }

  public buffering = () => {
    const { buffered: { length }, duration } = this.audio

    const percent = length ? formatPercentage(this.audio.buffered.end(length - 1) / this.audio.duration) : 0

    this.props.dispatch(listen.buffered({buffered: percent}))
  }

  public timeUpdate = () => {
    const { currentTime } = this.audio
    if (currentTime - this.prevTime >= 0.7) {
      this.prevTime = currentTime
      this.props.dispatch(listen.current({currentTime}))
    }
  }

  public next = () => {
    this.props.dispatch(listen.next())
  }

  public shouldComponentUpdate(nextProps) {
    this.prevTime = 0
    if (nextProps.playing.file !== this.props.playing.file) {
      return true
    } else {
      return false
    }
  }

  public render() {
    const { playing } = this.props
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

const mapState = (state: IStateTree): any => ({
  isPlaying: state.listening && state.listening.isPlaying,
  playing: state.listening && state.listening.playing,
  volume: state.listening && state.listening.volume,
})

export default connect(mapState)(Audio)
