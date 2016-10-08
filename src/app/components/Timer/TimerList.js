import React from "react";
import TimerInstance from "./TimerList/TimerInstance"

export default class TimerList extends React.Component {
  render() {
    return (
      <div class="timer-list">
        <p>Timers</p>
        {this.props.timer.timers.map(timer => (
          <TimerInstance  timer={timer} pause={this.props.pauseTimer} resume={this.props.resumeTimer} delete={this.props.deleteTimer} key={timer.id} />
        ))}
      </div>
    );
  }
}