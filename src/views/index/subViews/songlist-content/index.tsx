import * as React from 'react'
import { connect } from 'react-redux'
import {
  IRouteProps,
  IStateTree,
} from 'commonTypes'
import Scroll from 'components/Scroll'
import { fetch } from 'actions'
import List from 'components/AlbumWrapper'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

interface InterfacePlayListProps extends IRouteProps {
  lists: any[],
  dispatch: any,
  handleFilterSelect: (limit: number, tag: string) => {},
  loadMore: (config: {limit, tag, offset}) => {}
}

const tags = [
  {title: '语言：', children: ['全部', '华语', '欧美', '日语', '韩语', '小语种']},
  {title: '风格：', icon: 'ion-ios-flower', children: ['古风', '轻音乐', '古典', '乡村', '摇滚', '流行', '爵士', '朋克', '蓝调', '金属', '英伦']},
  {title: '场景：', icon: 'ion-ios-time', children: ['夜晚', '学习', '工作', '下午茶', '旅行', '酒吧', '运动', '散步']},
  {title: '情感：', icon: 'ion-sad-outline', children: ['怀旧', '清新', '浪漫', '思念', '治愈', '孤独', '放松', '安静']},
]

function getCat(pathname: string, url: string): string {
  return pathname.replace(new RegExp(`^${url}/?`, 'g'), '') || tags[0].children[0]
}

const limitInit = 30

class SongListView extends React.Component<InterfacePlayListProps, any> {
  public state = {
    limit: limitInit,
    offset: 0,
  }

  public componentDidMount() {
    const { limit } = this.state
    const { location: { pathname }, match: { url } } = this.props
    const selectTag = getCat(pathname, url)

    this.props.handleFilterSelect(limit, selectTag)
  }

  public switchFilter(cat) {
    const { limit } = this.state
    const { handleFilterSelect } = this.props
    handleFilterSelect(limit, cat)
  }

  public handleScrollLoad() {
    // this.setState((prev) => {
    //   this.props.loadMore({limit: prev.limit * 2, tag: this.getCat(), offset: prev.limit + prev.offset})
    // })
    console.log('scroll')
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
        <Scroll id="view-hook" handleScroll={this.handleScrollLoad.bind(this)} />
        <Filter className="filters-cotainer" handleEachClick={this.switchFilter.bind(this)} baseUrl={url} filters={tags} />
        <ul className="albums-wrapper">
          {listItems}
        </ul>
      </div>
    )
  }
}

const dataType = 'playList'

const mapState = (state, ownProps: IRouteProps) => {
  const { location: { pathname }, match: { url } } = ownProps
  const cat = encodeURIComponent(getCat(pathname, url))
  return {
    lists: state.lists[cat],
  }
}
const mapDispatch = (dispatch): any => {
  return {
    handleFilterSelect(limit = 30, cat) {
      dispatch(fetch.lists.pending({limit, cat}))
    },
    loadMore({limit = 30, cat, offset}) {
      // dispatch(fetch.lists.pending({
      //   ...fetchConfig,
      //   params: {
      //     limit,
      //     cat: tag,
      //     offset,
      //   },
      // }, dataType))
    },
  }
}

export default connect(mapState, mapDispatch)(SongListView)
