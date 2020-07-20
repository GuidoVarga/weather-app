import { call, put, spawn, takeLatest, takeEvery, take, fork, cancel, cancelled, race, delay,} from 'redux-saga/effects';
import { fetchMapSuccess, fetchMapFailure, fetchMapCancelSuccess } from '../actions/mapsActions';
import { getMap } from '../api/mapsApi';
import { getCodeFromCountry } from '../helpers/searchHelper';
import actionTypes from '../constants/actionTypes';


function* fetchMapRequested(payload) {
    const params = payload;
    const code = getCodeFromCountry(params.country);
    console.log(code);
    const { city } = params;
    try {
      const result = yield call(getMap, {city, code});
      yield put(fetchMapSuccess(result));
    } catch (error) {
      yield put(fetchMapFailure(error));
    } finally {
      if(yield cancelled()){
      }
    }
}


function* mapsSaga() {
  //yield takeLatest(actionTypes.FETCH_MAP_REQUEST, fetchMapRequested);
  while (true) {
   const {payload} = yield take(actionTypes.FETCH_MAP_REQUEST);
   const task = yield fork(fetchMapRequested, payload);
   const action = yield take([actionTypes.FETCH_MAP_CANCEL_REQUEST, actionTypes.FETCH_MAP_SUCCESS, actionTypes.FETCH_MAP_FAILURE]);
   if (actionTypes.FETCH_MAP_CANCEL_REQUEST === action.type ) {
      yield cancel(task);
   }/*
   else if (actionTypes.FETCH_MAP_FAILURE === action.type) {
      yield 'ha fallado';
   }*/
  }
}


//V2
/*
function* fetchMapRequested(payload) {
  const params = payload;
  const code = getCodeFromCountry(params.country);
  console.log(code);
  const { city } = params;
  try {
    const result = yield call(getMap, {city, code});
    yield put(fetchMapSuccess(result));
  } catch (error) {
    yield put(fetchMapFailure(error));
  }
}


function* mapsSaga() {
    //yield takeLatest(actionTypes.FETCH_MAP_REQUEST, fetchMapRequested);
    while (true) {
     const {payload} = yield take(actionTypes.FETCH_MAP_REQUEST);
     const {maps, canceled} = yield race({
       maps: call(fetchMapRequested, payload),
       canceled: take(actionTypes.FETCH_MAP_CANCEL_REQUEST)
     });
     if (canceled) {
        console.log('CANCELED');
        yield put(fetchMapCancelSuccess());
     }

    }
}*/
export {
  mapsSaga,
  fetchMapRequested
};