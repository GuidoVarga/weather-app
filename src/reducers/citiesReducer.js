import actionTypes from '../constants/actionTypes';

const initialState = {
    city: null,
    isFetchingCity: false,
    fetchCitySuccess: false,
    fetchCityFailure: false,
    hasFetchedCity: false
}

function citiesReducer (state = initialState, action){
    switch(action.type){
        case actionTypes.FETCH_CITY_SUCCESS:
            return Object.assign({}, state, {
                city: action.payload,
                isFetchingCity: false,
                fetchCityFailure: false,
                fetchCitySuccess: true,
                hasFetchedCity: true
            })
        case actionTypes.FETCH_CITY_REQUEST:
          return Object.assign({}, state, {
            isFetchingCity: true,
            fetchCityFailure: false,
              fetchCitySuccess: false,
              hasFetchedCity: false
          });
        case actionTypes.FETCH_CITY_FAILURE:
            return Object.assign({}, state, {
                isFetchingCity: false,
                fetchCityFailure: true,
                fetchCitySuccess: false,
                hasFetchedCity: true
            })
        default:
            return state;
    }
}
export default citiesReducer;