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

export function swap(array, leftElementIdx, rightElementIdx, action) {
  const updateSwappers = (state) => [
    action(setItemMapper(array[leftElementIdx], leftElementIdx, state)),
    action(setItemMapper(array[rightElementIdx], rightElementIdx, state)),
  ];

  let toDispatch = [];
  toDispatch.push({
    actions: [...updateSwappers(ItemStateColorEnum.SWAPPER)],
    waiting: true,
  });
  arrayUtils.swap(array, leftElementIdx, rightElementIdx);
  toDispatch.push({
    actions: [...updateSwappers(ItemStateColorEnum.SWAPPED)],
    waiting: true,
  });
  return toDispatch;
}

export function getItemsPartition(array, startIdx, endIdx, action) {
  const toDispatch = [];
  for (let i = startIdx; i <= endIdx; i++) {
    toDispatch.push(
      action(setItemMapper(array[i], i, ItemStateColorEnum.PARTITIONED))
    );
  }
  return toDispatch;
}

export function swappersReleased(array, sortedArray, i, j, action) {
  return [
    action(
      cursorReleasedMapper(array, i, itemIsSorted(sortedArray, array[i], i))
    ),
    action(
      cursorReleasedMapper(array, j, itemIsSorted(sortedArray, array[j], j))
    ),
  ];
}

export const getIndexById = (array, id) =>
  array.findIndex((element) => element.id === id);
