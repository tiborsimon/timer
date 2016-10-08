import React from "react";

export default class TimerInstance extends React.Component {
  pauseTimer() {
    this.props.pause(this.props.timer.id)
  }

  resumeTimer() {
    this.props.resume(this.props.timer.id)
  }

  deleteTimer() {
    this.props.delete(this.props.timer.id)
  }

  render() {
    let timer = this.props.timer
    switch (timer.state) {
      case "RUNNING": {
        return (
          <div class="row">
            <div class="control-item countdown running"><i class="icon icon-spinner"></i>{timer.value}</div>
            <button class="control-item button half" onClick={this.pauseTimer.bind(this)}>Pause</button>
            <button class="control-item button half" onClick={this.deleteTimer.bind(this)}>Delete</button>
          </div>
        )
      }
      case "PAUSED": {
        return (
          <div class="row">
            <div class="control-item countdown running"><i class="icon icon-pause"></i>{timer.value}</div>
            <button class="control-item button half" onClick={this.resumeTimer.bind(this)}>Resume</button>
            <button class="control-item button half" onClick={this.deleteTimer.bind(this)}>Delete</button>
          </div>
        )
      }
    }
  }
}
