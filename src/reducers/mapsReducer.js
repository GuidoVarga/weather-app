import actionTypes from '../constants/actionTypes';

const initialState = {
    isFetchingMap: false,
    fetchedMap: false,
    fetchSuccessMap: false,
    fetchFailureMap: false,
    map: null
}

const mapsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_MAP_REQUEST:
            return Object.assign({}, state, {
                isFetchingMap: true,
                fetchedMap: false,
                fetchSuccessMap: false,
                fetchFailureMap: false
            });
        case actionTypes.FETCH_MAP_SUCCESS:
            return Object.assign({}, state, {
                map: action.payload,
                isFetchingMap: false,
                fetchedMap: true,
                fetchSuccessMap: true,
                fetchFailureMap: false
            });
        case actionTypes.FETCH_MAP_FAILURE:
            return Object.assign({}, state, {
                isFetchingMap: false,
                fetchedMap: true,
                fetchSuccessMap: false,
                fetchFailureMap: true
            })
        case actionTypes.FETCH_MAP_CANCEL_REQUEST:
            return Object.assign({}, state, {
                isFetchingMap: false
            })
        default:
            return state;
    }
}

export default mapsReducer;