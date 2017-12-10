import * as React from 'react'
import { IMusicInfo, ICommonElementProps } from 'commonTypes'
import Portal from 'components/Portal'
import SongInfoView from '../../SongInfo'

const style = require('./style.css')
const defaultSong = require('./default-song.svg')

function MusicInfo({
  song = '未知音乐',
  singer = '未知歌手',
}: IMusicInfo) {
  return (
    <div className="music-info">
      <h1 className="song">{song}</h1>
      <h2 className="singer">{singer}</h2>
    </div>
  )
}

function MusicPhoto({
  image = defaultSong,
  handleClick,
}: any) {
  return <img onClick={handleClick} className="music-photo" src={image} alt=""/>
}

function PlayBar() {
  return (
    <div className="music-bar-wrapper">
      <span className="ion-ios-skipbackward icon-hook"></span>
      <div className="ion-pause play-button"></div>
      <span className="ion-ios-skipforward icon-hook"></span>
    </div>
  )
}

export default class MusicController extends React.Component<ICommonElementProps, any> {
  private static defaultProps = {
    className: '',
  }

  public state = {
    isShowInfo: false,
  }

  public toggleShowInfo() {
    const { isShowInfo } = this.state
    this.setState((prevState: any) => ({isShowInfo: !isShowInfo}))
  }

  public render() {
    const { className } = this.props
    const { isShowInfo } = this.state

    return (
      <div className={`${style['music-controller-wrapper']} ${className}`}>
        <div className="left-wrapper">
          <MusicPhoto handleClick={this.toggleShowInfo.bind(this)} />
          <MusicInfo />
        </div>
        <PlayBar />
        <div className="right-wrapper">
        </div>
        {
          isShowInfo
          ? <Portal>
              <SongInfoView handleClick={this.toggleShowInfo.bind(this)} />
            </Portal>
          : null
        }
      </div>
    )
  }
}
