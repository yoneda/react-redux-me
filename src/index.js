import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './containers/App.js';
import reducer from "./reducers/reducer.js";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
