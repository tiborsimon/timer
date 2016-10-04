import { combineReducers  } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"

const TimerApp =  combineReducers({
  tweets,
  user
})

export default TimerApp
