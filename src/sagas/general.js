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
    if(!res.data.data.hasResult){
      yield put({type: generalActions.READ_RESULTS_REQUEST, payload: action.payload});
    }
    yield put({type: generalActions.READ_RESULTS_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: generalActions.READ_RESULTS_FAIL, payload: { error: err.message } });
  }
}

function* getTour(action) {
  try {
    const res = yield call(Api.general.getTour, action.payload);
    var parser = new DOMParser();
    var doc2 = parser.parseFromString(res.data, "text/html");
    const data = {
      title: doc2.querySelector('#TP__Blocks__TourTitle').textContent,
      images: [...doc2.querySelectorAll('.TP__gallery__images img')].map(item => item.src),
      description: doc2.querySelector('#hotel_description_content div').textContent,
      services: doc2.querySelector('.TP__services_list').outerHTML,
    };
    yield put({type: generalActions.GET_TOUR_SUCCESS, payload: data});
  } catch (err) {
    yield put({ type: generalActions.GET_TOUR_FAIL, payload: { error: err.message } });
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

function* getTourSaga() {
  yield takeLatest(generalActions.GET_TOUR_REQUEST, getTour);
}

export function* general() {
  yield all([
    call(searchFormSaga),
    call(searchStartSaga),
    call(readResultsSaga),
    call(getTourSaga),
  ]);
}
