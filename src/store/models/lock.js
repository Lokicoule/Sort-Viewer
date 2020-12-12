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

const {
  bubbleSortLocked,
  quickSortLocked,
  mergeSortLocked,
  selectionSortLocked,
} = slice.actions;
export const locks = {
  bubbleSort: bubbleSortLocked,
  selectionSort: selectionSortLocked,
  mergeSort: mergeSortLocked,
  quickSort: quickSortLocked,
};
export default slice.reducer;
