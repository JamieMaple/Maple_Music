import * as React from 'react'
import * as ReactDOM from 'react-dom'

const appWrapper = (function getContainer() {
  const wrapper = document.getElementById('app')
  if (!wrapper) {
    const createWrapper = document.createElement('div')
    createWrapper.classList.add('app')
    document.body.appendChild(createWrapper)
  }
  return wrapper
})()

export default class PortalContainer extends React.Component {
  private el = document.createElement('div')

  public componentDidMount() {
    if (appWrapper) {
      appWrapper.appendChild(this.el)
    }
  }

  public componentWillUnmount() {
    if (appWrapper) {
      appWrapper.removeChild(this.el)
    }
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}
