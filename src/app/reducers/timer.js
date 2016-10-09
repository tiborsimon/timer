import _ from 'lodash'

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
          {
            id: action.id,
            value: state.inputValue,
            state: "RUNNING",
          }, ...state.timers
        ]
      }
    }
    case "PAUSE_TIMER": {
      let temp = {...state}
      _.find(temp.timers, {'id': action.id}).state = "PAUSED"
      return temp
    }
    case "RESUME_TIMER": {
      let temp = {...state}
      _.find(temp.timers, {'id': action.id}).state = "RUNNING"
      return temp
    }
    case "DELETE_TIMER": {
      let temp = {...state}
      temp.timers = _.filter(temp.timers, o => o.id != action.id )
      return temp
    }
    case "TICK": {
      let temp = {...state}
      let target = _.find(temp.timers, {'id': action.id})
      target.value -= 1
      if (target.value <= 0) {
        target.state = "FINISHED"
      }
      return temp
    }
  }
  return state
}
