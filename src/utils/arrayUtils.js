export default class ArrayUtils {
  static swap(array, leftElementIdx, rightElementIdx) {
    [array[leftElementIdx], array[rightElementIdx]] = [
      array[rightElementIdx],
      array[leftElementIdx],
    ];
  }
}
