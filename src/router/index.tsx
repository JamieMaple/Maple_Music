import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
/* router-views components */
import IndexPage from '../views/index'
import PrivateFM from '../views/privateFM'
import MVPage from '../views/mvPage'

export default function RouteViews() {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/privatefm" component={PrivateFM} />
      <Route exact path="/mv" component={MVPage} />
      {/* all the routes that no match will go to index page */}
      <Route component={IndexPage} />
    </Switch>
  )
}
