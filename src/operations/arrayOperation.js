import { setNbItems, setSortedItems } from "../store/models/referential";
import { MAXIMUM_ALLOWED_VALUE } from "../constants/array";
import { getAlgorithms } from "../store/selectors/algorithmsSelector";
import { setItems } from "../store/models/algorithms";
import SortHelper from "../helpers/SortHelper";

export const dispatchUpdatedItemsToStore = (nbItems) =>
  function (dispatch, getState) {
    const algorithms = getAlgorithms(getState());
    const items = SortHelper.generateRandomArray(
      nbItems,
      MAXIMUM_ALLOWED_VALUE
    );
    dispatch(setNbItems({ nbItems }));
    algorithms.forEach(({ algorithm }) =>
      dispatch(setItems({ algorithm, items }))
    );
    dispatch(
      setSortedItems({ sortedItems: SortHelper.sortItemsByValueAsc(items) })
    );
  };
