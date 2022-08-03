import {call, put, all, takeLatest} from "redux-saga/effects";
import {Api} from "../api";
import * as tourActions from '../actions/tour'

function* getTour(action) {
  try {
    const res = yield call(Api.tour.getTour, action.payload);
    const parser = new DOMParser();
    const parsedData = parser.parseFromString(res.data, "text/html");
    const data = {
      title: parsedData.querySelector('#TP__Blocks__TourTitle').textContent,
      images: [...parsedData.querySelectorAll('.TP__gallery__images img')].map(item => item.src),
      description: parsedData.querySelector('#hotel_description_content div')?.outerHTML,
      services: parsedData.querySelector('.TP__services_list')?.outerHTML,
      hotelId: +parsedData.querySelector('meta[property="og:image"]')?.content.match(/([0-9]{5})/)[1],
    };
    yield put({type: tourActions.GET_TOUR_REVIEWS_REQUEST, payload: {mapKey: data.hotelId, pageindex: 1}});
    yield put({type: tourActions.GET_TOUR_SUCCESS, payload: data});
  } catch (err) {
    yield put({ type: tourActions.GET_TOUR_FAIL, payload: { error: err.message } });
  }
}

function* getOtherTours(action) {
  try {
    const res = yield call(Api.tour.getOtherTours, action.payload);
    yield put({type: tourActions.GET_OTHER_TOURS_SUCCESS, payload: res.data.data});
  } catch (err) {
    yield put({ type: tourActions.GET_OTHER_TOURS_FAIL, payload: { error: err.message } });
  }
}

function* getTourReviews(action) {
  try {
    const res = yield call(Api.tour.getTourReviews, action.payload);
    yield put({type: tourActions.GET_TOUR_REVIEWS_SUCCESS, payload: JSON.parse(res.data.d)});
  } catch (err) {
    yield put({ type: tourActions.GET_TOUR_REVIEWS_FAIL, payload: { error: err.message } });
  }
}

export default all([
  takeLatest(tourActions.GET_TOUR_REQUEST, getTour),
  takeLatest(tourActions.GET_OTHER_TOURS_REQUEST, getOtherTours),
  takeLatest(tourActions.GET_TOUR_REVIEWS_REQUEST, getTourReviews),
])
