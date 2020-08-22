import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "algorithms",
  initialState: {
    bubbleSort: {
      checked: true,
      label: "BubbleSort",
    },
    selectionSort: {
      checked: true,
      label: "SelectionSort",
    },
    mergeSort: {
      checked: true,
      label: "MergeSort",
    },
    quickSort: {
      checked: true,
      label: "QuickSort",
    },
  },
  reducers: {
    setAlgorithm: (algorithms, action) => {
      const { name, checked } = action.payload;
      algorithms[name].checked = checked;
    },
  },
});

export const { setAlgorithm } = slice.actions;
export default slice.reducer;
