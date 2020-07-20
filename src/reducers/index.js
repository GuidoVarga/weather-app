import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import searchReducer from './searchReducer';
import mapsReducer from './mapsReducer';

const AppReducer = combineReducers({
    citiesReducer,
    searchReducer,
    mapsReducer
});
export default AppReducer;