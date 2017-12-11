import * as React from 'react'
import { formatComplexDate } from 'utils/format'
import { ICommonElementProps, IComment } from 'commonTypes'

const commentWrapper = require('./style.css')['comment-wrapper']
const defaultAvatar = require('./defaultAvatar.svg')

export default class Commemt extends React.Component<ICommonElementProps & IComment, any> {
  public render() {
    const { className = '', style = {}, user, content, time } = this.props
    const classNames = `${className} ${commentWrapper}`.trim()

    return (
      <div className={classNames}>
        <img className="avatar" src={user.avatarUrl || defaultAvatar} alt=""/>
        <div className="content-wrapper">
          <span className="user-name">{user.nickname}</span>
          <p className="content">{content}</p>
          <span className="time">{formatComplexDate(time, '/')}</span>
        </div>
      </div>
    )
  }
}
