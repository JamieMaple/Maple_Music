import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
/* router-views components */
import IndexPage from '../views/index'
import PrivateFM from '../views/privateFM'
import MVPage from '../views/mvPage'
import SongsList from '../views/songsList'

export default function RouteViews() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/privatefm" component={PrivateFM} />
      <Route path="/mv" component={MVPage} />
      <Route path="/songsList/:id" component={SongsList} />
    </Switch>
  )
}
