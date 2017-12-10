import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

const commentWrapper = require('./style.css')['comment-wrapper']

export default function Commemt({
  className = '',
  style = {},
}: ICommonElementProps) {
  return (
    <div className="">comment</div>
  )
}
