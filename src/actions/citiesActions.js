import actionTypes from '../constants/actionTypes';

const citiesActions = {
    getCityRequest(data = null) {
        return {
            type: actionTypes.GET_CITY_REQUEST,
            payload: data
        }
    },
    
    getCitySuccess(data) {
        return {
            type: actionTypes.GET_CITY_SUCCESS,
            payload: data
        }
    },
    
    getCityFailure(data) {
        return {
            type: actionTypes.GET_CITY_FAILURE,
            payload: data
        }
    },
}
export default citiesActions;

