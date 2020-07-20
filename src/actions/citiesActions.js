import actionTypes from '../constants/actionTypes';

const fetchCityRequest = (city = '', country = '') => ({
    type: actionTypes.FETCH_CITY_REQUEST,
    payload: {
      city,
      country
    }
});

const fetchCitySuccess = (data) => ({
    type: actionTypes.FETCH_CITY_SUCCESS,
    payload: data
});

const fetchCityFailure = (data) => ({
    type: actionTypes.FETCH_CITY_FAILURE,
    payload: data
});

export {
  fetchCityFailure,
  fetchCityRequest,
  fetchCitySuccess
};

