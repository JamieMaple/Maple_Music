import * as React from 'react'

const style = require('./style.css')

function Back({goBack}: any) {
  return (
    <i className="ion-ios-arrow-back icon-hook" onClick={goBack}></i>
  )
}
function Front({goForward}: any) {
  return (
    <i className="ion-ios-arrow-forward icon-hook"onClick={goForward}></i>
  )
}

export default function Container({back, forward}: any) {
  return (
    <div className={style['history-wrapper']}>
      <Back goBack={back} />
      <Front goForward={forward} />
    </div>
  )
}
