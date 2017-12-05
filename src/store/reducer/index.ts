import { handleActions } from 'redux-actions'
import { InterfaceAction } from 'commonTypes'
import {
  FETCH_BANNER_SUCCESS,
  FETCH_SONGS_SUCCESS,
  FETCH_SINGERS_SUCCESS,
  FETCH_ALBUMS_SUCCESS,
} from '../actions/types'

/* [{}, {}] */
const banners = []
/* {  }*/
const listerning = {}
/* {  } */
const search = {}
/* {  } */
const songs = []
/* {  } */
const albums = []
/* {  } */
const singers = []

const initState = {
  banners,
  listerning,
  search,
  songs,
  albums,
  singers,
}

export default handleActions({
  [FETCH_BANNER_SUCCESS]: (state, action: InterfaceAction) => ({
    ...state,
    banners: action.payload.banners,
  }),
  [FETCH_SONGS_SUCCESS]: (state, action: InterfaceAction) => ({
    ...state,
    songs: action.payload.songs,
  }),
  [FETCH_SINGERS_SUCCESS]: (state, action: InterfaceAction) => ({
    ...state,
    singers: action.payload.singers,
  }),
  [FETCH_ALBUMS_SUCCESS]: (state, action: InterfaceAction) => ({
    ...state,
    albums: action.payload.albums,
  }),
}, initState)
