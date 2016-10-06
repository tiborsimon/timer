import React from "react";
import { inputChanged, createTimer } from '../../actions'
import { connect } from 'react-redux'

@connect(store => {
  return {
    timers: store.timer.inputValue
  }
})
export default class Input extends React.Component {
  inputChanged(e) {
    const input = e.target.value
    this.props.dispatch(inputChanged(input))
  }

  startTimer() {
    this.props.dispatch(createTimer())
  }

  render() {
    return (
      <div class="input">
        <p>Add a timer</p>
        <div class="row">
          <input onChange={this.inputChanged.bind(this)} class="control-item time-input" type="text" value={this.props.inputValue} />
          <input onClick={this.startTimer.bind(this)} class="control-item button" type="submit" value="Start" />
        </div>
      </div>
    );
  }
}
