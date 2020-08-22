import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "speed",
  initialState: {
    value: 1,
  },
  reducers: {
    setSpeed: (speed, action) => {
      speed.value = action.payload;
    },
  },
});

export const { setSpeed } = slice.actions;
export default slice.reducer;
