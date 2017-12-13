import { IAction, IStateTree } from 'commonTypes'
import initState from './initState'
import { listen } from 'actions'

export default {
  [listen.toggle]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      isPlaying: state.listening ? !state.listening.isPlaying : false,
    },
  }),
  [listen.play]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      isPlaying: true,
    },
  }),
  [listen.buffered]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload.data,
    },
  }),
  [listen.current]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      ...action.payload.data,
    },
  }),
}
