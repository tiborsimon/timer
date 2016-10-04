import events from '../actions'

const initialState = {
  inputValue: '0',
  timers: []
}

export default function(state=initialState, action) {
  switch(action.type) {
    case events.INPUT_CHANGED {
      return {...state, inputValue: action.value}
    }
  }
}
