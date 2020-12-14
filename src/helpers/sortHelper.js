export default class SortHelper {
  static sortItemsByValueAsc = (items) =>
    [...items].sort(
      (item, nextItem) => (item.value < nextItem.value && -1) || 1
    );

  static itemIsSorted = (sortedArr, elemToSort, newIdx) =>
    sortedArr.some(
      (elem, i) => elem.value === elemToSort.value && i === newIdx
    );

  static generateRandomArray(length, max) {
    let array = [];
    let index = 0;
    while (array.length < length)
      array.push({
        id: index++,
        value: Math.round(Math.random() * max + 15),
      });
    return array;
  }

  static getIndexById = (array, id) =>
    array.findIndex((element) => element.id === id);
}
