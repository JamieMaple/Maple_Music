import * as React from 'react'

const styles = require('./app.css')
const logo = require('./asserts/logo.svg')
const maple = require('./asserts/maple.png')

function Header() {
  return (
    <div className="header">
      <img height="80" src={logo} alt="logo" />
      <h1 className="title">Welcome to Maple's webpack cli</h1>
    </div>
  )
}

function Message() {
  return (
    <div className="message-wrapper"><p>To get started, edit src/App.js and save to hot reload.</p></div>
  )
}

function Maple() {
  return (
    <div className="maple">
      <img height="300" src={maple} alt="" />
    </div>
  )
}

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <Header />
        <Message />
        <Maple />
      </div>
    )
  }
}

export default App
