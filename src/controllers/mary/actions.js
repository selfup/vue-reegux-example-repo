export default {
	MARY_UP: (state, num) => {
    const newState = Object.assign({}, state)
    newState.mary.number += num
    return newState
  },
  MARY_DOWN: (state, num) => {
    const newState = Object.assign({}, state)
    newState.mary.number -= num
    return newState
  }
}