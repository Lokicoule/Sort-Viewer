import {
  generateRandomArray,
  sortItemsByValueAsc,
} from "../helpers/sortHelper";
import {
  setItems,
  setNbItems,
  setSortedItems,
} from "../store/models/referential";
import { setItems as setBubbleSortItems } from "../store/models/bubbleSort";
import { setItems as setSelectionSortItems } from "../store/models/selectionSort";
import { setItems as setMergeSortItems } from "../store/models/mergeSort";
import { setItems as setQuickSortItems } from "../store/models/quickSort";
import { MAXIMUM_ALLOWED_VALUE } from "../constants/array";

export const dispatchUpdatedItemsToStore = (nbItems) =>
  function (dispatch) {
    const items = generateRandomArray(nbItems, MAXIMUM_ALLOWED_VALUE);
    dispatch(setNbItems({ nbItems }));
    dispatch(setItems({ items }));
    dispatch(setBubbleSortItems({ items }));
    dispatch(setSelectionSortItems({ items }));
    dispatch(setMergeSortItems({ items }));
    dispatch(setQuickSortItems({ items }));
    dispatch(setSortedItems({ sortedItems: sortItemsByValueAsc(items) }));
  };
