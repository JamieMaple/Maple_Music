import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { INavigatorProps, ICommonElementProps } from 'commonTypes'

import Header from 'components/Navigator'
import RecommendView from './recommend-content'
import SongListView from './songlist-content'
import NewestListView from './newestlist-content'
import PlayList from './playList'

const baseUrl = '/index'
const dataItems: INavigatorProps[] = [
  { text: '推荐', url: '/', component: RecommendView },
  { text: '歌单', url: baseUrl + '/list', component: SongListView },
  { text: '最新', url: baseUrl + '/newest', component: NewestListView },
]

export default class IndexPage extends React.Component<ICommonElementProps, any> {

  public render() {
    const { className } = this.props
    const classNames = `view-wrapper ${className}`.trim()

    return (
      <div ref="view" id="view-hook" className="view-wrapper">
        <Switch>
          <Route path="/playList/:id" component={PlayList} />
          <Route path="/album/:id" component={PlayList} />
          <Route render={({location}) => {
            return [
              <Header key="header" className="header-wrapper" dataItems={dataItems} />,
              <Switch key="route">
                <Route key="recommend" exact path='/' component={RecommendView} />
                <Route key="list" path={`${baseUrl}/list`} component={SongListView} />
                <Route key="newest" path={`${baseUrl}/newest`} component={NewestListView} />
              </Switch>,
            ]
          }} />
        </Switch>
      </div>
    )
  }
}
