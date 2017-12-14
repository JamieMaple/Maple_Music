const baseUrl = 'http://music.jamiemaple.com'

const apiUrls = {
  bannerUrl: '/banner',

  // 无登录 -- 推荐歌单、新歌、歌手、电台和节目
  recommendListsUrl: '/personalized',
  recommendSongsUrl: '/personalized/newsong',
  recommendSingersUrl: '/top/artists',
  recommendDJProgramUrl: '/personalized/djprogram',
  recommendProgramUrl: '/program/recommend',

  // 需登录 -- 推荐每日歌单、每日歌曲
  protectedRecommendListsUrl: '/recommend/resource',
  protectedRecommendSongsUrl: '/recommend/songs',

  // 歌单
  playListUrl: '/top/playlist',

  /* 详情 */
  // 歌单、专辑
  playListDetailUrl: '/playlist/detail',
  albumDetailUrl: '/album',

  // 歌曲详情
  songDetailUrl: '/song/detail',
  songFileUrl: '/music/url',
  /* 详情 */

  // 最新歌单或单曲
  newestSongsUrl: '/personalized/newsong',
  newestAlbumsUrl: '/top/album',

  // 评论
  songCommentsUrl: '/comment/music',
  listCommentsUrl: '/comment/playlist',
  albumCommentsUrl: '/comment/album',
}

Object.keys(apiUrls).forEach(key => {
  apiUrls[key] = baseUrl + apiUrls[key]
})

export default apiUrls
