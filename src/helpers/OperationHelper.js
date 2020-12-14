import { ItemStateColorEnum } from "../constants/item";
import ArrayUtils from "../utils/ArrayUtils";
import { cursorReleasedMapper, setItemMapper } from "./mappers/payloadMapper";
import SortHelper from "./SortHelper";

export default class OperationHelper {
  static swap(array, leftElementIdx, rightElementIdx, algorithm) {
    const updateSwappers = (state) => [
      setItemMapper(algorithm, array[leftElementIdx], leftElementIdx, state),
      setItemMapper(algorithm, array[rightElementIdx], rightElementIdx, state),
    ];

    let toDispatch = [];
    toDispatch.push({
      actions: [...updateSwappers(ItemStateColorEnum.SWAPPER)],
    });
    ArrayUtils.swap(array, leftElementIdx, rightElementIdx);
    toDispatch.push({
      actions: [...updateSwappers(ItemStateColorEnum.SWAPPED)],
    });
    return toDispatch;
  }

  static getItemsPartition(array, startIdx, endIdx, algorithm) {
    const toDispatch = [];
    for (let i = startIdx; i <= endIdx; i++) {
      toDispatch.push(
        setItemMapper(algorithm, array[i], i, ItemStateColorEnum.PARTITIONED)
      );
    }
    return toDispatch;
  }

  static swappersReleased(array, sortedArray, i, j, algorithm) {
    return [
      cursorReleasedMapper(
        algorithm,
        array,
        i,
        SortHelper.itemIsSorted(sortedArray, array[i], i)
      ),
      cursorReleasedMapper(
        algorithm,
        array,
        j,
        SortHelper.itemIsSorted(sortedArray, array[j], j)
      ),
    ];
  }
}
