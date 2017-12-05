import { createActions } from 'redux-actions'
import {
  FETCH_BANNER,
  FETCH_BANNER_SUCCESS,
  FETCH_SONGS,
  FETCH_SONGS_SUCCESS,
  FETCH_SINGERS,
  FETCH_SINGERS_SUCCESS,
  FETCH_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ERROR,
} from './types'

const commonFetch = (config) => ({config})

export const {
  fetchError,
  fetchBanner,
  fetchBannerSuccess,
  fetchSongs,
  fetchSongsSuccess,
  fetchSingers,
  fetchSingersSuccess,
  fetchAlbums,
  fetchAlbumsSuccess,
} = createActions({
  [FETCH_BANNER]: commonFetch,
  [FETCH_BANNER_SUCCESS]: (banners) => ({banners}),
  [FETCH_SONGS]: commonFetch,
  [FETCH_SONGS_SUCCESS]: (songs) => ({songs}),
  [FETCH_SINGERS]: commonFetch,
  [FETCH_SINGERS_SUCCESS]: (singers) => ({singers}),
  [FETCH_ALBUMS]: commonFetch,
  [FETCH_ALBUMS_SUCCESS]: (albums) => ({albums}),
  [FETCH_ERROR]: () => {},
})
