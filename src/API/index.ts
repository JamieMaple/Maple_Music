import { fetchData } from './fetchData'

export { fetchData }

const baseUrl = 'http://music.jamiemaple.com'

export const bannerUrl = baseUrl + '/banner'

// 无登录 -- 推荐歌单、新歌、歌手、电台和节目
export const recommendAlbumsUrl = baseUrl + '/personalized'
export const recommendSongsUrl = baseUrl + '/personalized/newsong'
export const recommendSingersUrl = baseUrl + '/top/artists'
export const recommendDJProgramUrl = baseUrl + '/personalized/djprogram'
export const recommendProgramUrl = baseUrl + '/program/recommend'

// 需登录 -- 推荐每日歌单、每日歌曲
export const protectedRecommendAlbumsUrl = baseUrl + '/recommend/resource'
export const protectedRecommendSongsUrl = baseUrl + '/recommend/songs'

// 网友精选
export const playListUrl = baseUrl + '/top/playlist'
