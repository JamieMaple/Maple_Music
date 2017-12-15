import { listen } from 'actions'
import { IAction, IStateTree } from 'commonTypes'

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
  [listen.pause]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      isPlaying: false,
    },
  }),
}
