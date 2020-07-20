import { spawn, takeEvery, select, cal, fork } from 'redux-saga/effects';
import {citiesSaga} from './citiesSaga';
import {mapsSaga} from './mapsSaga';

function* watchAndLog() {
    yield takeEvery('*', function* logger(action) {
      const state = yield select()
  
      console.log('action', action)
      console.log('state after', state)
    })
  }

function* rootSaga() {
    yield spawn(citiesSaga);
    yield spawn(mapsSaga);
    yield spawn(watchAndLog);
}

/*
function* rootSaga() {
  const sagas = [
    citiesSaga,
    mapsSaga,
    watchAndLog,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}*/

export default rootSaga;