import {combineReducers} from "redux";
import general from "./general";
import homepage from "./homepage";
import tour from "./tour";
import catalog from "./catalog";
import tours from "./tours";

const reducers = combineReducers({
  general,
  homepage,
  tour,
  catalog,
  tours,
});

export {reducers};
