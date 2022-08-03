import {all} from "redux-saga/effects";

import general from "./general";
import homepage from "./homepage";
import tour from "./tour";
import catalog from "./catalog";
import tours from "./tours";

export function* sagas() {
  yield all([
    general,
    homepage,
    tour,
    catalog,
    tours,
  ])
}
