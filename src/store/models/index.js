import { combineReducers } from "redux";

import algorithms from "./algorithms";
import referential from "./referential";
import lock from "./lock";
import speed from "./speed";

export default combineReducers({
  algorithms,
  referential,
  lock,
  speed,
});
