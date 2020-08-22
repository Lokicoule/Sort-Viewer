import { sortActionDispatched } from "../store/actions/sorting";
import { setExecutionTime, setItem } from "../store/models/quickSort";
import decorator from "../helpers/decorators/sortOperation";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";
import {
  getItemsPartition,
  itemIsSorted,
  swap,
  swappersReleased,
} from "../helpers/sortHelper";
import { ItemStateColorEnum } from "../constants/item";
import { quickSortLocked } from "../store/models/lock";

export const sortOperation = (array, sortedArray) => (dispatch) => {
  const wrappedSort = decorator(quickSort)(setExecutionTime)(quickSortLocked);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray, 0, array.length - 1, []),
      latencies: 7,
    })
  );
};

function quickSort(array, sortedArray, left, right, toDispatch) {
  if (array.length > 1) {
    const index = partition(array, sortedArray, left, right, toDispatch);
    if (left < index - 1) {
      quickSort(array, sortedArray, left, index - 1, toDispatch);
    }
    if (index < right) {
      quickSort(array, sortedArray, index, right, toDispatch);
    }
  }
  return toDispatch;
}

function partition(array, sortedArray, left, right, toDispatch) {
  const pivotIndex = Math.floor((right + left) / 2);
  const pivot = array[pivotIndex];
  let i = left,
    j = right;
  toDispatch.push({
    actions: [
      ...getItemsPartition(array, left, right, setItem),
      setItem(setItemMapper(pivot, pivotIndex, ItemStateColorEnum.PIVOT)),
    ],
    waiting: true,
  });
  while (i <= j) {
    while (array[i].value < pivot.value) {
      toDispatch.push({
        actions: [setItem(cursorMapper(array, i))],
      });
      toDispatch.push({
        actions: [
          setItem(
            cursorReleasedMapper(
              array,
              i,
              itemIsSorted(sortedArray, array[i], i)
            )
          ),
        ],
      });
      i++;
    }
    while (array[j].value > pivot.value) {
      toDispatch.push({
        actions: [setItem(cursorMapper(array, j))],
      });
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
      j--;
    }
    if (i <= j) {
      toDispatch.push(...swap(array, i, j, setItem));
      toDispatch.push({
        actions: [...swappersReleased(array, sortedArray, i, j, setItem)],
      });
      i++;
      j--;
    }
  }
  return i;
}
