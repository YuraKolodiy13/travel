import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as homepageActions from '../actions/homepage'

function* getHotTours(action) {
  try {
    const res = yield call(Api.homepage.getHotTours, action.payload);
    yield put({type: homepageActions.GET_HOT_TOURS_SUCCESS, payload: res.data.results});
  } catch (err) {
    yield put({ type: homepageActions.GET_HOT_TOURS_FAIL, payload: { error: err.message } });
  }
}

function* getRecommendedTours(action) {
  try {
    const res = yield call(Api.homepage.getRecommendedTours, action.payload);
    yield put({type: homepageActions.GET_RECOMMENDED_TOURS_SUCCESS, payload: res.data.results});
  } catch (err) {
    yield put({ type: homepageActions.GET_RECOMMENDED_TOURS_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(homepageActions.GET_HOT_TOURS_REQUEST, getHotTours),
  takeLatest(homepageActions.GET_RECOMMENDED_TOURS_REQUEST, getRecommendedTours),
])
