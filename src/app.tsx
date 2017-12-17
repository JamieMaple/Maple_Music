import * as React from 'react'
import HeaderBar from './layouts/HeaderBar'
import SideBar from './layouts/SideBar'
import RouteViews from './router'
import { IRouteProps } from 'commonTypes'
import MusicController from './layouts/MusicController'

const styles = require('./app.css')

class App extends React.Component<IRouteProps, any> {
  public componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  public render() {
    const { history, location } = this.props

    return [
      <HeaderBar key="header" back={history.back} forward={history.forward} />,
      <div key="content" id="main-container" className="content-container">
        <SideBar className="sidebar-control" />
        <RouteViews />
      </div>,
      <MusicController key="music" />,
    ]
  }
}

export default App
