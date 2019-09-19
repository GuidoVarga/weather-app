//import {} from '../actions/citiesActions';
import actionTypes from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    fetchingSuccess: false,
    fetchingFailure: false,
    hasFetched: false,
    city: null,
}

function citiesReducer (state = initialState, action){
    switch(action.type){
        case actionTypes.SEARCH_CITY_SUCCESS:
            return Object.assign({}, state, {
                city: action.payload
            })
        default:
            return state;
    }
}
export default citiesReducer;