import {all} from "redux-saga/effects";

import general from "./general";

console.log(general, 'general')

export function* sagas() {
  yield all([
    general,
  ])
}
