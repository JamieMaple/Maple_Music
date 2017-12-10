import { handleActions } from 'redux-actions'
import { IAction } from 'commonTypes'
import initState from './initState'
import { fetch } from 'actions'

export default handleActions({
  [fetch.banners.success]: (state, action: IAction) => ({
    ...state,
    banners: action.payload.data,
  }),
  [fetch.songs.success]: (state, action: IAction) => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload.data,
    },
  }),
  [fetch.singers.success]: (state, action: IAction) => ({
    ...state,
    singers: {
      ...state.singers,
      ...action.payload.data,
    },
  }),
  [fetch.albums.success]: (state, action: IAction) => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload.data,
    },
  }),
  [fetch.lists.success]: (state, action: IAction) => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload.data,
    },
  }),
  [fetch.details.success]: (state, action: IAction) => ({
    ...state,
    details: {
      ...state.details,
      ...action.payload.data,
    },
  }),
}, initState)
