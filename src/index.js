import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './components/app/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer, 
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
