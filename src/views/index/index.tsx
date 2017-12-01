import * as React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { InterfaceNavigatorProps } from 'commonTypes'

import Header from 'components/Navigator'
import RecommendView from './recommend-content'
import SongListView from './songlist-content'

function NewestList() {
  return (
    <div>
      newest list
    </div>
  )
}

function RankView() {
  return (
    <div>
      RankView
    </div>
  )
}

export default function IndexPage() {
  const dataItems: InterfaceNavigatorProps[] = [
    { text: '推荐', url: '/', component: RecommendView },
    { text: '歌单', url: '/list', component: SongListView },
    { text: '最新', url: '/newest', component: NewestList },
    { text: '排行榜', url: '/rank', component: RankView },
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
