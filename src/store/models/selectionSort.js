import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "selectionSort",
  initialState: {
    label: "SelectionSort",
    items: [],
    executionTime: null,
  },
  reducers: {
    free: (state, action) => {
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
export const { setItem, setItems, free, setExecutionTime } = actions;
export default reducer;
