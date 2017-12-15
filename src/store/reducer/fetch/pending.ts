import { IAction, IStateTree } from 'commonTypes'
import { fetch } from 'actions'

const loading = { isLoading: true }

export default {
  [fetch.lists.pending]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    lists: {
      ...state.lists,
      ...loading,
    },
  }),
}
