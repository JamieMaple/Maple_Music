import * as React from 'react'
import { ICommonElementProps } from 'commonTypes'

export default function Loader({style = {}, className = '', text = '努力加载中'}: ICommonElementProps & {text?: string}) {
  const defaultStyle = {height: '25rem', fill: '#fff', fontSize: '1rem'}

  return (
    <div style={{...defaultStyle, ...style}} className={`${className}`.trim()}>
      <svg className="loader" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <defs>
          <filter ng-attr-id="{{config.filterid1}}" id="lds-squiggle-filterid-8c1d536078eff">
            <feTurbulence baseFrequency="0.03" numOctaves="3" seed="1" result="turb">
              <animate attributeName="seed" calcMode="discrete" values="0;1;2;3;4;5;6;7;8;9;0" keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1" dur="1.5s" repeatCount="indefinite"></animate>
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="5"></feDisplacementMap>
          </filter>
        </defs>
        <text x="50" y="50" dy="0.3em" textAnchor="middle" ng-attr-fill="{{config.color}}" ng-attr-font-family="{{config.fontFamily}}" ng-attr-font-size="{{config.fontSize}}" filter="url(#lds-squiggle-filterid-8c1d536078eff)" fontFamily="Arial">{text}</text>
      </svg>
    </div>
  )
}
