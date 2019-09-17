import actionTypes from '../constants/actionTypes';

const setSearchCountry = (data = '') => ({
    type: actionTypes.SET_SEARCH_COUNTRY,
    payload: data
})

const setSearchCity = (data = '') => ({
    type: actionTypes.SET_SEARCH_CITY,
    payload: data
});

export {
    setSearchCity,
    setSearchCountry
}