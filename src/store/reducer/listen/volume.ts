import { listen } from 'actions'
import { IAction, IStateTree } from 'commonTypes'

export default {
  [listen.volume]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
