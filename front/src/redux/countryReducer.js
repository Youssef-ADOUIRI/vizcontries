import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = 1;
    },
    decrement: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = countrySlice.actions;

export default countrySlice.reducer;
