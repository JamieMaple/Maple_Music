import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Comment from 'components/Comment'
import Filter from 'components/Filter'
import Loader from 'components/Loader'
import { ICommonElementProps, ICommentsList } from 'commonTypes'

const wrapepr = require('./style.css')['down-wrapper']

interface IProps extends ICommonElementProps {
  comments: ICommentsList,
  isLoadingDetails?: boolean,
}

function CommentsList({comments = []}: any) {
  return <ul className="comments-list">{comments.map((comment, index) =>
    <Comment key={`comment-${index}`} className="comment-item" user={comment.user} content={comment.content} time={comment.time} />)
  }</ul>
}

function NewComments({comments = [], className = ''}: any) {
  const sortedComments = comments && comments.sort((pre, cur) => cur.time - pre.time)
  return (
    <div className={className}>
      <h3 className="comments-title">最新评论</h3>
      <CommentsList comments={comments} />
    </div>
  )
}

function HotComments({comments = [], className = ''}: any) {
  return (
    <div className={className}>
      <h3 className="comments-title">精彩评论</h3>
      <CommentsList comments={comments} />
    </div>
  )
}

function TopComments({comments = [], className = ''}: any) {
  return (
    <div className={className}>
      <h3 className="comments-title">最热评论</h3>
      <CommentsList comments={comments} />
    </div>
  )
}

export default function DownCommentList({
  className = '',
  style = {},
  comments,
  isLoadingDetails,
}: IProps) {
  const classNames = `${className} ${wrapepr}`.trim()
  const { all = [], hot = [], top = [] } = comments

  return (
    <div className={classNames}>
      <TitleBar className="title" text="评论">
        <span className="count-num">共{all.length}条评论</span>
      </TitleBar>
      {
        isLoadingDetails
        ? <Loader />
        : <div className="comments-wrapper">
            {hot.length ? <HotComments className="hot-comments" comments={hot} /> : null}
            {top.length ? <TopComments className="top-comments" comments={top} /> : null}
            {all.length ? <NewComments className="new-comments" comments={all} /> : <p>暂无</p>}
          </div>
      }
    </div>
  )
}
