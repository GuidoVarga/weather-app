import actionTypes from '../constants/actionTypes';

const initialState = {
    city : '',
    country: '',
    countryCode: ''
}

function searchReducer (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_SEARCH_CITY:
            return Object.assign({}, state, {city: action.payload});
        case actionTypes.SET_SEARCH_COUNTRY:
            return Object.assign({}, state, {
                country: action.payload
            });
        default:
            return state;
    }
}
export default searchReducer;