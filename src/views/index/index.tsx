import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { INavigatorProps } from 'commonTypes'

import Header from 'components/Navigator'
import RecommendView from './subViews/recommend-content'
import SongListView from './subViews/songlist-content'
import NewestListView from './subViews/newestlist-content'

export default function IndexPage() {
  const baseUrl = '/index'
  const dataItems: INavigatorProps[] = [
    { text: '推荐', url: '/', component: RecommendView },
    { text: '歌单', url: baseUrl + '/list', component: SongListView },
    { text: '最新', url: baseUrl + '/newest', component: NewestListView },
  ]
  const routes = dataItems.map(route =>
    <Route exact key={route.url} path={route.url} component={route.component} />)

  return (
    <div className="view-wrapper">
      <Header className="header-wrapper" dataItems={dataItems} />
      <Switch>
        {routes}
      </Switch>
    </div>
  )
}
