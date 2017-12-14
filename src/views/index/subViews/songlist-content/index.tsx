import * as React from 'react'
import { connect } from 'react-redux'
import { IRouteProps, IStateTree } from 'commonTypes'
import Scroll from 'components/Scroll'
import { fetch } from 'actions'
import List from 'components/AlbumWrapper'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

interface IPlayListProps extends IRouteProps {
  lists: any[],
  dispatch: any,
  handleFilterSelect: (limit: number, cat: string) => {},
  loadMore: (config: {limit, cat, offset}) => {}
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
// 3 次后分页
const scrollLimit = 3

class SongListView extends React.Component<IPlayListProps, any> {
  public state = {
    limit: limitInit,
    flag: 0,
    isLoading: false,
    loadingFail: false,
  }

  public componentDidMount() {
    const { limit } = this.state
    const { location: { pathname }, match: { url } } = this.props
    const selectTag = getCat(pathname, url)

    this.props.handleFilterSelect(limit, selectTag)
    this.setState(prev => ({...prev, flag: prev.flag + 1, isLoading: true}))
  }

  public componentWillReceiveProps(nextProps: IPlayListProps) {
    if (nextProps.lists && nextProps.lists.length > 0) {
      this.setState(prev => ({...prev, isLoading: false}))
    } else {
      this.setState(prev => ({...prev, isLoading: true}))
    }
    // reset flag if path changes
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState(prev => ({...prev, flag: 0}))
    }
  }

  public switchFilter(cat) {
    const { limit } = this.state
    const { handleFilterSelect } = this.props
    handleFilterSelect(limit, cat)
  }

  public handleScrollLoad() {
    const { location: { pathname }, match: { url } } = this.props
    if (!this.state.isLoading && this.state.flag < scrollLimit ) {
      this.props.loadMore({limit: this.state.limit, cat: getCat(pathname, url), offset: this.state.limit * this.state.flag})
      this.setState((prev) => ({...prev, isLoading: true, flag: prev.flag + 1}))
    }
  }

  public render() {
    const { lists, match: { url, params: { cat } } } = this.props
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
    const baseUrl = url.replace(RegExp(`/${cat}$`, 'g'), '')

    return (
      <div className={wrapper}>
        <Scroll id="view-hook" handleScroll={this.handleScrollLoad.bind(this)} />
        <Filter className="filters-cotainer" handleEachClick={this.switchFilter.bind(this)} baseUrl={baseUrl} filters={tags} />
        <ul key={`${url}`} className="albums-wrapper">
          {listItems}
        </ul>
      </div>
    )
  }
}

const mapState = (state, ownProps: IRouteProps) => {
  const { location: { pathname }, match: { url } } = ownProps
  const cat = encodeURIComponent(getCat(pathname, url))
  return {
    lists: state.lists[cat] || [],
  }
}
const mapDispatch = (dispatch): any => {
  return {
    handleFilterSelect(limit = 30, cat) {
      dispatch(fetch.lists.pending({limit, cat}))
    },
    loadMore(params: {limit, cat, offset}) {
      dispatch(fetch.lists.pending(params))
    },
  }
}

export default connect(mapState, mapDispatch)(SongListView)
