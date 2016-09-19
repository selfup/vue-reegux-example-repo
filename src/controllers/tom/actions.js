export default {
	TOM_UP: (state, num) => {
    const newState = Object.assign({}, state)
    newState.tom.number += num
    return newState
  },
  TOM_DOWN: (state, num) => {
    const newState = Object.assign({}, state)
    newState.tom.number -= num
    return newState
  }
}