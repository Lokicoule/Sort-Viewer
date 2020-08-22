import * as bubbleSort from "../operations/bubbleSortOperation";
import * as selectionSort from "../operations/selectionSortOperation";
import * as mergeSort from "../operations/mergeSortOperation";
import * as quickSort from "../operations/quickSortOperation";

import { getModelItems } from "../store/selectors/modelSelector";

const operations = {
  bubbleSort: bubbleSort.sortOperation,
  selectionSort: selectionSort.sortOperation,
  mergeSort: mergeSort.sortOperation,
  quickSort: quickSort.sortOperation,
};

export const sortOperation = (algorithm, sortedArray) =>
  function (dispatch, getState) {
    const items = getModelItems(algorithm)(getState());
    dispatch(operations[algorithm](items, sortedArray));
  };
