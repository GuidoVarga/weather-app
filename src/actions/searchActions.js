import actionTypes from '../constants/actionTypes';

const setSearchCountry = (data = '')=>{
        console.log(data);
        return ({
            type: actionTypes.SET_SEARCH_COUNTRY,
            payload: data
        })
}

const setSearchCity = (data = '') => {
        return ({
            type: actionTypes.SET_SEARCH_CITY,
            payload: data
        });
}

export {
    setSearchCity,
    setSearchCountry
}