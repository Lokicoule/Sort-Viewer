import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "algorithms",
  initialState: {
    bubbleSort: {
      checked: true,
      label: "BubbleSort",
      items: [],
      executionTime: null,
    },
    selectionSort: {
      checked: true,
      label: "SelectionSort",
      items: [],
      executionTime: null,
    },
    mergeSort: {
      checked: true,
      label: "MergeSort",
      items: [],
      executionTime: null,
    },
    quickSort: {
      checked: true,
      label: "QuickSort",
      items: [],
      executionTime: null,
    },
  },
  reducers: {
    setAlgorithm: (algorithms, action) => {
      const { algorithm, checked } = action.payload;
      console.log(algorithm);
      algorithms[algorithm].checked = checked;
    },
    setItem: (algorithms, action) => {
      const { algorithm, index, item } = action.payload;
      algorithms[algorithm].items[index] = item;
    },
    setItems: (algorithms, action) => {
      const { algorithm, items } = action.payload;
      algorithms[algorithm].items = items;
    },
    setExecutionTime: (algorithms, action) => {
      const { algorithm, executionTime } = action.payload;
      algorithms[algorithm].executionTime = executionTime;
    },
  },
});

export const {
  setAlgorithm,
  setItem,
  setItems,
  setExecutionTime,
} = slice.actions;
export default slice.reducer;
