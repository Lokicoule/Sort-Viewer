export async function swap(array, leftElementIdx, rightElementIdx) {
  [array[leftElementIdx], array[rightElementIdx]] = [
    array[rightElementIdx],
    array[leftElementIdx],
  ];
}
