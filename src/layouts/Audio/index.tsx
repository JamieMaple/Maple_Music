import * as React from 'react'
import { connect } from 'react-redux'
import { listen } from 'actions'
import { formatPercentage } from 'utils/stateFormat'
import { IStateTree } from 'commonTypes'

class Audio extends React.Component<any, any> {
  public audio: any

  public componentWillReceiveProps(nextProps) {
    const { isPlaying } = nextProps

    if (this.audio.src) {
      if (isPlaying) {
        this.audio.play()
      } else {
        this.audio.pause()
      }
    }
  }

  public buffering() {
    const { buffered: { length }, duration } = this.audio

    const percent = length ? formatPercentage(this.audio.buffered.end(length - 1) / this.audio.duration) : 0

    this.props.dispatch(listen.buffered({buffered: percent}))
  }

  public timeUpdate() {
    const { currentTime } = this.audio
    if (currentTime - this.props.currentTime >= 0.7) {
      this.props.dispatch(listen.current({currentTime}))
    }
  }

  public prievious() {

  }

  public next() {

  }

  public render() {
    const { playing } = this.props

    return <audio
      id="audio"
      className="audio-hook"
      ref={audio => {this.audio = audio}}
      onProgress={this.buffering.bind(this)}
      onTimeUpdate={this.timeUpdate.bind(this)}
      src={playing.file && playing.file.url}
      autoPlay={playing.file && playing.file.url ? true : false}
    />
  }
}

const mapState = (state: IStateTree): any => ({
  isPlaying: state.listening && state.listening.isPlaying,
  playing: state.listening && state.listening.playing,
  currentTime: state.listening && state.listening.currentTime,
})

export default connect(mapState)(Audio)
