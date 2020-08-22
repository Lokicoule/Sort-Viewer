import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mergeSort",
  initialState: {
    label: "MergeSort",
    items: [],
    executionTime: null,
  },
  reducers: {
    free: (state) => {
      state.items = [];
    },
    setItem: (state, action) => {
      const { index, item } = action.payload;
      state.items[index] = item;
    },
    setItems: (state, action) => {
      const { items } = action.payload;
      state.items = items;
    },
    setExecutionTime: (state, action) => {
      const { executionTime } = action.payload;
      state.executionTime = executionTime;
    },
  },
});

const { actions, reducer } = slice;
export const { name } = slice;
export const { free, setExecutionTime, setItem, setItems } = actions;
export default reducer;
