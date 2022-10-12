// store/configureStore.js

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import newsHome from "../newsHome";
import news from "../news";
import allNews from "../allNews";

export const wrapper = createWrapper(() =>
  configureStore({
    reducer: {
      newsHome,
      news,
      allNews,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  })
);
