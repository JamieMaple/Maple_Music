import * as React from 'react'

const style = require('./style.css')

function Back() {
  return (
    <i className="ion-ios-arrow-back left-icon"></i>
  )
}
function Front() {
  return (
    <i className="ion-ios-arrow-forward right-icon"></i>
  )
}

export default function Container() {
  return (
    <div className={style['history-wrapper']}>
      <Back />
      <Front />
    </div>
  )
}
