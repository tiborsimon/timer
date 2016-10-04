import React from "react";

import Input from "./Timer/Input";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {timers: []};
  }
  render() {
    return (
      <div id="timer">
        <Input />
      </div>
    );
  }
}
