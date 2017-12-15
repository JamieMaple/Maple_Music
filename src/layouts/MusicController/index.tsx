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

class MusicController extends React.Component<ICommonElementProps & IListening & IProps , any> {
  public state = {
    isShowInfo: false,
    play: false,
  }

  public toggleShowInfo() {
    const { isShowInfo } = this.state
    this.setState((prevState: any) => ({isShowInfo: !isShowInfo}))
  }

  public togglePlay() {
    const { isPlaying, playing } = this.props

    this.props.dispatch(listen.toggle())
  }

  public next() {
    this.props.dispatch(listen.next())
  }

  public prev() {
    this.props.dispatch(listen.prev())
  }

  public render() {
    const { className = '', playing = {}, isPlaying, duration, currentTime } = this.props
    const classNames = `${style['music-controller-wrapper']} ${className}`.trim()
    const { isShowInfo } = this.state
    const singer = playing.ar && playing.ar.map(item => item.name).join('、')
    const song = playing.name
    const image = playing.al && playing.al.picUrl

    return (
      <div className={classNames}>
        <Audio />
        <MusicPhoto image={image} onClick={this.toggleShowInfo.bind(this)} />
        <MusicInfo song={song} singer={singer} />
        {
          duration
          ? <AudioPlayerBar duration={duration} currentTime={currentTime} />
          : null
        }
        <PlayControlBar className="music-bar-wrapper"
          prev={this.prev.bind(this)}
          next={this.next.bind(this)}
          play={isPlaying}
          togglePlay={this.togglePlay.bind(this)}
        />
        <RightController className="music-right-controller" />
        {
          isShowInfo
          ? <Portal id="main-container">
              <SongInfoView handleClick={this.toggleShowInfo.bind(this)} />
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
      playing: state.listening.playing,
      isPlaying: state.listening.isPlaying,
    }
  } else {
    return {}
  }
}

export default connect(mapState)(MusicController)
