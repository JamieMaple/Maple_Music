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
  FETCH_LISTS,
  FETCH_LISTS_SUCCESS,
} from './types'

const commonFetch  = (config, dataType, ...args) => ({config, dataType, others: args})
const commonCommit = (data) => ({data})
const commonError  = () => {}

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
  fetchLists,
  fetchListsSuccess,
} = createActions({
  [FETCH_BANNER]: commonFetch,
  [FETCH_BANNER_SUCCESS]: commonCommit,
  [FETCH_SONGS]: commonFetch,
  [FETCH_SONGS_SUCCESS]: commonCommit,
  [FETCH_SINGERS]: commonFetch,
  [FETCH_SINGERS_SUCCESS]: commonCommit,
  [FETCH_ALBUMS]: commonFetch,
  [FETCH_ALBUMS_SUCCESS]: commonCommit,
  [FETCH_LISTS]: commonFetch,
  [FETCH_LISTS_SUCCESS]: commonCommit,
  [FETCH_ERROR]: commonError,
})
