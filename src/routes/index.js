import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../views/HomeView';
import MapView from '../views/MapView';

const Root = ({store}) => {
    return (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Home}/>
            <Route path="map" component={MapView}/>
        </Router>
    </Provider>);
}
  
export default Root;