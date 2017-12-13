import * as React from 'react'
import * as ReactDOM from 'react-dom'

const portalWrapper = require('./style.css')['portal-wrapper']

function getContainer(id) {
  const wrapper = document.getElementById(id || 'app')
  if (!wrapper) {
    const createWrapper = document.createElement('div')
    createWrapper.classList.add('app')
    document.body.appendChild(createWrapper)
  }
  return wrapper
}

export default class PortalContainer extends React.Component<{id: string}, any> {
  private el = document.createElement('div')

  private parent = getContainer(this.props.id)

  public componentDidMount() {
    if (this.parent) {
      this.el.className = portalWrapper
      this.parent.appendChild(this.el)
    }
  }

  public componentWillUnmount() {
    if (this.parent) {
      this.parent.removeChild(this.el)
    }
  }

  public render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}
