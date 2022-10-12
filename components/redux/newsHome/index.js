// store/counter.js

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
  name: "newsHome",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (newsHome, action) => {
      newsHome.data = [...action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (newsHome, action) => {
      newsHome.data = action.payload.newsHome.data;
    },
  },
});

export default slice.reducer;

export const { setData } = slice.actions;

export const selectData = (state) => state.newsHome.data;
