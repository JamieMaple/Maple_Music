import * as React from 'react'

export default class Banner extends React.Component {
  public props: {
    className?: string,
  }

  public render() {
    const classNames = ['banner-hook', this.props.className].join(' ').trim()

    return (
      <div className={classNames}>
        banner
      </div>
    )
  }
}
