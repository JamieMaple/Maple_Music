import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Comment from 'components/Comment'
import { ICommonElementProps } from 'commonTypes'

export default function DownCommentList({
  className = '',
  style = {},
}: ICommonElementProps) {
  const classNames = `${className}`.trim()
  return (
    <div className={classNames}>
      <TitleBar text="评论" />
      <div className="comments-wrapper">
      </div>
    </div>
  )
}
