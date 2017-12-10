import { stateTreeTypes } from '../../commonTypes'

// TODO
// loading localStorage

const initState = ((statetree) => {
  const newState = {}
  for (const key in statetree) {
    if (statetree.hasOwnProperty(key)) {
      newState[key] = {}
    }
  }
  return newState
})(stateTreeTypes)

export default initState
