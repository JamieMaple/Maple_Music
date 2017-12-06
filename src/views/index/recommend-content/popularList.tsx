import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import Singer from 'components/Singer'
import { InterfaceSong, InterfaceSinger } from 'commonTypes'

interface InterfaceData {
  songs?: InterfaceSong[],
  singers?: InterfaceSinger[],
}

const sliceArr = (arr: any[], limit: number) => arr.slice(0, limit)

class PopularSongs extends React.Component {
  public props: InterfaceData

  public state = {
    limit: 5,
  }

  public render() {
    const { songs = [] } = this.props
    const { limit } = this.state
    const songsItems = sliceArr(songs, limit).map((song, index ) =>
    <Song className="song" index={index + 1} name={song.name} popularity={song.song.popularity} key={`song-${index}`} />)

    return (
      <div className="popular-songs">
        <TitleBar className="title" text="热门歌曲" />
        <ul className="songs-wrapper">
          {songsItems}
        </ul>
        <div className="more">
          <span>{songs.length >= limit ? songs.length - limit : 0 } more</span>
          <span className="icon-hook ion-chevron-down"></span>
        </div>
      </div>
    )
  }
}

class PopularSingers extends React.Component {
  public props: InterfaceData

  public state = {
    limit: 6,
  }

  public render() {
    const { singers = [] } = this.props
    const { limit } = this.state
    const singersItems = sliceArr(singers, limit).map((singer, index) =>
    <Singer className="singer" key={`singer-${index}`} />)

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

export default class PopularList extends React.Component {
  public props: {
    className?: string,
    singers?: any[],
    songs?: any[],
  }

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
