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
      <div>
        <p>Add a timer</p>
        <div class="row">
          <input onChange={this.inputChanged.bind(this)} type="text" value={this.props.timer.inputValue} />
          <button onClick={this.startTimer.bind(this)}>Start</button>
        </div>
      </div>
    );
  }
}
