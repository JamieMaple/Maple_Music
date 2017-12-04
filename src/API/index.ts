export const baseUrl = 'http://music.jamiemaple.com'

// 无登录 -- 推荐歌单、新歌、电台和节目
export const recommendAlbums = baseUrl + '/personalized'
export const recommendSongs = baseUrl + '/personalized/newsong'
export const recommendDJProgram = baseUrl + '/personalized/djprogram'
export const recommendProgram = baseUrl + '/program/recommend'

// 需登录 -- 推荐每日歌单、每日歌曲
export const protectedRecommendAlbums = baseUrl + '/recommend/resource'
export const protectedRecommendSongs = baseUrl + '/recommend/songs'
