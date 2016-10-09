import React from "react";
import TimerInstance from "./TimerList/TimerInstance"

export default class TimerList extends React.Component {
  render() {
    return (
      <div>
      {(() => {
        if (this.props.timer.timers.length > 0) {
          return <p>Timers</p>
        }
      })()}
        {this.props.timer.timers.map(timer => (
          <TimerInstance  timer={timer} pause={this.props.pauseTimer} resume={this.props.resumeTimer} delete={this.props.deleteTimer} tick={this.props.timerTick} key={timer.id} />
        ))}
      </div>
    );
  }
}
