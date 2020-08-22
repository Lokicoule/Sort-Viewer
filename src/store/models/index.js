import { combineReducers } from "redux";

import algorithms from "./algorithms";
import bubbleSort from "./bubbleSort";
import selectionSort from "./selectionSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import referential from "./referential";
import lock from "./lock";
import speed from "./speed";

export default combineReducers({
  algorithms,
  bubbleSort,
  selectionSort,
  mergeSort,
  quickSort,
  referential,
  lock,
  speed,
});
