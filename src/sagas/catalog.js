import {call, put, all, takeLatest, delay} from "redux-saga/effects";
import {Api} from "../api";
import * as catalogActions from '../actions/catalog'

function* searchStart(action) {
  try {
    const res = yield call(Api.catalog.searchStart, action.payload);
    yield put({type: catalogActions.SEARCH_START_SUCCESS, payload: res.data.data});
    yield put({type: catalogActions.READ_RESULTS_REQUEST, payload: {firstCount: 10, hashId: res.data.data.hash}})
    yield put({type: catalogActions.READ_FILTERS_REQUEST, payload: {hashId: res.data.data.hash}})
  } catch (err) {
    yield put({ type: catalogActions.SEARCH_START_FAIL, payload: { error: err.message } });
  }
}

let requestCount = 0;

function* readResults(action) {
  try {
    const res = yield call(Api.catalog.readResults, action.payload);
    if(res.data.data.hasMore && res.data.data.sResult.length < 10 && requestCount < 3){
      requestCount++;
      yield delay(5000);
      yield put({type: catalogActions.READ_FILTERS_REQUEST, payload: action.payload})
      yield put({type: catalogActions.READ_RESULTS_REQUEST, payload: action.payload})
    }else {
      yield put({type: catalogActions.READ_RESULTS_SUCCESS, payload: res.data.data})
    }
  } catch (err) {
    yield put({ type: catalogActions.READ_RESULTS_FAIL, payload: { error: err.message } });
  }
}

function* readFilters(action) {
  try {
    const res = yield call(Api.catalog.readFilters, action.payload);
    yield put({type: catalogActions.READ_FILTERS_SUCCESS, payload: res.data.data})
  } catch (err) {
    yield put({ type: catalogActions.READ_FILTERS_FAIL, payload: { error: err.message } });
  }
}

function* readFilteredResults(action) {
  try {
    const res = yield call(Api.catalog.readFilteredResults, action.payload);
    yield put({type: catalogActions.READ_FILTERED_RESULTS_SUCCESS, payload: res.data.data})
  } catch (err) {
    yield put({ type: catalogActions.READ_FILTERED_RESULTS_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(catalogActions.SEARCH_START_REQUEST, searchStart),
  takeLatest(catalogActions.READ_RESULTS_REQUEST, readResults),
  takeLatest(catalogActions.READ_FILTERS_REQUEST, readFilters),
  takeLatest(catalogActions.READ_FILTERED_RESULTS_REQUEST, readFilteredResults),
])
