import { call, put } from 'redux-saga/effects';
import {searchForm} from "./general";
import {Api} from "../api";
import {SEARCH_FORM_FAIL, SEARCH_FORM_SUCCESS} from "../actions/general";
import {DEFAULT_SEARCH_VALUE} from "../helpers/constants";
import {searchFormMock} from "../mock/searchForm";

describe('testing general saga', () => {
  const action = {payload: DEFAULT_SEARCH_VALUE};
  test('success triggers success action with searchForm', () => {

    const generator = searchForm(action);
    const res = searchFormMock;

    expect(generator.next().value).toEqual(call(Api.general.searchForm, action.payload));
    expect(generator.next(res).value).toEqual(put({type: SEARCH_FORM_SUCCESS, payload: res.data.data}));
    expect(generator.next().done).toEqual(true);
  });

  test('failure triggers failure action', () => {
    const generator = searchForm(action);
    const res = {};

    expect(generator.next().value).toEqual(call(Api.general.searchForm, action.payload));
    expect(generator.next(res).value).toEqual(put({type: SEARCH_FORM_FAIL, payload: {
      error: "Cannot read property 'data' of undefined"
    }}));
    expect(generator.next().done).toEqual(true);
  });

  // test('should add new todo item with "addTodo" action', () => {
  //   const action = { type: addTodo.type, payload: 'Hello' };
  //
  //   const result = todoReducer([], action);
  //
  //   expect(result[0].text).toBe('Hello');
  // });
});