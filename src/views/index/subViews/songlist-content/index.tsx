import * as React from 'react'
import { connect } from 'react-redux'
import {
  IRouteProps,
  IStateTree,
} from 'commonTypes'
import { fetch } from 'actions'
import { playListUrl } from 'API'
import List from 'components/AlbumContainer'
import Filter from 'components/Filter'
import Scroll from 'components/Scroll'

const wrapper = require('./style.css')['song-list-wrapper']

interface InterfacePlayListProps extends IRouteProps {
  lists: any[],
  dispatch: any,
  handleFilterSelect: (limit: number, tag: string) => {},
}

const tags = [
  {title: '语言：', children: ['全部', '华语', '欧美', '日语', '韩语', '小语种']},
  {title: '风格：', icon: 'ion-ios-flower', children: ['古风', '轻音乐', '古典', '乡村', '摇滚', '流行', '爵士', '朋克', '蓝调', '金属', '英伦']},
  {title: '场景：', icon: 'ion-ios-time', children: ['夜晚', '学习', '工作', '下午茶', '旅行', '酒吧', '运动', '散步']},
  {title: '情感：', icon: 'ion-sad-outline', children: ['怀旧', '清新', '浪漫', '思念', '治愈', '孤独', '放松', '安静']},
]

const limitInit = 30

class SongListView extends React.Component<InterfacePlayListProps, any> {
  public state = {
    limit: limitInit,
    offset: 0,
  }

  public componentDidMount() {
    const { limit } = this.state
    const { location: { pathname }, match: { url } } = this.props
    const selectTag = pathname.replace(new RegExp(`^${url}/?`, 'g'), '') || tags[0].children[0]

    this.props.handleFilterSelect(limit, selectTag)
  }

  public switchFilter(tag) {
    const { limit } = this.state
    const { handleFilterSelect } = this.props
    handleFilterSelect(limit, tag)
  }

  public render() {
    const { lists = [], match: { url } } = this.props
    const { limit } = this.state
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
        <Filter className="filters-cotainer" handleEachClick={this.switchFilter.bind(this)} baseUrl={url} filters={tags} />
        <ul className="albums-wrapper">
          {listItems}
        </ul>
      </div>
    )
  }
}

const dataType = 'playList'

const mapState = (state) => {
  return {
    lists: state.lists[dataType],
  }
}
const mapDispatch = (dispatch, ownProps: IRouteProps) => {
  const fetchConfig = {
    method: 'GET',
    url: playListUrl,
  }
  return {
    handleFilterSelect(limit = 30, tag) {
      dispatch(fetch.lists.pending({
        ...fetchConfig,
        params: {
          limit,
          cat: tag,
        },
      }, dataType))
    },
  }
}

export default connect(mapState, mapDispatch)(SongListView)
