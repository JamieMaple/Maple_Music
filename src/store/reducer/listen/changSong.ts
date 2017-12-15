import { IAction, IStateTree } from 'commonTypes'
import { listen } from 'actions'

export default {
  [listen.change.song.pending]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
  [listen.change.song.success]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
