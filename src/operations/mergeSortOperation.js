import { ItemStateColorEnum } from "../constants/item";
import {
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";

import decorator from "../helpers/decorators/sortOperation";
import { sortActionDispatched } from "../store/actions/sorting";
import OperationHelper from "../helpers/OperationHelper";
import SortHelper from "../helpers/SortHelper";

export const sortOperation = (array, sortedArray, algorithm) => (dispatch) => {
  const wrappedSort = decorator(mergeSort)(algorithm);
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
      latencies: 4,
    })
  );
};

const mergeSort = (
  array,
  sortedArray,
  startIdx,
  endIdx,
  toDispatch,
  algorithm
) => {
  if (startIdx >= endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(array, sortedArray, startIdx, middleIdx, toDispatch, algorithm);
  mergeSort(array, sortedArray, middleIdx + 1, endIdx, toDispatch, algorithm);

  return merge(
    array,
    sortedArray,
    startIdx,
    middleIdx,
    endIdx,
    toDispatch,
    algorithm
  );
};

function merge(
  array,
  sortedArray,
  startIdx,
  middleIdx,
  endIdx,
  toDispatch,
  algorithm
) {
  let temp = [];
  let accLeft = startIdx;
  let accRight = middleIdx + 1;
  let accTemp = 0;
  toDispatch.push({
    actions: [
      ...OperationHelper.getItemsPartition(array, startIdx, endIdx, algorithm),
    ],
  });
  while (accLeft <= middleIdx && accRight <= endIdx) {
    if (array[accLeft].value <= array[accRight].value) {
      temp[accTemp++] = array[accLeft++];
    } else {
      temp[accTemp++] = array[accRight++];
    }
  }
  while (accLeft <= middleIdx) {
    temp[accTemp++] = array[accLeft++];
  }
  while (accRight <= endIdx) {
    temp[accTemp++] = array[accRight++];
  }
  for (let i = startIdx; i <= endIdx; i++) {
    const j = SortHelper.getIndexById(array, temp[i - startIdx].id);
    toDispatch.push({
      actions: [
        setItemMapper(algorithm, array[i], i, ItemStateColorEnum.CURRENT),
        setItemMapper(algorithm, array[j], j, ItemStateColorEnum.CURRENT),
      ],
    });
    if (i !== j) {
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
    } else {
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
    }
  }

  return toDispatch;
}
