import React from "react";

import Input from "./Timer/Input";
import TimerList from "./Timer/TimerList";

export default class Timer extends React.Component {
  render() {
    return (
      <div id="timer">
        <Input {...this.props} />
        <TimerList {...this.props} />
      </div>
    );
  }
}
