import { IAction, IStateTree } from 'commonTypes'
import initState from './initState'
import { fetch } from 'actions'

export default {
  [fetch.banners.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    banners: action.payload.data,
  }),
  [fetch.songs.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload.data,
    },
  }),
  [fetch.singers.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    singers: {
      ...state.singers,
      ...action.payload.data,
    },
  }),
  [fetch.albums.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload.data,
    },
  }),
  [fetch.lists.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload.data,
    },
  }),
  [fetch.details.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: action.payload.data,
  }),
  [fetch.comments.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    comments: action.payload.data,
  }),
  [fetch.listening.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload.data,
    },
  }),
}
