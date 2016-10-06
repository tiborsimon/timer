const initialState = {
  inputValue: '10',
  timers: []
}

export default function timerReducer(state=initialState, action) {
  switch(action.type) {
    case "INPUT_CHANGED": {
      return {...state, inputValue: action.value}
    }
    case "CREATE_TIMER": {
      return {
        ...state,
        timers: [
          ...state.timers, {
            id: action.id,
            value: state.inputValue,
          }
        ]
      }
    }
  }
  return state
}
