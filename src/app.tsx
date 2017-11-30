import * as React from 'react'
import HeaderBar from 'components/HeaderBar'
import SideBar from 'components/SideBar'
import RouteViews from './router'
import MusicController from 'components/MusicController'

const styles = require('./app.css')

interface InterfaceChildren {
  children: JSX.Element[] | JSX.Element
}

function ContentContainer({children}: InterfaceChildren) {
  return (
    <div className="content-container">
      {children}
    </div>
  )
}

function RouteViewsWrapper({children}: InterfaceChildren) {
  return (
    <div className="views-wrapper">
      {children}
    </div>
  )
}

class App extends React.Component {
  public props: {
    history?: object,
    location?: object,
  }

  public render() {
    const { history } = this.props

    return [
      <HeaderBar history={history} key="header" />,
      <ContentContainer key="content">
        <SideBar className="sidebar-control" />
        <RouteViewsWrapper>
          <RouteViews />
        </RouteViewsWrapper>
      </ContentContainer>,
      <MusicController key="music" />,
    ]
  }
}

export default App
