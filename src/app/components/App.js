import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actionCreators from "../actions"
import Timer from "./Timer"

function mapStateToProps(state) {
  return {
    timer: state.timer,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Timer)

export default App
