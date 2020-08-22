import { setExecutionTime, setItem } from "../store/models/selectionSort";
import { sortActionDispatched } from "../store/actions/sorting";
import decorator from "../helpers/decorators/sortOperation";
import { ItemStateColorEnum } from "../constants/item";
import { itemIsSorted, swap } from "../helpers/sortHelper";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";
import { selectionSortLocked } from "../store/models/lock";

export const sortOperation = (array, sortedArray) => (dispatch) => {
  const wrappedSort = decorator(selectionSort)(setExecutionTime)(
    selectionSortLocked
  );
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray),
      latencies: 5,
    })
  );
};

function selectionSort(array, sortedArray) {
  let toDispatch = [];
  for (let i = 0; i < array.length; i++) {
    partition(i, toDispatch, array, sortedArray);
    toDispatch.push({
      actions: [setItem(setItemMapper(array[i], i, ItemStateColorEnum.SORTED))],
    });
  }
  return toDispatch;
}

function partition(lastUnsortedIdx, toDispatch, array, sortedArray) {
  const nbElements = array.length;
  let minIdx = lastUnsortedIdx;

  for (let i = lastUnsortedIdx; i < nbElements; i++) {
    toDispatch.push({
      actions: [setItem(cursorMapper(array, i))],
    });
    if (array[i].value < array[minIdx].value) {
      toDispatch.push({
        actions: [
          setItem(
            cursorReleasedMapper(
              array,
              minIdx,
              itemIsSorted(sortedArray, array[minIdx], minIdx)
            )
          ),
          setItem(getMinItemAction(array, i)),
        ],
      });
      minIdx = i;
    }
    toDispatch.push({
      actions: [getReleaseCursorAction(i, minIdx, array, sortedArray)],
    });
  }
  toDispatch.push(...swap(array, lastUnsortedIdx, minIdx, setItem));
}

function getMinItemAction(array, i) {
  return setItemMapper(array[i], i, ItemStateColorEnum.PIVOT);
}

function getReleaseCursorAction(i, minIdx, array, sortedArray) {
  return (
    (i !== minIdx &&
      setItem(
        cursorReleasedMapper(array, i, itemIsSorted(sortedArray, array[i], i))
      )) ||
    setItem(setItemMapper(array[i], i, ItemStateColorEnum.PIVOT))
  );
}
