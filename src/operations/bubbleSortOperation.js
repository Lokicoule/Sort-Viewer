import { sortActionDispatched } from "../store/actions/sorting";
import { ItemStateColorEnum } from "../constants/item";
import { swap, itemIsSorted } from "../helpers/sortHelper";
import decorator from "../helpers/decorators/sortOperation";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";

export const sortOperation = (array, sortedArray, algorithm) => (dispatch) => {
  const wrappedSort = decorator(bubbleSort)(algorithm);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray, algorithm),
      latencies: 4,
    })
  );
};

function bubbleSort(array, sortedArray, algorithm) {
  let lastUnsortedIdx = array.length - 1;
  let toDispatch = [];
  let sorted = false;
  while (!sorted) {
    sorted = partition(
      array,
      sortedArray,
      lastUnsortedIdx,
      toDispatch,
      algorithm
    );
    toDispatch.push({
      actions: [
        setItemMapper(
          algorithm,
          array[lastUnsortedIdx],
          lastUnsortedIdx--,
          ItemStateColorEnum.SORTED
        ),
      ],
    });
  }

  return toDispatch;
}

function partition(array, sortedArray, lastUnsortedIdx, toDispatch, algorithm) {
  let sorted = true;

  for (let i = 0; i < lastUnsortedIdx; i++) {
    toDispatch.push({
      actions: [cursorMapper(algorithm, array, i)],
    });
    if (array[i].value > array[i + 1].value) {
      toDispatch.push(...swap(array, i, i + 1, algorithm));
      sorted = false;
    }
    toDispatch.push({
      actions: [
        cursorReleasedMapper(
          algorithm,
          array,
          i,
          itemIsSorted(sortedArray, array[i], i)
        ),
      ],
    });
  }
  return sorted;
}
