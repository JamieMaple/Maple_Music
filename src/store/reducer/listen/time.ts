import { IAction, IStateTree } from 'commonTypes'
import { listen } from 'actions'

export default {
  [listen.duration]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
  [listen.buffered]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
  [listen.current]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload,
    },
  }),
}
