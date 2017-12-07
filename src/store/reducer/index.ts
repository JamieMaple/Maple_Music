import { handleActions } from 'redux-actions'
import { IAction } from 'commonTypes'
import initState from './initState'
import {
  FETCH_BANNER_SUCCESS,
  FETCH_SONGS_SUCCESS,
  FETCH_SINGERS_SUCCESS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_LISTS_SUCCESS,
} from 'actions/types'

export default handleActions({
  [FETCH_BANNER_SUCCESS]: (state, action: IAction) => ({
    ...state,
    banners: action.payload.data,
  }),
  [FETCH_SONGS_SUCCESS]: (state, action: IAction) => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload.data,
    },
  }),
  [FETCH_SINGERS_SUCCESS]: (state, action: IAction) => ({
    ...state,
    singers: {
      ...state.singers,
      ...action.payload.data,
    },
  }),
  [FETCH_ALBUMS_SUCCESS]: (state, action: IAction) => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload.data,
    },
  }),
  [FETCH_LISTS_SUCCESS]: (state, action: IAction) => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload.data,
    },
  }),
}, initState)
