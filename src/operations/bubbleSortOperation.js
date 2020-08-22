import { setExecutionTime, setItem } from "../store/models/bubbleSort";
import { sortActionDispatched } from "../store/actions/sorting";
import { ItemStateColorEnum } from "../constants/item";
import { swap, itemIsSorted } from "../helpers/sortHelper";
import decorator from "../helpers/decorators/sortOperation";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";
import { bubbleSortLocked } from "../store/models/lock";

export const sortOperation = (array, sortedArray) => (dispatch) => {
  const wrappedSort = decorator(bubbleSort)(setExecutionTime)(bubbleSortLocked);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray),
      latencies: 4,
    })
  );
};

function bubbleSort(array, sortedArray) {
  let lastUnsortedIdx = array.length - 1;
  let toDispatch = [];
  let sorted = false;
  while (!sorted) {
    sorted = partition(array, sortedArray, lastUnsortedIdx, toDispatch);
    toDispatch.push({
      actions: [
        setItem(
          setItemMapper(
            array[lastUnsortedIdx],
            lastUnsortedIdx--,
            ItemStateColorEnum.SORTED
          )
        ),
      ],
    });
  }

  return toDispatch;
}

function partition(array, sortedArray, lastUnsortedIdx, toDispatch) {
  let sorted = true;

  for (let i = 0; i < lastUnsortedIdx; i++) {
    toDispatch.push({
      actions: [setItem(cursorMapper(array, i))],
    });
    if (array[i].value > array[i + 1].value) {
      toDispatch.push(...swap(array, i, i + 1, setItem));
      sorted = false;
    }
    toDispatch.push({
      actions: [
        setItem(
          cursorReleasedMapper(array, i, itemIsSorted(sortedArray, array[i], i))
        ),
      ],
    });
  }
  return sorted;
}
