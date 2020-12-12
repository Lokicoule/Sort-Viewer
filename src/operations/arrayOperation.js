import {
  generateRandomArray,
  sortItemsByValueAsc,
} from "../helpers/sortHelper";
import { setNbItems, setSortedItems } from "../store/models/referential";
import { MAXIMUM_ALLOWED_VALUE } from "../constants/array";
import { getAlgorithms } from "../store/selectors/algorithmsSelector";
import { setItems } from "../store/models/algorithms";

export const dispatchUpdatedItemsToStore = (nbItems) =>
  function (dispatch, getState) {
    const algorithms = getAlgorithms(getState());
    const items = generateRandomArray(nbItems, MAXIMUM_ALLOWED_VALUE);
    dispatch(setNbItems({ nbItems }));
    algorithms.forEach(({ algorithm }) =>
      dispatch(setItems({ algorithm, items }))
    );
    dispatch(setSortedItems({ sortedItems: sortItemsByValueAsc(items) }));
  };
