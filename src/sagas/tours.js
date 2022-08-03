import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as toursActions from '../actions/tours'

function* getToursByCountry(action) {
  try {
    const res = yield call(Api.tours.getToursByCountry, action.payload);
    yield put({type: toursActions.GET_TOURS_BY_COUNTRY_SUCCESS, payload: res.data.data.topHotels});
  } catch (err) {
    yield put({ type: toursActions.GET_TOURS_BY_COUNTRY_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(toursActions.GET_TOURS_BY_COUNTRY_REQUEST, getToursByCountry),
])
