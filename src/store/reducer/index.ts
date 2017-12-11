import { handleActions } from 'redux-actions'
import { IAction, IStateTree } from 'commonTypes'
import { initState } from './initState'
import { fetch } from 'actions'

export default handleActions({
  [fetch.banners.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    banners: action.payload.data,
  }),
  [fetch.songs.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload.data,
    },
  }),
  [fetch.singers.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    singers: {
      ...state.singers,
      ...action.payload.data,
    },
  }),
  [fetch.albums.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload.data,
    },
  }),
  [fetch.lists.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload.data,
    },
  }),
  [fetch.details.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    details: action.payload.data,
  }),
  [fetch.comments.success]: (state: IStateTree, action: IAction) => ({
    ...state,
    comments: action.payload.data,
  }),
}, initState)
