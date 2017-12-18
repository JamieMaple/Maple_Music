import { listen } from 'actions'
import { IAction, IStateTree } from 'commonTypes'

export default {
  [listen.toggle]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      isPlaying: !state.listening.isPlaying,
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
  [listen.mode]: (state: IStateTree, action: IAction): IStateTree => ({
    ...state,
    listening: {
      ...state.listening,
      modes: {
        ...state.listening.modes,
        mode: (state.listening.modes.mode + 1) % state.listening.modes.length,
      },
    },
  }),
}
