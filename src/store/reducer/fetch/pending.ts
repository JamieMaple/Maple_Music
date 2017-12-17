import { IAction, IStateTree } from 'commonTypes'
import { fetch } from 'actions'

const loading = { isLoading: true }

export default {
  [fetch.details.album.pending]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: {
      ...state.details,
      ...loading,
    },
  }),
  [fetch.details.list.pending]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    details: {
      ...state.details,
      ...loading,
    },
  }),
  [fetch.lists.pending]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    lists: {
      ...state.lists,
      ...loading,
    },
  }),
}
