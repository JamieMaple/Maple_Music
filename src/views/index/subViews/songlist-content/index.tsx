import * as React from 'react'
import { connect } from 'react-redux'
import {
  ICommonElementProps,
  stateTreeTypes,
} from 'commonTypes'
import { fetchLists } from 'actions/creators'
import { playListUrl } from 'API'
import List from 'components/AlbumContainer'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

interface InterfacePlayListProps {
  lists: any[],
  dispatch: any,
  handleFilterSelect: (limit: number, tag: string) => {},
}

class SongListView extends React.Component<any, any> {
  public props: InterfacePlayListProps

  public state = {
    tags: [
      {title: '语言：', children: ['全部', '华语', '欧美', '日语', '韩语', '小语种']},
      {title: '风格：', icon: 'ion-ios-flower', children: ['古风', '轻音乐', '古典', '乡村', '摇滚', '流行', '爵士', '朋克', '蓝调', '金属', '英伦']},
    ],
    limit: 30,
    offset: 0,
  }

  public componentDidMount() {
    const { tags, limit } = this.state
    this.props.handleFilterSelect(limit, tags[0][0])
  }

  public switchFilter(tag) {
    const { limit } = this.state
    this.props.handleFilterSelect(limit, tag)
  }

  public render() {
    const { lists = [] } = this.props
    const { tags = [], limit } = this.state
    const listItems = lists.map((list, index) =>
      <List
        key={`album-${index}`}
        className="song-list-item"
        name={list.name}
        picUrl={list.coverImgUrl}
        url={`/playList/${list.id}`}
        singer={list.creator && list.creator.nickname}
        playNum={list.playCount}
      />)

    return (
      <div className={wrapper}>
        <Filter className="filters-cotainer" handleEachClick={this.switchFilter.bind(this)} filters={tags} />
        <ul className="albums-wrapper">
          {listItems}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    lists: state.lists[stateTreeTypes.lists.playList],
  }
}
const mapDispatch = (dispatch) => {
  const fetchConfig = {
    method: 'GET',
    url: playListUrl,
  }
  return {
    handleFilterSelect(limit = 30, tag) {
      dispatch(fetchLists({
        ...fetchConfig,
        params: {
          limit,
          cat: tag,
        },
      }, stateTreeTypes.lists.playList))
    },
  }
}

export default connect(mapState, mapDispatch)(SongListView)
