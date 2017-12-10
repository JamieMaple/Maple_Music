import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

export default function DownCommentList({
  className = '',
  style = {},
}: ICommonElementProps) {
  const classNames = `${className}`.trim()
  return (
    <div className={classNames}>comment list</div>
  )
}
