import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as generalActions from '../actions/general'

export function* searchForm(action) {
  try {
    const res = yield call(Api.general.searchForm, action.payload);
    yield put({type: generalActions.SEARCH_FORM_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: generalActions.SEARCH_FORM_FAIL, payload: { error: err.message } });
  }
}

function* getFlightsInfo(action) {
  try {
    const res = yield call(Api.general.getFlightsInfo, action.payload);
    yield put({type: generalActions.GET_FLIGHTS_INFO_SUCCESS, payload: {[action.payload.id]: res.data.data.flights}});
  } catch (err) {
    yield put({ type: generalActions.GET_FLIGHTS_INFO_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(generalActions.SEARCH_FORM_REQUEST, searchForm),
  takeLatest(generalActions.GET_FLIGHTS_INFO_REQUEST, getFlightsInfo),
])
