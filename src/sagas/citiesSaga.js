import { call, put, spawn, takeLatest } from 'redux-saga/effects';
//import * as types from 'actions/actionTypes';
import actionTypes from '../constants/actionTypes';
import citiesActions from '../actions/citiesActions';
import { getCity } from '../api/citiesApi';
import countryCode from '../constants/countryCode';

function* cityRequested(action) {
    const params = action.payload;
    //console.log(countryCode.find((country) => country.name === 'Argentina').code);
    try {
      const result = yield call(getCity, params);
      yield put(citiesActions.getCitySuccess(result));
    } catch (error) {
      yield put(citiesActions.getCityFailure(error));
    }
}
 
function* cityRequestedSaga() {
    yield takeLatest(actionTypes.GET_CITY_REQUEST, cityRequested);
}

function* citiesSaga() {
    yield spawn(cityRequestedSaga);
}
 
export default citiesSaga;
