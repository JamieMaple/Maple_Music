import { IAction, IStateTree } from 'commonTypes'
import initState from './initState'
import { fetch } from 'actions'

export default {
  [fetch.recommend.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    recommend: {
      ...state.recommend,
      ...action.payload,
    },
  }),
  [fetch.lists.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload,
    },
  }),
  [fetch.newest.songs.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload,
    },
  }),
  [fetch.song.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload,
    },
  }),
  [fetch.newest.albums.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload,
    },
  }),
  [fetch.details.list.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: {
      ...state.details,
      list: {
        ...state.details.list,
        ...action.payload,
      },
    },
  }),
  [fetch.details.album.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: {
      ...state.details,
      album: {
        ...state.details.album,
        ...action.payload,
      },
    },
  }),
  [fetch.comments.list.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    comments: {
      ...state.comments,
      list: {
        ...state.comments.list,
        ...action.payload,
      },
    },
  }),
  [fetch.comments.album.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    comments: {
      ...state.comments,
      album: {
        ...state.comments.album,
        ...action.payload,
      },
    },
  }),
}
