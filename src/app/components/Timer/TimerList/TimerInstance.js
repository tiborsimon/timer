import React from "react";

export default class TimerInstance extends React.Component {
  componentWillMount() {
    this.tickHandler = setInterval(this.timerTick.bind(this), 1000)
  }

  timerTick() {
    if (this.props.timer.state == "RUNNING") {
      this.props.tick(this.props.timer.id)
    }
  }

  componentWillUnmount() {
    clearInterval(this.tickHandler)
  }

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
            <i class="indicator icon icon-play"></i><div class="display">{timer.value}</div>
            <button class="half" onClick={this.pauseTimer.bind(this)}>Pause</button>
            <button class="half" onClick={this.deleteTimer.bind(this)}>Delete</button>
          </div>
        )
      }
      case "PAUSED": {
        return (
          <div class="row">
            <i class="indicator icon icon-pause"></i><div class="display">{timer.value}</div>
            <button class="half" onClick={this.resumeTimer.bind(this)}>Resume</button>
            <button class="half" onClick={this.deleteTimer.bind(this)}>Delete</button>
          </div>
        )
      }
      case "FINISHED": {
        return (
          <div class="row">
            <i class="indicator icon icon-done"></i><div class="display">{timer.value}</div>
            <button onClick={this.deleteTimer.bind(this)}>Delete</button>
          </div>
        )
      }
    }
  }
}
