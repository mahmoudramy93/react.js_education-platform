import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/courseSlice";
import lessonsReducer from "../features/lessons/lessonSlice";
import formReducer from "../features/coursesForm/formSlice";
import searchReducer from "../features/search/searchSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    lessons: lessonsReducer,
    form: formReducer,
    search: searchReducer,
    categories: categoriesReducer,
  },
});

export default store;
