import { IAction, IStateTree } from 'commonTypes'
import { listen } from 'actions'

export default {
  [listen.change.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
