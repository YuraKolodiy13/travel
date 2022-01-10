import {call, all} from "redux-saga/effects";

import {general} from "./general";

export function* sagas() {
  yield all([
    call(general),
  ]);
}
