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
        <div class="row">
          <input onChange={this.inputChanged.bind(this)} class="control-item time-input" type="text" value={this.props.timer.inputValue} />
          <input onClick={this.startTimer.bind(this)} class="control-item button" type="submit" value="Start" />
        </div>
      </div>
    );
  }
}
