import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.data = [...action.payload];
    },
    addOneNews: (state, action) => {
      state.data = [{ ...action.payload }, ...state.data];
    },
    updateNews: (state, action) => {
      const courses = [...state.data];
      const updatedCourses = [...courses];
      const courseIndex = updatedCourses.findIndex(
        (course) => course.id == action.payload.id
      );

      let course = updatedCourses[courseIndex];

      course.name = action.payload.name;
      course.p = action.payload.p;
      course.text = action.payload.text;
      updatedCourses[courseIndex] = course;
      state.data = [...updatedCourses];
    },
    deleteNews: (state, action) => {
      const itemId = action.payload;
      state.data = state.data.filter((item) => item.id !== itemId);
    },
  },
});

export const { addNews, addOneNews, updateNews, deleteNews } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectNews = (state) => state.news.data;
