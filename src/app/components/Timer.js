import React from "react";

import Input from "./Timer/Input";

import { connect } from 'react-redux'


@connect(store => {
  return {
    inputValue: store.timer.inputValue,
    timers: store.timer.timers,
  }
})
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
