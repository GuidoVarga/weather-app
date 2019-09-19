import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import * as searchActions from '../actions/searchActions';
import { getCity } from '../api/citiesApi';
import { getCodeFromCountry } from '../helpers/searchHelper';


function* searchCityRequested(action) {
    const params = action.payload;
    const code = getCodeFromCountry(params.country);
    console.log(code);
    const { city } = params;
    try {
      const result = yield call(getCity, {city, code});
      yield put(searchActions.searchCitySuccess(result));
    } catch (error) {
      yield put(searchActions.searchCityFailure(error));
    }
}

function* searchCityRequestedSaga() {
    yield takeLatest(actionTypes.SEARCH_CITY_REQUEST, searchCityRequested);
}

function* searchSaga() {
    yield spawn(searchCityRequestedSaga);
}

export default searchSaga;
