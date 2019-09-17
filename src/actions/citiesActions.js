import actionTypes from '../constants/actionTypes';

const getCityRequest = (city = '', country = '') => ({
    type: actionTypes.GET_CITY_REQUEST,
    payload: {
      city,
      country
    }
});

const getCitySuccess = (data) => ({
    type: actionTypes.GET_CITY_SUCCESS,
    payload: data
});

const getCityFailure = (data) => ({
    type: actionTypes.GET_CITY_FAILURE,
    payload: data
});

export {
  getCityFailure,
  getCityRequest,
  getCitySuccess
};

