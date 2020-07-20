import actionTypes from '../constants/actionTypes';

const fetchMapRequest = (city = '', country = '') => ({
    type: actionTypes.FETCH_MAP_REQUEST,
    payload: {
        city,
        country
    }
});

const fetchMapSuccess = (data) => ({
    type: actionTypes.FETCH_MAP_SUCCESS,
    payload: data
});

const fetchMapFailure = (data) => ({
    type: actionTypes.FETCH_MAP_FAILURE,
    payload: data
});

const fetchMapCancelRequest = () => ({
    type: actionTypes.FETCH_MAP_CANCEL_REQUEST
});

const fetchMapCancelSuccess = () => ({
    type: actionTypes.FETCH_MAP_CANCEL_REQUEST_SUCCESS
})

export {
    fetchMapFailure,
    fetchMapSuccess,
    fetchMapRequest,
    fetchMapCancelRequest,
    fetchMapCancelSuccess
}