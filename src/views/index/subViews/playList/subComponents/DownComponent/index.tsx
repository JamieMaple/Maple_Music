import * as React from 'react'
import TitleBar from 'components/TitleBar'
import Comment from 'components/Comment'
import Filter from 'components/Filter'
import { ICommonElementProps, ICommentsList } from 'commonTypes'

const wrapepr = require('./style.css')['down-wrapper']

interface IProps extends ICommonElementProps {
  comments: ICommentsList,
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
}: IProps) {
  const classNames = `${className} ${wrapepr}`.trim()

  return (
    <div className={classNames}>
      <TitleBar className="title" text="评论">
        <span className="count-num">共{comments.all.length}条评论</span>
      </TitleBar>
      <div className="comments-wrapper">
        {comments.hot.length ? <HotComments className="hot-comments" comments={comments.hot} /> : null}
        {comments.top.length ? <TopComments className="top-comments" comments={comments.top} /> : null}
        {comments.all.length ? <NewComments className="new-comments" comments={comments.all} /> : <p>暂无</p>}
      </div>
    </div>
  )
}
