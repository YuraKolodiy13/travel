import { combineReducers } from "redux";
import general from "./general";

const reducers = combineReducers({
  general: general
});

export { reducers };
