import actionTypes from '../constants/actionTypes';

const setSearchCountry = (data = '') => ({
    type: actionTypes.SET_SEARCH_COUNTRY,
    payload: data
})

const setSearchCity = (data = '') => ({
    type: actionTypes.SET_SEARCH_CITY,
    payload: data
});

const searchCityRequest = (city = '', country = '') => ({
    type: actionTypes.SEARCH_CITY_REQUEST,
    payload: {
      city,
      country
    }
});

const searchCitySuccess = (data) => ({
    type: actionTypes.SEARCH_CITY_SUCCESS,
    payload: data
});

const searchCityFailure = (data) => ({
    type: actionTypes.SEARCH_CITY_FAILURE,
    payload: data
});

export {
    searchCityFailure,
    searchCityRequest,
    searchCitySuccess,
    setSearchCity,
    setSearchCountry
}