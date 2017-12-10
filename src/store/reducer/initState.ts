import { stateTree } from '../../commonTypes'

// TODO
// loading localStorage

const initState = (statetree => {
  const newState = {}
  for (const key in statetree) {
    if (statetree.hasOwnProperty(key)) {
      newState[key] = statetree[key]
    }
  }
  return newState
})(stateTree)

export default initState
