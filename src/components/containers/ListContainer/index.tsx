import * as React from 'react'
import { connect } from 'react-redux'
import Song from 'components/Song'
import { fetch, listen } from 'actions'
import { ICommonElementProps, ISong } from 'commonTypes'

const hoverStyle = {
  background: '#242929',
}

interface IProps extends ICommonElementProps {
  songs?: ISong[],
  dispatch?: any,
  getSong?: any,
  getSongList?: any,
}

class ListContainer extends React.Component<IProps, any> {
  public state = {
    active: -1,
  }

  public handleSongClick(index) {
    this.setState(() => ({active: index}))
  }

  public render() {
    const { songs = [], className = '', style = {}, getSong, getSongList} = this.props
    const classNames = `${className} list-container`.trim()
    return (
      <div className={classNames} style={style}>
        {songs.map((song, index) => <Song style={this.state.active === index ? hoverStyle : {}} key={`song-${index}`} {...song} onClick={this.handleSongClick.bind(this, index)} onDoubleClick={getSong.bind(this, song.id, song.index)} />)}
      </div>
    )
  }
}

const mapState = () => ({})

const mapDispatch = (dispatch, ownProps): any => ({
  getSong(id, index) {
    console.log(ownProps)
    // change play
    dispatch(listen.play({id, index}))
    // !!attention song no s!!
    dispatch(fetch.song.pending({id}))
  },
  getSongList() {
    // dispatch()
  },
})

export default connect(mapState, mapDispatch)(ListContainer)
