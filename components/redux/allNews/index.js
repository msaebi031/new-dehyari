import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: [],
  count: 0,
  page: 1,
};

const cartSlice = createSlice({
  name: "allNews",
  initialState,
  reducers: {
    addAllNews: (state, action) => {
      state.data = [...action.payload];
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.allNews.data;
      state.count = action.payload.allNews.count;
      state.page = action.payload.allNews.page;
    },
  },
});

export default cartSlice.reducer;
export const { addAllNews, setCount, setPage } = cartSlice.actions;

export const selectAllNews = (state) => state.allNews.data;
