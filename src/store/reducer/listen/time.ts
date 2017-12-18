import { IAction, IStateTree } from 'commonTypes'
import { listen } from 'actions'

export default {
  [listen.buffered]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
  [listen.current.get]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
  [listen.current.change]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
