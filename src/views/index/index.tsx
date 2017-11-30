import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { InterfaceNavigatorProps } from 'commonTypes'

import Header from './header'
import RecommendView from './recommend-content'

function RankView() {
  return (
    <div>
      rank
    </div>
  )
}

function SongsListView() {
  return (
    <div>
      songlistview
    </div>
  )
}

function NewestList() {
  return (
    <div>
      newest list
    </div>
  )
}

export default function IndexPage() {
  const dataItems: InterfaceNavigatorProps[] = [
    { text: '推荐', url: '/', component: RecommendView },
    { text: '排行榜', url: '/rank', component: RankView },
    { text: '歌单', url: '/list', component: SongsListView },
    { text: '最新', url: '/newest', component: NewestList },
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
