import {all} from "redux-saga/effects";

import general from "./general";

export function* sagas() {
  yield all([
    general,
  ])
}
