import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "lock",
  initialState: {
    bubbleSort: false,
    quickSort: false,
    mergeSort: false,
    selectionSort: false,
  },
  reducers: {
    bubbleSortLocked: (lock, { payload }) => {
      lock.bubbleSort = payload;
    },
    quickSortLocked: (lock, { payload }) => {
      lock.quickSort = payload;
    },
    mergeSortLocked: (lock, { payload }) => {
      lock.mergeSort = payload;
    },
    selectionSortLocked: (lock, { payload }) => {
      lock.selectionSort = payload;
    },
    heapSortLocked: (lock, { payload }) => {
      lock.heapSort = payload;
    },
  },
});

const {
  bubbleSortLocked,
  quickSortLocked,
  mergeSortLocked,
  selectionSortLocked,
  heapSortLocked,
} = slice.actions;
export const locks = {
  bubbleSort: bubbleSortLocked,
  selectionSort: selectionSortLocked,
  mergeSort: mergeSortLocked,
  quickSort: quickSortLocked,
  heapSort: heapSortLocked,
};
export default slice.reducer;
