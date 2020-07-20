import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import Root from './routes/index';
import AppReducer from './reducers/index';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import mapsSaga from './sagas/mapsSaga';

//let store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
console.log(sagaMiddleware);
console.log(sagaMiddleware.run);

ReactDOM.render(
      <Root store={store}/>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
