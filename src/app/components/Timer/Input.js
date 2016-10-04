import React from "react";

export default class Input extends React.Component {
  inputChanged(e) {
    const input = e.target.value;
    console.log(input);
  }

  startTimer() {
    console.log('start');
  }

  render() {
    return (
      <div class="input">
        <p>Add a timer</p>
        <div class="row">
          <input onChange={this.inputChanged.bind(this)} class="control-item time-input" type="text" defaultValue="10" />
          <input onClick={this.startTimer.bind(this)} class="control-item button" type="submit" value="Start" />
        </div>
      </div>
    );
  }
}
