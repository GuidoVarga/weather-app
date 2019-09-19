import actionTypes from '../constants/actionTypes';

const initialState = {
    city : '',
    country: '',
    countryCode: '',
    isSearchingCity: false,
    searchingCitySuccess: false,
    searchingCityFailure: false,
    hasSearchedCity: false
}

function searchReducer (state = initialState, action){
    switch(action.type){
        case actionTypes.SET_SEARCH_CITY:
            return Object.assign({}, state, {city: action.payload});
        case actionTypes.SET_SEARCH_COUNTRY:
            return Object.assign({}, state, {
                country: action.payload
            });
        case actionTypes.SEARCH_CITY_REQUEST:
          return Object.assign({}, state, {
              isSearchingCity: true,
              searchingCityFailure: false,
              searchingCitySuccess: false,
              hasSearchedCity: false
          });
        case actionTypes.SEARCH_CITY_SUCCESS:
            return Object.assign({}, state, {
                isSearchingCity: false,
                searchingCityFailure: false,
                searchingCitySuccess: true,
                hasSearchedCity: true
            })
        case actionTypes.SEARCH_CITY_FAILURE:
            return Object.assign({}, state, {
                isSearchingCity: false,
                searchingCityFailure: true,
                searchingCitySuccess: false,
                hasSearchedCity: true
            })
        default:
            return state;
    }
}
export default searchReducer;