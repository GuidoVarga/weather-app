import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import * as citiesActions from '../actions/citiesActions';
import { getCity } from '../api/citiesApi';
import countryCode from '../constants/countryCode';

function* cityRequested(action) {
    const params = action.payload;
    const code = countryCode.find((country) => country.name === params.country).code;
    const { city } = params;
    try {
      const result = yield call(getCity, {city, code});
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
