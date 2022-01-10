import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as generalActions from '../actions/general'

function* searchForm(action) {
  try {
    const res = yield call(Api.general.searchForm, action.payload);
    yield put({type: generalActions.SEARCH_FORM_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: generalActions.SEARCH_FORM_FAIL, payload: { error: err.message } });
  }
}

function* searchStart(action) {
  try {
    const res = yield call(Api.general.searchStart, action.payload);
    yield put({type: generalActions.SEARCH_START_SUCCESS, payload: res.data.data});
    yield put({type: generalActions.READ_RESULTS_REQUEST, payload: {
      body: {
        firstCount: 10,
        hashId: res.data.data.hash,
        mapKey: 0,
        offset: 0,
        partnerType: "",
        show_type: "",
        sort: "",
        sortType: 1
      }
    }})
  } catch (err) {
    yield put({ type: generalActions.SEARCH_START_FAIL, payload: { error: err.message } });
  }
}


function* readResults(action) {
  try {
    const res = yield call(Api.general.readResults, action.payload);
    yield put({type: generalActions.READ_RESULTS_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: generalActions.READ_RESULTS_FAIL, payload: { error: err.message } });
  }
}

function* searchFormSaga() {
  yield takeLatest(generalActions.SEARCH_FORM_REQUEST, searchForm);
}

function* searchStartSaga() {
  yield takeLatest(generalActions.SEARCH_START_REQUEST, searchStart);
}

function* readResultsSaga() {
  yield takeLatest(generalActions.READ_RESULTS_REQUEST, readResults);
}

export function* general() {
  yield all([
    call(searchFormSaga),
    call(searchStartSaga),
    call(readResultsSaga),
  ]);
}
