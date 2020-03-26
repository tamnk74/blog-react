import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {App} from './containers/App'

import configureStore from './configureStore';
const store = configureStore();

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
