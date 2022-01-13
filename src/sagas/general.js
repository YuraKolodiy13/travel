import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as generalActions from '../actions/general'
import {delay} from "@redux-saga/core/effects";

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
      yield delay(2000);
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
    var parsedData = parser.parseFromString(res.data, "text/html");
    const data = {
      title: parsedData.querySelector('#TP__Blocks__TourTitle').textContent,
      images: [...parsedData.querySelectorAll('.TP__gallery__images img')].map(item => item.src),
      description: parsedData.querySelector('#hotel_description_content div').textContent,
      services: parsedData.querySelector('.TP__services_list').outerHTML,
    };
    yield put({type: generalActions.GET_TOUR_SUCCESS, payload: data});
  } catch (err) {
    yield put({ type: generalActions.GET_TOUR_FAIL, payload: { error: err.message } });
  }
}

function* getOtherTours(action) {
  try {
    const res = yield call(Api.general.getOtherTours, action.payload);
    yield put({type: generalActions.GET_OTHER_TOURS_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: generalActions.GET_OTHER_TOURS_FAIL, payload: { error: err.message } });
  }
}

function* getFlightsInfo(action) {
  try {
    const res = yield call(Api.general.getFlightsInfo, action.payload);
    yield put({type: generalActions.GET_FLIGHTS_INFO_SUCCESS, payload: res.data.data.flights});
  } catch (err) {
    yield put({ type: generalActions.GET_FLIGHTS_INFO_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(generalActions.SEARCH_FORM_REQUEST, searchForm),
  takeLatest(generalActions.SEARCH_START_REQUEST, searchStart),
  takeLatest(generalActions.READ_RESULTS_REQUEST, readResults),
  takeLatest(generalActions.GET_TOUR_REQUEST, getTour),
  takeLatest(generalActions.GET_OTHER_TOURS_REQUEST, getOtherTours),
  takeLatest(generalActions.GET_FLIGHTS_INFO_REQUEST, getFlightsInfo),
])
