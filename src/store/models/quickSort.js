import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "quickSort",
  initialState: {
    label: "QuickSort",
    items: [],
    executionTime: null,
  },
  reducers: {
    free: (state, action) => {
      state.items = [];
    },
    setExecutionTime: (state, action) => {
      const { executionTime, items } = action.payload;
      state.executionTime = executionTime;
      state.sortedItems = items;
    },
    setItem: (state, action) => {
      const { index, item } = action.payload;
      state.items[index] = item;
    },
    setItems: (state, action) => {
      const { items } = action.payload;
      state.items = items;
    },
  },
});

const { actions, reducer } = slice;
export const { name } = slice;
export const { free, setExecutionTime, setItem, setItems } = actions;
export default reducer;
