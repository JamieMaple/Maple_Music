import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import Singer from 'components/Singer'
import { InterfaceSong, InterfaceSinger, InterfaceCommonElementProps } from 'commonTypes'

interface InterfaceData extends InterfaceCommonElementProps {
  songs?: InterfaceSong[],
  singers?: InterfaceSinger[],
}

const sliceArr = (arr: any[], limit: number) => arr.slice(0, limit)

class PopularSongs extends React.Component<InterfaceData, any> {
  public state = {
    limit: 5,
    steps: 5,
  }

  public handleMore(upToLimit) {
    this.setState(prev => ({limit: prev.limit + prev.steps}))
  }

  public render() {
    const { songs = [] } = this.props
    const { limit, steps } = this.state
    const songsItems = sliceArr(songs, limit).map((song, index ) =>
    <Song className="song" index={index + 1} name={song.name} popularity={song.song.playedNum} key={`song-${index}`} />)

    return (
      <div className="popular-songs">
        <TitleBar className="title" text="热门歌曲" />
        <ul className="songs-wrapper">
          {songsItems}
        </ul>
        {
          songs.length > limit
          ? <div onClick={this.handleMore.bind(this)} className="more">
              <span>{songs.length > limit ? steps : 0 } more</span>
              <span className="icon-hook ion-chevron-down"></span>
            </div>
          : <div className="more no-more">
              <span className="icon-hook ion-android-close"></span>
              <span>没有更多了</span>
            </div>
        }
      </div>
    )
  }
}

class PopularSingers extends React.Component<InterfaceData, any> {
  public state = {
    limit: 6,
  }

  public render() {
    const { singers = [] } = this.props
    const { limit } = this.state
    const singersItems = sliceArr(singers, limit).map((singer, index) =>
    <Singer className="singer" name={singer.name} picUrl={singer.picUrl} key={`singer-${index}`} />)

    return (
      <div className="popular-singers">
        <TitleBar className="title" text="热门歌手" />
        <ul className="singers-wrapper">
          {singersItems}
        </ul>
      </div>
    )
  }
}

export default class PopularList extends React.Component<InterfaceData, any> {
  public render() {
    const classNames = `popular-list-hook ${this.props.className}`.trim()
    const { songs, singers } = this.props

    return (
      <div className={classNames}>
        <PopularSongs songs={songs} />
        <PopularSingers singers={singers} />
      </div>
    )
  }
}
