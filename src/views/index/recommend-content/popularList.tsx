import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import Singer from 'components/Singer'
import { InterfaceSong, InterfaceSinger } from 'commonTypes'

interface InterfaceData {
  songs?: InterfaceSong[],
  singers?: InterfaceSinger[],
}

function PopularSongs({songs = []}: InterfaceData) {
  const songsItems = songs.slice(0, 5).map((song, index ) =>
    <Song className="song" name={song.name} index={index + 1} key={`song-${index}`} />)

  return (
    <div className="popular-songs">
      <TitleBar className="title" text="热门歌曲" />
      <ul className="songs-wrapper">
        {songsItems}
      </ul>
      <div className="more">
        <span>5 more</span>
        <span className="icon-hook ion-chevron-down"></span>
      </div>
    </div>
  )
}

function PopularSingers({singers = []}: InterfaceData) {
  const singersItems = singers.slice(0, 6).map((singer, index) =>
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
