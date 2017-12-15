import * as React from 'react'
import { connect } from 'react-redux'
import { IRouteProps, IStateTree } from 'commonTypes'
import { fetch } from 'actions'
import Loader from 'components/Loader'
import Scroll from 'components/Scroll'
import ListsContainer from './listsContainer'
import Filter from 'components/Filter'

const wrapper = require('./style.css')['song-list-wrapper']

interface IPlayListProps extends IRouteProps {
  isLoading: boolean,
  lists: any[],
  dispatch: any,
  loadMore: (params: {limit?: any, cat?: any, offset?: any}) => {},
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

class SongListView extends React.Component<IPlayListProps, any> {
  public state = {
    limit: 30,
    flag: 0,
    scrollLimit: 2,
  }

  public componentWillReceiveProps(nextProps: IPlayListProps) {
    if (nextProps.location !== this.props.location) {
      this.setState(() => ({flag: 0}))
    }
  }

  public componentDidMount() {
    const { limit } = this.state
    const { location: { pathname }, match: { url } } = this.props
    const cat = getCat(pathname, url)

    this.props.loadMore({limit, cat})
  }

  public switchFilter(cat) {
    const { limit } = this.state
    const { loadMore } = this.props
    loadMore({limit, cat})
  }

  public handleScroll() {
    if (!this.props.isLoading && this.state.flag < this.state.scrollLimit) {
      this.setState((prev) => ({flag: prev.flag + 1}))
      this.props.loadMore({limit: 30, cat: getCat(this.props.location.pathname, this.props.match.url), offset: 30 * this.state.flag })
    }
  }

  public render() {
    const { match: { url, params: { cat } }, location: { pathname }, isLoading } = this.props
    const baseUrl = url.replace(RegExp(`/${cat}$`, 'g'), '')

    return (
      <div className={wrapper}>
        <Filter className="filters-cotainer" handleEachClick={this.switchFilter.bind(this)} baseUrl={baseUrl} filters={tags} />
        <Scroll key="scroll" id="view-hook" handleScroll={this.handleScroll.bind(this)} />
        <ListsContainer className="albums-wrapper" lists={this.props.lists} />
        { isLoading ? <Loader /> : null }
      </div>
    )
  }
}

const mapState = (state: IStateTree, ownProps: IRouteProps) => {
  const { location: { pathname }, match: { url } } = ownProps
  const cat = encodeURIComponent(getCat(pathname, url))
  return {
    isLoading: state.lists.isLoading,
    lists: state.lists[cat] || [],
  }
}
const mapDispatch = (dispatch): any => {
  return {
    loadMore({limit = 30, cat, offset = 0}) {
      dispatch(fetch.lists.pending({limit, cat, offset}))
    },
  }
}

export default connect(mapState, mapDispatch)(SongListView)
