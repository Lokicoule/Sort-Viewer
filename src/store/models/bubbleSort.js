import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "bubbleSort",
  initialState: {
    label: "BubbleSort",
    items: [],
    executionTime: null,
  },
  reducers: {
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
export const { setItem, setItems, setExecutionTime } = actions;
export default reducer;
