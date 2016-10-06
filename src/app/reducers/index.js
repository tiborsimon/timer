import { combineReducers  } from "redux"

import timer from "./timer"

const TimerApp =  combineReducers({
  timer,
})

export default TimerApp
