import * as React from 'react'

const style = require('./style.css')

export default function Search() {
  return (
    <div className={style.search}>
      <i className="ion-ios-search-strong search-icon"></i>
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  )
}
