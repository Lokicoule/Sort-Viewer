import { sortActionDispatched } from "../store/actions/sorting";
import decorator from "../helpers/decorators/sortOperation";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";

import { ItemStateColorEnum } from "../constants/item";
import SortHelper from "../helpers/SortHelper";
import OperationHelper from "../helpers/OperationHelper";

export const sortOperation = (array, sortedArray, algorithm) => (dispatch) => {
  const wrappedSort = decorator(quickSort)(algorithm);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort(
        [...array],
        sortedArray,
        0,
        array.length - 1,
        [],
        algorithm
      ),
      latencies: 7,
    })
  );
};

function quickSort(array, sortedArray, left, right, toDispatch, algorithm) {
  if (array.length > 1) {
    const index = partition(
      array,
      sortedArray,
      left,
      right,
      toDispatch,
      algorithm
    );
    if (left < index - 1) {
      quickSort(array, sortedArray, left, index - 1, toDispatch, algorithm);
    }
    if (index < right) {
      quickSort(array, sortedArray, index, right, toDispatch, algorithm);
    }
  }
  return toDispatch;
}

function partition(array, sortedArray, left, right, toDispatch, algorithm) {
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = array[pivotIndex];
  let i = left,
    j = right;
  toDispatch.push({
    actions: [
      ...OperationHelper.getItemsPartition(array, left, right, algorithm),
      setItemMapper(algorithm, pivot, pivotIndex, ItemStateColorEnum.PIVOT),
    ],
    waiting: true,
  });
  while (i <= j) {
    while (array[i].value < pivot.value) {
      toDispatch.push({
        actions: [cursorMapper(algorithm, array, i)],
      });
      toDispatch.push({
        actions: [
          cursorReleasedMapper(
            algorithm,
            array,
            i,
            SortHelper.itemIsSorted(sortedArray, array[i], i)
          ),
        ],
      });
      i++;
    }
    while (array[j].value > pivot.value) {
      toDispatch.push({
        actions: [cursorMapper(algorithm, array, j)],
      });
      toDispatch.push({
        actions: [
          cursorReleasedMapper(
            algorithm,
            array,
            j,
            SortHelper.itemIsSorted(sortedArray, array[j], j)
          ),
        ],
      });
      j--;
    }
    if (i <= j) {
      toDispatch.push(...OperationHelper.swap(array, i, j, algorithm));
      toDispatch.push({
        actions: [
          ...OperationHelper.swappersReleased(
            array,
            sortedArray,
            i,
            j,
            algorithm
          ),
        ],
      });
      i++;
      j--;
    }
  }
  return i;
}
