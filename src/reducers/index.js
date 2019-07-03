import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import searchReducer from './searchReducer';

const AppReducer = combineReducers({
    citiesReducer,
    searchReducer
});
export default AppReducer;