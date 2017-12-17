import * as React from 'react'
import { connect } from 'react-redux'
import Song from 'components/Song'
import { listen } from 'actions'
import { ICommonElementProps, ISong, IStateTree } from 'commonTypes'

const hoverStyle = {
  background: '#242929',
}

const activeStyle = {
  color: '#f8412d',
}

interface IProps extends ICommonElementProps {
  listeningId?: number,
  listeningIndex?: number,
  songs?: ISong[],
  dispatch?: any,
  getSong?: any,
  getSongList?: any,
}

class ListContainer extends React.PureComponent<IProps, any> {
  public state = {
    active: -1,
  }

  public handleSongClick(index) {
    this.setState(() => ({active: index}))
  }

  public render() {
    const { songs = [], className = '', style = {}, getSong, getSongList, listeningId, listeningIndex } = this.props
    const classNames = `${className} list-container`.trim()

    return (
      <div className={classNames} style={style}>
        {
          songs.map((song, index) => {
            let styles = {}
            if (this.state.active === index) {
              styles = hoverStyle
            }
            if (song.id === listeningId && index === listeningIndex) {
              styles = {...styles, ...activeStyle}
            }

            return (
              <Song
                style={styles}
                key={`song-${index}`} {...song}
                onClick={this.handleSongClick.bind(this, index)}
                onDoubleClick={() => {
                getSong(song.id, index)
              }} />
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state: IStateTree) => ({
  listeningId: state.listening.id,
  listeningIndex: state.listening.index,
})

const mapDispatch = (dispatch, { songs }: IProps): any => ({
  getSong(id, index) {
    dispatch(listen.change.playinglist({playingList: songs}))
    dispatch(listen.change.song.pending({id, index}))
  },
})

export default connect(mapState, mapDispatch)(ListContainer)
