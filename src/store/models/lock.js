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
  },
});

export const {
  bubbleSortLocked,
  quickSortLocked,
  mergeSortLocked,
  selectionSortLocked,
} = slice.actions;
export default slice.reducer;
