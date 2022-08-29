import {combineReducers} from "redux";
import general from "./general";
import homepage from "./homepage";
import tour from "./tour";
import catalog from "./catalog";
import tours from "./tours";
import auth from "./auth";

const reducers = combineReducers({
  general,
  homepage,
  tour,
  catalog,
  tours,
  auth,
});

export {reducers};
