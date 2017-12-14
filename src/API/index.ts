import fetchUrls from './urls'
import { fetchData } from './fetchData'

// const commonConfig = {
//   method: 'GET',
// }

// @@ global get method

export default {
  // recommend page
  fetchRecommend: {
    banners: () => fetchData({ url: fetchUrls.bannerUrl }),
    songs: () => fetchData({ url: fetchUrls.recommendSongsUrl }),
    singers: (params) => fetchData({ url: fetchUrls.recommendSingersUrl, params }),
    lists: (params) => fetchData({ url: fetchUrls.recommendListsUrl, params }),
  },
  // lists view
  fetchLists: (params) => fetchData({ url: fetchUrls.playListUrl, params }),
  // newest view
  fetchNewest: {
    albums: (params) => fetchData({ url: fetchUrls.newestAlbumsUrl, params }),
    songs: (params) => fetchData({ url: fetchUrls.newestSongsUrl, params }),
  },
  // details
  fetchAlbumDetails: (params) => fetchData({ url: fetchUrls.albumDetailUrl, params }),
  fetchListsDetails: (params) => fetchData({ url: fetchUrls.playListDetailUrl, params }),
  // one song
  fetchSongDetails: (params) => fetchData({url: fetchUrls.songDetailUrl, params}),
  fetchSongFile: (params) => fetchData({url: fetchUrls.songFileUrl, params}),
  // comments
  fetchAlbumComments: (params) => fetchData({ url: fetchUrls.albumCommentsUrl, params }),
  fetchListsComments: (params) => fetchData({ url: fetchUrls.listCommentsUrl, params }),
}
