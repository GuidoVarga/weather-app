import actionTypes from '../constants/actionTypes';


const searchActions = {
    setSearchCountry(data = '') {
        console.log(data);
        return {
            type: actionTypes.SET_SEARCH_COUNTRY,
            payload: data
        }
    },

    setSearchCity(data = '') {
        return {
            type: actionTypes.SET_SEARCH_CITY,
            payload: data
        }
    },
}
export default searchActions;