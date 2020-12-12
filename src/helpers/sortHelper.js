import { ItemStateColorEnum } from "../constants/item";
import * as arrayUtils from "../utils/arrayUtils";
import { cursorReleasedMapper, setItemMapper } from "./mappers/payloadMapper";

export const sortItemsByValueAsc = (items) =>
  [...items].sort((item, nextItem) => (item.value < nextItem.value && -1) || 1);

export const itemIsSorted = (sortedArr, elemToSort, newIdx) =>
  sortedArr.some((elem, i) => elem.value === elemToSort.value && i === newIdx);

export function generateRandomArray(length, max) {
  let array = [];
  let index = 0;
  while (array.length < length)
    array.push({
      id: index++,
      value: Math.round(Math.random() * max + 15),
    });
  return array;
}

export function swap(array, leftElementIdx, rightElementIdx, algorithm) {
  const updateSwappers = (state) => [
    setItemMapper(algorithm, array[leftElementIdx], leftElementIdx, state),
    setItemMapper(algorithm, array[rightElementIdx], rightElementIdx, state),
  ];

  let toDispatch = [];
  toDispatch.push({
    actions: [...updateSwappers(ItemStateColorEnum.SWAPPER)],
  });
  arrayUtils.swap(array, leftElementIdx, rightElementIdx);
  toDispatch.push({
    actions: [...updateSwappers(ItemStateColorEnum.SWAPPED)],
  });
  return toDispatch;
}

export function getItemsPartition(array, startIdx, endIdx, algorithm) {
  const toDispatch = [];
  for (let i = startIdx; i <= endIdx; i++) {
    toDispatch.push(
      setItemMapper(algorithm, array[i], i, ItemStateColorEnum.PARTITIONED)
    );
  }
  return toDispatch;
}

export function swappersReleased(array, sortedArray, i, j, algorithm) {
  return [
    cursorReleasedMapper(
      algorithm,
      array,
      i,
      itemIsSorted(sortedArray, array[i], i)
    ),
    cursorReleasedMapper(
      algorithm,
      array,
      j,
      itemIsSorted(sortedArray, array[j], j)
    ),
  ];
}

export const getIndexById = (array, id) =>
  array.findIndex((element) => element.id === id);
