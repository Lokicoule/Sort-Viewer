import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_ARRAY_SIZE } from "../../constants/components";

const slice = createSlice({
  name: "referential",
  initialState: {
    sortedItems: [],
    nbItems: INITIAL_ARRAY_SIZE.size,
  },
  reducers: {
    setNbItems: (referential, action) => {
      const { nbItems } = action.payload;
      referential.nbItems = nbItems;
    },
    setSortedItems: (referential, action) => {
      const { sortedItems } = action.payload;
      referential.sortedItems = sortedItems;
    },
  },
});

export const { setNbItems, setSortedItems, setItems } = slice.actions;
export const { name } = slice;

export default slice.reducer;
