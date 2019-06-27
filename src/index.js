import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker';
import Root from './routes/index';
import AppReducer from './reducers/index';
import App from './App';

let store = createStore(AppReducer);

ReactDOM.render(
      <Root store={store}/>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
