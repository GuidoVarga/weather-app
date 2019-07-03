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
        case actionTypes.GET_CITY_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                fetchingFailure: false,
                fetchingSuccess: false,
                hasFetched: false
            });
        case actionTypes.GET_CITY_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                hasFetched: true,
                fetchingSuccess: true,
                city: action.payload
            })
        default:
            return state;
    }
}
export default citiesReducer;