import { ItemStateColorEnum } from "../constants/item";
import {
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";
import {
  getIndexById,
  getItemsPartition,
  itemIsSorted,
  swap,
  swappersReleased,
} from "../helpers/sortHelper";
import decorator from "../helpers/decorators/sortOperation";
import { sortActionDispatched } from "../store/actions/sorting";
import { setExecutionTime, setItem } from "../store/models/mergeSort";
import { mergeSortLocked } from "../store/models/lock";

export const sortOperation = (array, sortedArray) => (dispatch) => {
  const wrappedSort = decorator(mergeSort)(setExecutionTime)(mergeSortLocked);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray, 0, array.length - 1, []),
      latencies: 4,
    })
  );
};

const mergeSort = (array, sortedArray, startIdx, endIdx, toDispatch) => {
  if (startIdx >= endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(array, sortedArray, startIdx, middleIdx, toDispatch);
  mergeSort(array, sortedArray, middleIdx + 1, endIdx, toDispatch);

  return merge(array, sortedArray, startIdx, middleIdx, endIdx, toDispatch);
};

function merge(array, sortedArray, startIdx, middleIdx, endIdx, toDispatch) {
  let temp = [];
  let accLeft = startIdx;
  let accRight = middleIdx + 1;
  let accTemp = 0;
  toDispatch.push({
    actions: [...getItemsPartition(array, startIdx, endIdx, setItem)],
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
    const j = getIndexById(array, temp[i - startIdx].id);
    toDispatch.push({
      actions: [
        setItem(setItemMapper(array[i], i, ItemStateColorEnum.CURRENT)),
        setItem(setItemMapper(array[j], j, ItemStateColorEnum.CURRENT)),
      ],
    });
    if (i !== j) {
      toDispatch.push(...swap(array, i, j, setItem));
      toDispatch.push({
        actions: [...swappersReleased(array, sortedArray, i, j, setItem)],
      });
    } else {
      toDispatch.push({
        actions: [
          setItem(
            cursorReleasedMapper(
              array,
              j,
              itemIsSorted(sortedArray, array[j], j)
            )
          ),
        ],
      });
    }
  }

  return toDispatch;
}
