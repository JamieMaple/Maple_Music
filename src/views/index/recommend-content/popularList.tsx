import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Song from 'components/Song'
import Singer from 'components/Singer'

interface InterfaceData {
  songs?: object[],
  singers?: object[],
}

function PopularSongs({songs = []}: InterfaceData) {
  const songsItems = songs.map((song, index ) =>
    <Song className="song" index={index + 1} key={`song-${index}`} />)

  return (
    <div className="popular-songs">
      <TitleBar className="title" text="热门歌曲" />
      <ul className="songs-wrapper">
        {songsItems}
      </ul>
    </div>
  )
}

function PopularSingers({singers = []}: InterfaceData) {
  const singersItems = singers.map((singer, index) =>
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
  }

  public render() {
    const classNames = `popular-list-hook ${this.props.className}`.trim()
    const singers = new Array(6).fill(6)
    const songs = new Array(5).fill(0)

    return (
      <div className={classNames}>
        <PopularSongs songs={songs} />
        <PopularSingers singers={singers} />
      </div>
    )
  }
}
