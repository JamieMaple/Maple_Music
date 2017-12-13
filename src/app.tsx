import * as React from 'react'
import HeaderBar from './layouts/HeaderBar'
import SideBar from './layouts/SideBar'
import RouteViews from './router'
import MusicController from './layouts/MusicController'

const styles = require('./app.css')

class App extends React.Component {
  public props: {
    history?: object,
    location?: object,
  }

  public componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }

  public render() {
    const { history, location } = this.props

    return [
      <HeaderBar history={history} location={location} key="header" />,
      <div key="content" id="main-container" className="content-container">
        <SideBar className="sidebar-control" />
        <RouteViews />
      </div>,
      <MusicController key="music" />,
    ]
  }
}

export default App
