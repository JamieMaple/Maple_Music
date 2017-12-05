import * as React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim'
import TweenOne from 'rc-tween-one'
import { InterfaceBannerItem, InterfaceCommonElementProps } from 'commonTypes'

const wrapper = require('./style.css').banner

interface InterfaceProps extends InterfaceCommonElementProps {
  data?: InterfaceBannerItem[],
  autoPlay?: boolean,
  autoPlaySpeed?: number,
  duration?: number,
}

const BgElement = Element.BgElement

export default function Banner({
  className = '',
  style = {},
  data = [],
  autoPlay = true,
  autoPlaySpeed = 2000,
  duration = 600,
}: InterfaceProps) {
  const classNames = `${wrapper} banner-hook ${className}`.trim()
  const bannerItems = data.map((item, index) =>
    <Element key={`elem-${index}`}>
      <BgElement
        key="bg"
        className="banner-item-bg"
        style={{
          backgroundImage: `url(${item.pic})`,
          backgroundSize: '100% 100%',
        }} />
    </Element>)

  return (
    <BannerAnim
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      duration={duration}
      className={classNames}
    >
      {bannerItems}
    </BannerAnim>
  )
}
