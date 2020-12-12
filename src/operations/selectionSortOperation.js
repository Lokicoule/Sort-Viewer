import { sortActionDispatched } from "../store/actions/sorting";
import decorator from "../helpers/decorators/sortOperation";
import { ItemStateColorEnum } from "../constants/item";
import { itemIsSorted, swap } from "../helpers/sortHelper";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";

export const sortOperation = (array, sortedArray, algorithm) => (dispatch) => {
  const wrappedSort = decorator(selectionSort)(algorithm);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray, algorithm),
      latencies: 5,
    })
  );
};

function selectionSort(array, sortedArray, algorithm) {
  let toDispatch = [];
  for (let i = 0; i < array.length; i++) {
    partition(i, toDispatch, array, sortedArray, algorithm);
    toDispatch.push({
      actions: [
        setItemMapper(algorithm, array[i], i, ItemStateColorEnum.SORTED),
      ],
    });
  }
  return toDispatch;
}

function partition(lastUnsortedIdx, toDispatch, array, sortedArray, algorithm) {
  const nbElements = array.length;
  let minIdx = lastUnsortedIdx;

  for (let i = lastUnsortedIdx; i < nbElements; i++) {
    toDispatch.push({
      actions: [cursorMapper(algorithm, array, i)],
    });
    if (array[i].value < array[minIdx].value) {
      toDispatch.push({
        actions: [
          cursorReleasedMapper(
            algorithm,
            array,
            minIdx,
            itemIsSorted(sortedArray, array[minIdx], minIdx)
          ),
          getMinItemAction(array, i, algorithm),
        ],
      });
      minIdx = i;
    }
    toDispatch.push({
      actions: [
        getReleaseCursorAction(i, minIdx, array, sortedArray, algorithm),
      ],
    });
  }
  toDispatch.push(...swap(array, lastUnsortedIdx, minIdx, algorithm));
}

function getMinItemAction(array, i, algorithm) {
  return setItemMapper(algorithm, array[i], i, ItemStateColorEnum.PIVOT);
}

function getReleaseCursorAction(i, minIdx, array, sortedArray, algorithm) {
  return (
    (i !== minIdx &&
      cursorReleasedMapper(
        algorithm,
        array,
        i,
        itemIsSorted(sortedArray, array[i], i)
      )) ||
    setItemMapper(algorithm, array[i], i, ItemStateColorEnum.PIVOT)
  );
}
