import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import configureStore from "./store/configureStore";
const store = configureStore();

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
