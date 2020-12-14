import { ItemStateColorEnum } from "../constants/item";
import decorator from "../helpers/decorators/sortOperation";
import {
  cursorMapper,
  cursorReleasedMapper,
  setItemMapper,
} from "../helpers/mappers/payloadMapper";
import OperationHelper from "../helpers/OperationHelper";
import SortHelper from "../helpers/SortHelper";
import { sortActionDispatched } from "../store/actions/sorting";

export const sortOperation = (array, sortedArray, algorithm) => (dispatch) => {
  const wrappedSort = decorator(heapSort)(algorithm);
  dispatch(
    sortActionDispatched({
      toDispatch: wrappedSort([...array], sortedArray, algorithm),
      latencies: 8,
    })
  );
};

export function heapSort(array, sortedArray, algorithm) {
  let toDispatch = [];
  let { length } = array;
  let lastChild = length - 1;
  toDispatch.push(...maxHeapBuilder(array, sortedArray, algorithm));
  while (lastChild >= 0) {
    toDispatch.push(...OperationHelper.swap(array, lastChild, 0, algorithm));
    toDispatch.push({
      actions: [
        setItemMapper(
          algorithm,
          array[lastChild],
          lastChild,
          ItemStateColorEnum.SORTED
        ),
      ],
    });
    toDispatch.push(...heapify(array, sortedArray, lastChild, 0, algorithm));
    lastChild--;
  }
  return toDispatch;
}

function maxHeapBuilder(array, sortedArray, algorithm) {
  let toDispatch = [];
  const { length } = array;
  let currentIndex = Math.floor(length / 2);

  while (currentIndex >= 0) {
    toDispatch.push({
      actions: [cursorMapper(algorithm, array, currentIndex)],
    });
    toDispatch.push(
      ...heapify(array, sortedArray, length, currentIndex, algorithm)
    );
    toDispatch.push({
      actions: [
        cursorReleasedMapper(
          algorithm,
          array,
          currentIndex,
          SortHelper.itemIsSorted(
            sortedArray,
            array[currentIndex],
            currentIndex
          )
        ),
      ],
    });
    currentIndex--;
  }
  return toDispatch;
}

function heapify(array, sortedArray, length, currentIndex, algorithm) {
  let toDispatch = [];
  let root = currentIndex;
  let left = getLeftChildIndex(currentIndex);
  let right = getRightChildIndex(currentIndex);

  if (!isOutOfRange(length, left) && array[left].value > array[root].value)
    root = left;
  if (!isOutOfRange(length, right) && array[right].value > array[root].value)
    root = right;
  if (currentIndex !== root) {
    toDispatch.push(
      ...OperationHelper.swap(array, currentIndex, root, algorithm)
    );
    toDispatch.push({
      actions: [
        ...OperationHelper.swappersReleased(
          array,
          sortedArray,
          currentIndex,
          root,
          algorithm
        ),
      ],
    });
    toDispatch.push(...heapify(array, sortedArray, length, root, algorithm));
  }
  return toDispatch;
}

const getLeftChildIndex = (i) => 2 * i + 1;

const getRightChildIndex = (i) => 2 * i + 2;

const isOutOfRange = (length, i) => i >= length;
