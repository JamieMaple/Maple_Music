import { fetch } from 'actions'
import { IStateTree, IAction } from 'commonTypes'

const loading = { isLoading: false }

export default {
  [fetch.recommend.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    recommend: {
      ...state.recommend,
      ...action.payload,
      ...loading,
    },
  }),
  [fetch.lists.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    lists: {
      ...state.lists,
      ...action.payload,
      ...loading,
    },
  }),
  [fetch.newest.songs.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload,
      ...loading,
    },
  }),
  [fetch.song.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    songs: {
      ...state.songs,
      ...action.payload,
      ...loading,
    },
  }),
  [fetch.newest.albums.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    albums: {
      ...state.albums,
      ...action.payload,
      ...loading,
    },
  }),
  [fetch.details.list.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: {
      ...state.details,
      ...loading,
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
      ...loading,
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
      ...loading,
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
      ...loading,
      album: {
        ...state.comments.album,
        ...action.payload,
      },
    },
  }),
}
