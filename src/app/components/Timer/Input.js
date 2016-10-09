import React from "react";

export default class Input extends React.Component {
  inputChanged(e) {
    const input = e.target.value
    this.props.inputChanged(input)
  }

  startTimer() {
    this.props.createTimer()
  }

  render() {
    return (
      <div class="input">
        <p>Add a timer</p>
        <div class="timer">
          <input onChange={this.inputChanged.bind(this)} class="timer-part time-input" type="text" value={this.props.timer.inputValue} />
          <input onClick={this.startTimer.bind(this)} class="timer-part button" type="submit" value="Start" />
        </div>
      </div>
    );
  }
}
