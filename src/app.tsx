import * as React from 'react'
import HeaderBar from './components/HeaderBar'
import SideBar from './components/SideBar'
import MusicController from './components/MusicController'

const styles = require('./app.css')

function ContentContainer({children}: any) {
  return (
    <div className="content-container">
      {children}
    </div>
  )
}

class App extends React.Component {
  public render() {
    return [
      <HeaderBar key="header" />,
      <ContentContainer key="content">
        <SideBar className="sidebar-control" />
      </ContentContainer>,
      <MusicController key="music" />,
    ]
  }
}

export default App
