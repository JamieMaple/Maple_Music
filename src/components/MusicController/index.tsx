import * as React from 'react'
import { InterfaceMusicInfo } from 'commonTypes'

const style = require('./style.css')

function MusicInfo({song = '未知音乐', singer = '未知歌手'}: InterfaceMusicInfo) {
  return (
    <div className="music-info">
      <h1 className="song">{song}</h1>
      <h2 className="singer">{singer}</h2>
    </div>
  )
}

function MusicPhoto() {
  return <img className="music-photo" src="" alt=""/>
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

export default class MusicController extends React.Component {
  private static defaultProps = {
    className: '',
  }

  public props: {
    className?: string,
  }

  public render() {
    const { className } = this.props

    return (
      <div className={`${style['music-controller-wrapper']} ${className}`}>
        <div className="left-wrapper">
          <MusicPhoto />
          <MusicInfo />
        </div>
        <PlayBar />
        <div className="right-wrapper">

        </div>
      </div>
    )
  }
}
