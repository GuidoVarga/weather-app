import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import {fetchCitySuccess, fetchCityFailure} from '../actions/citiesActions';
import citiesApi from '../api/citiesApi';
import { getCodeFromCountry } from '../helpers/searchHelper';



function* fetchCityRequested(action) {
    const {payload: {city, country}} = action;
    const code = yield call(getCodeFromCountry, country);
    const result = yield call(citiesApi.getCity, {city, code});
    if(result && !result.cod){
      yield put(fetchCitySuccess(result));
    }
    else {
      yield put(fetchCityFailure(result));
    }

}

function* citiesSaga() {
    yield takeLatest(actionTypes.FETCH_CITY_REQUEST, fetchCityRequested);
}

export {
  citiesSaga,
  fetchCityRequested
};
