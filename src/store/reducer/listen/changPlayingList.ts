import { listen } from 'actions'
import { IStateTree, IAction } from 'commonTypes'

export default {
  [listen.change.playinglist]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
