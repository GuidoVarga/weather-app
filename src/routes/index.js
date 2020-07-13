import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../views/HomeView';
import MapView from '../views/MapView';

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/home" component={Home}/>
                <Route path="/maps" component={MapView}/>
            </Router>
        </Provider>
    );
}
  
export default Root;