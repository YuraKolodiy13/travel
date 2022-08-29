import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as authActions from '../actions/auth'

export function* login(action) {
  try {
    const res = yield call(Api.auth.login, action.payload);
    yield put({type: authActions.LOGIN_SUCCESS, payload: res.data});
    localStorage.setItem('user', JSON.stringify(res.data));
    if(action.callback) action.callback();
  } catch (err) {
    yield put({type: authActions.LOGIN_FAIL, payload: err.response.data.error});
  }
}

export default all([
  takeLatest(authActions.LOGIN_REQUEST, login),
])
