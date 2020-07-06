import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../views/HomeView';
import TestView from "../views/TestView";
import MapView from '../views/MapView';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home}/>
                <Route path="/maps" component={MapView}/>
            </Router>
        </Provider>
    );
}
  
export default Root;