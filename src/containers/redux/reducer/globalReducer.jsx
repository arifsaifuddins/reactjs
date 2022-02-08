import actionType from "../globalActionType";

const globalState = {
  setCount: 0
}

// reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === actionType.plus) {
    return {
      ...state,
      setCount: state.setCount + 1
    }
  } else if (action.type === actionType.minus) {
    let setCount = 0;
    if (state.setCount > 0) {
      return {
        ...state,
        setCount: state.setCount - 1
      }
    }
    return {
      setCount: setCount
    }
  }
  return state;
}

export default rootReducer;