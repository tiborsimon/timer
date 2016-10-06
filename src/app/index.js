import React from "react";
import ReactDOM from "react-dom";

import Timer from "./components/Timer"

import { Provider } from "react-redux"
import store from "./store"

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
  <Timer />
</Provider>, app);
